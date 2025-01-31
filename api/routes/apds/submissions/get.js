import loggerFactory from '../../../logger/index.js';
import { getLaunchDarklyFlag as flag } from '../../../middleware/launchDarkly.js';
import { getAllSubmittedAPDs as sub } from '../../../db/apds.js';

const logger = loggerFactory('apds/submissions get');

export default (
  app,
  { getAllSubmittedAPDs = sub, getLaunchDarklyFlag = flag } = {}
) => {
  logger.silly('setting up GET /apds/submissions route');

  app.get('/apds/submissions', async (req, res, next) => {
    let ip = req?.headers?.['x-forwarded-for'] || req?.ip || '';
    ip = ip.toString().replace('::ffff:', '');
    const sharepoint = await getLaunchDarklyFlag(
      'sharepoint-endpoints-4196',
      {
        key: 'anonymous',
        anonymous: true,
        ip
      },
      false
    );
    if (sharepoint !== true) {
      return res.status(403).end();
    }

    logger.silly({
      id: req.id,
      message: 'attempting to retrieve sumbitted APDs'
    });

    let submittedApds = [];
    try {
      submittedApds = await getAllSubmittedAPDs();
      return res.send(submittedApds);
    } catch (e) {
      logger.error({
        id: req.id,
        message: 'Error retrieving submitted APDs'
      });
      logger.error({ id: req.id, message: e });
      next({ message: 'Error retrieving submitted APDs' });
    }
    return res.send(submittedApds);
  });
};

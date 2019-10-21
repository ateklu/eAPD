const logger = require('../../../logger')('auth activities route index');
const { knex } = require('../../../db');
const { can } = require('../../../middleware');

module.exports = (app, { db = knex } = {}) => {
  logger.silly('setting up GET /auth/activities route');
  app.get('/auth/activities', can('view-roles'), async (req, res) => {
    logger.silly(req, 'handling GET /auth/activities');
    try {
      const activities = await db('auth_activities').select();
      logger.silly(
        req,
        `got all the activities: ${activities
          .map(({ name }) => name)
          .join(', ')}`
      );
      res.send(activities);
    } catch (e) {
      logger.error(req, e);
      res.status(500).end();
    }
  });
};

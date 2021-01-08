import { Dialog, Button } from '@cmsgov/design-system';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Countdown, { zeroPad } from 'react-countdown';
import { v4 as uuidv4 } from 'uuid';

import { Spinner } from '../components/Icons';

import { extendSession, logout } from '../actions/auth';

const SessionEndingAlert = ({
  isSessionEnding,
  isExtendingSession,
  isLoggingOut,
  expiresAt,
  extend,
  logoutAction
}) => {
  const className = isSessionEnding
    ? 'alert--session-expiring__active'
    : 'alert--session-expiring__inactive';

  /* eslint-disable react/prop-types */
  const createTimer = ({ minutes, seconds }) => {
    return (
      <span>
        Your session will end in {zeroPad(minutes)}:{zeroPad(seconds)} minutes.
        If you’d like to keep working, choose continue.
      </span>
    );
  };

  return (
    <div
      aria-hidden={!isSessionEnding}
      aria-live="polite"
      className={`alert--session-expiring ${className}`}
    >
      <div id="session-ending-modal" />
      {isSessionEnding && (
        <Dialog
          key={uuidv4()}
          heading="Your session is expiring."
          alert
          getApplicationNode={() =>
            document.getElementById('session-ending-modal')
          }
          actionsClassName="ds-u-text-align--right ds-u-margin-bottom--0"
          actions={[
            <Button variation="primary" onClick={extend} key={uuidv4()}>
              {isExtendingSession && <Spinner />}
              {isExtendingSession ? ' Continuing' : 'Continue'}
            </Button>,
            <Button
              variation="transparent"
              onClick={logoutAction}
              key={uuidv4()}
            >
              {isLoggingOut && <Spinner />}
              {isLoggingOut ? ' Signing out' : 'Sign out'}
            </Button>
          ]}
          ariaCloseLabel="Close and continue"
          closeText="Close"
          onExit={extend}
          underlayClickExits={false}
          escapeExitDisabled
          size="wide"
        >
          <Countdown
            date={expiresAt - 5000}
            key={uuidv4()}
            renderer={createTimer}
            onComplete={logoutAction}
            onStop={extend}
          />
        </Dialog>
      )}
    </div>
  );
};

SessionEndingAlert.propTypes = {
  isSessionEnding: PropTypes.bool.isRequired,
  isExtendingSession: PropTypes.bool.isRequired,
  isLoggingOut: PropTypes.bool.isRequired,
  expiresAt: PropTypes.number.isRequired,
  extend: PropTypes.func.isRequired,
  logoutAction: PropTypes.func.isRequired
};

const mapStateToProps = ({
  auth: { isSessionEnding, isExtendingSession, isLoggingOut, expiresAt }
}) => ({
  isSessionEnding,
  isExtendingSession,
  isLoggingOut,
  expiresAt
});

const mapDispatchToProps = {
  extend: extendSession,
  logoutAction: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionEndingAlert);

export { SessionEndingAlert as plain, mapStateToProps, mapDispatchToProps };
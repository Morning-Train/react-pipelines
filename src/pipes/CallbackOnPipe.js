import React from 'react';
import PropTypes from 'prop-types';
import useWillPipe from '../hooks/use-will-pipe';

function CallbackOnPipe({ callback }) {
  useWillPipe((payload) => new Promise((resolve, reject) => {
    Promise.resolve(callback(payload))
      .then(() => {
        resolve(payload);
      })
      .catch((err) => {
        reject(err);
      });
  }), [callback]);

  return null;
}

CallbackOnPipe.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default CallbackOnPipe;

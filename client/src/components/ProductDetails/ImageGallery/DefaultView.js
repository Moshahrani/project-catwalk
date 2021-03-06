import React from 'react';
import PropTypes from 'prop-types';

const DefaultView = ({ url }) => (
  <div>
    default view
    <img src={url} alt="" />
  </div>
);

DefaultView.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DefaultView;

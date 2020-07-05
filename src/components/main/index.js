import React from 'react';
import PropTypes from 'prop-types';

const Main = ({title}) => (
  <div>{title}</div>
);

Main.propTypes = {
  title: PropTypes.string,
};

export default Main;
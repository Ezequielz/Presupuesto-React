import React from 'react';
import PropTypes from "prop-types"

const error = ({mensaje}) => (
    <p className="alert alert-danger error">{mensaje}</p>
);

error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default error;
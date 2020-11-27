import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    let wraperClass = 'form-group';
    if (props.error.length > 0) {
        wraperClass += ' hasError';
    }
    return (
        <div className={wraperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    id={props.id}
                    type="text"
                    name={props.name}
                    className="form-control"
                    onChange={props.onChange}
                    value={props.value}
                />
            </div>
            {props.error && <div className='alert alert-danger'>{props.error}</div>}
        </div>
    );


};
TextInput.prototype = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.error
};

TextInput.defaultProps = {
    error: ''
};

export default TextInput;
import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css';

export class CustomButton extends React.Component {

    render() {
        return (
            <button className={this.props.className ? this.props.className : 'btn-dark'} disabled={this.props.disabled} onClick={this.props.handleClick}>
                {this.props.name}
            </button>
        )
    }
}

CustomButton.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default CustomButton;
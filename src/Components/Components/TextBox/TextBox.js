import React from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

export class TextBox extends React.Component {

    render() {
        return (
            <fieldset className='text-box'>
                <label>{this.props.name}{this.props.isMandatory ? (<span className='mandatory'>*</span>) : ''}</label>
                <input id={this.props.id}
                    placeholder={this.props.placeholder}
                    className='text-box-input'
                    type='text'
                    onChange={this.props.onChange}>
                </input>
                {this.props.error ? (<label className="text-box-error">{this.props.error}</label>) : ''}

            </fieldset>

        );
    }
}

TextBox.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    isMandatory: PropTypes.bool
}

export default TextBox;
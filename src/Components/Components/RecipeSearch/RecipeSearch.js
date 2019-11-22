import React from 'react';
import TextBox from '../TextBox/TextBox';
import CustomButtom from '../CustomButton/CustomButton';
import './RecipeSearch.css';

export class RecipeSearch extends React.Component {

    render() {
        return (
            <div className='recipe-search'>
                <h1>{this.props.title}</h1>

                <div className='row text-center'>
                    <div className='col-md-4 input-column'>
                        <TextBox id='searchQuery'
                            name='Key'
                            placeholder='Enter key'
                            onChange={this.props.onChange} />
                    </div>
                    <div className='col-md-4 input-column'>
                        <TextBox id='ingredients'
                            name='Ingredients'
                            placeholder='Enter ingredients'
                            onChange={this.props.onChange} />
                    </div>
                    <div className='col-md-4 button-column'>
                        <CustomButtom name='Search'
                            handleClick={this.props.handleSearch} />
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeSearch;
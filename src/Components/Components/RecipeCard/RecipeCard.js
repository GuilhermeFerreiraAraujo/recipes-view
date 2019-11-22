import React from 'react';
import './RecipeCard.css';

export class RecipeCard extends React.Component {


    render() {
        return (
            <div className='recipe-card'>
                <div className='recipe-card-thumbnail'>
                    <img src={this.props.thumbnail} alt={this.props.title} />
                </div>
                <div className='recipe-card-details'>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.ingredients}</p>
                </div>
            </div>
        );
    }

}


export default RecipeCard;
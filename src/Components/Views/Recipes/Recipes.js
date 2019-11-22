import React from 'react';
import * as RecipeServices from '../../../Services/RecipesServices';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import RecipeSearch from '../../Components/RecipeSearch/RecipeSearch';
import './Recipes.css';

export class Recipes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            recipes: [],
            params: {
                ingredients: '',
                searchQuery: '',
                page: ''
            }
        }

        this.getRecipes = this.getRecipes.bind(this);
    }

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes() {
        RecipeServices.GetRecipes(this.state.params).then(response => {
            console.log(response.data.results);
            this.setState({
                recipes: Array.from(response.data.results),
                title: response.data.title
            })
        }).catch(ex => {
            console.log(ex);
        });
    }

    render() {

        let results = [];

        if (this.state.recipes){
            results = this.state.recipes.map(x => 
                <RecipeCard ingredients={x.ingredients}
                    title={x.title}
                    thumbnail={x.thumbnail}
                    href={x.href}/>)
        }

        return (
            <div>
                <RecipeSearch />
                {results}
            </div>
        );
    }

}

export default Recipes;
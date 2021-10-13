import React from 'react'
import { Link } from "react-router-dom";
import {userContext} from "./context"
import Error from './Error';
import Loading from "./Loading"

const CocktailDetails = () => {
    const {isLoading, cocktailDetails} = React.useContext(userContext);
    
    if(isLoading) {
        return <Loading/>
    }
    

    if(!cocktailDetails[0]) {
        return <Error/>
    }

    const {
        category,
        drinkType,
        glassType,
        id,
        image,
        ingredient,
        instructions,
        name,
        } = cocktailDetails[0]

    const availableIngredient = ingredient.filter(item => !!item).join(", ").trim()
    

    return (
        <section className="cocktail-section">
            <button className="btn"><Link to="/">Go home</Link></button>
            <h2 className="cocktail-title">{name}</h2>
            <img className="cocktail__image" src={image} alt={name}/>
            
            <ul className="cocktail-info__items">
                <li className="cocktail-info__item">Name: {name}</li>
                <li className="cocktail-info__item">Category: {category}</li>
                <li className="cocktail-info__item">Drink type: {drinkType}</li>
                <li className="cocktail-info__item">Glass: {glassType}</li>
                <li className="cocktail-info__item cocktail-info__item--instructions">Instructions:<p> {instructions}</p></li>
                <li className="cocktail-info__item cocktail-info__item--instructions">Ingredients: {availableIngredient}</li>
            </ul>
        </section>
    )
    
    
}

export default CocktailDetails

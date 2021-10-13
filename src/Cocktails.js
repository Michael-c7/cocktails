import React from 'react'
import { Link } from "react-router-dom";
import {userContext} from "./context"
import Loading from "./Loading"
import Error from "./Error"

const Cocktails = () => {
    const {isLoading, cocktails, setCocktailDetailsId} = React.useContext(userContext);

    if(isLoading) {
        return <Loading/>
    } else if(cocktails.length <= 0) {
        return <Error/>
    }

    return (
        <section className="cocktails-section">
            <ul className="cocktails">
                {cocktails.map((item) => {
                    const {id, name, image, drinkType, glassType} = item;
                    return (
                        <li className="cocktail" key={id}>
                            <img className="cocktail__image" src={image} alt={name}/>
                            <h2 className="cocktail__title">{name}</h2>
                            <h3 className="cocktail__glass">{glassType}</h3>
                            <p className="cocktail__type">{drinkType}</p>
                            <button className="btn" onClick={() => setCocktailDetailsId(id)}>
                                <Link to={`/cocktail/:${id}`}>Learn More</Link>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Cocktails

import React, { useState,useEffect,createContext } from "react";


const userContext = createContext();

const UserProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [cocktails, setCocktails] = useState([]);
    const [cocktailDetailsId, setCocktailDetailsId] = useState(0);
    const [cocktailDetails, setCocktailDetails] = useState("");

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const cocktailDetailsUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

    const test = _ => {
        console.log("test from context.js")
    }

    const fetchDrinks = React.useCallback(async _ => {
        setIsLoading(true)

        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();

            if(data.drinks) {
                let drinkData = data.drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strAlcoholic,
                        strDrinkThumb,
                        strGlass,
                    } = item;

                    return {
                        id:idDrink,
                        name:strDrink,
                        image:strDrinkThumb,
                        drinkType:strAlcoholic,
                        glassType:strGlass,
                    }
                });

                setIsLoading(false)
                setCocktails(drinkData)
            } else {
                setIsLoading(false)
                setCocktails([])
            }

        } catch(error) {
            console.log(error)
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchDrinks()
    },[searchTerm,fetchDrinks])





    const fetchDrinkDetails = React.useCallback(async _ => {
        setIsLoading(true)

        try {
            const response = await fetch(`${cocktailDetailsUrl}${cocktailDetailsId}`);
            const data = await response.json()

            if(!data.drinks) {
                setIsLoading(false)
                setCocktailDetails([]);
            } else {
                const drinkData = data.drinks.map((drink) => {
                    const {
                        idDrink,
                        strAlcoholic,
                        strCategory,
                        strDrink,
                        strDrinkThumb,
                        strGlass,
                        strInstructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                        strIngredient11,
                        strIngredient12,
                        strIngredient13,
                        strIngredient14,
                        strIngredient15,
                    } = drink;
                    return {
                        id:idDrink,
                        name:strDrink,
                        image:strDrinkThumb,
                        drinkType:strAlcoholic,
                        glassType:strGlass,
                        category:strCategory,
                        instructions:strInstructions,
                        ingredient:[
                            strIngredient1,
                            strIngredient2,
                            strIngredient3,
                            strIngredient4,
                            strIngredient5,
                            strIngredient6,
                            strIngredient7,
                            strIngredient8,
                            strIngredient9,
                            strIngredient10,
                            strIngredient11,
                            strIngredient12,
                            strIngredient13,
                            strIngredient14,
                            strIngredient15,
                            ], 
                    }
                })
                setIsLoading(false)
                setCocktailDetails(drinkData)
            }
        } catch(error) {
            console.log(error)
        }
    }, [cocktailDetailsId])

    useEffect(() => {
        fetchDrinkDetails()
    }, [cocktailDetailsId, fetchDrinkDetails])


    return (
        <userContext.Provider value={{
            test,
            isLoading,
            setIsLoading,
            searchTerm,
            setSearchTerm,
            cocktails,
            setCocktails,
            cocktailDetailsId,
            setCocktailDetailsId,
            cocktailDetails,
            }}>
        {children}
        </userContext.Provider>
    )
}

export {userContext, UserProvider};

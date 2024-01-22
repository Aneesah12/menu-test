import {useEffect, useState} from "react";
import fetchCocktails from "../api/cocktail-api";

export default function menuWithoutSolid  () {
    const [cocktails, setCocktails] = useState([]);
    const [displayCocktails, setDisplayCocktails] = useState(false);
    const handleFetch = async () => {
        const fetchedCocktails = await fetchCocktails().then(r => r.drinks);
        setCocktails(fetchedCocktails);
    }

    useEffect(() => {
        handleFetch().then(() => cocktails);
    }, []);

    return <>

        <h3>Cocktails!</h3>
        <button onClick={() => setDisplayCocktails(!displayCocktails)}>Click me!</button>
        {displayCocktails &&
        <ul>
            {cocktails.map(cocktail => {
                return (
                    <li key={cocktail.idDrink}>
                        <div>
                            <h3>{cocktail.strDrink}</h3>
                        </div>
                    </li>
                )
            })}
        </ul>}
    </>;
};
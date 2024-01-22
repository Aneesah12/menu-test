import axios from 'axios';

export default async function fetchCocktails() {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        console.log("RESPONSE!", response)
        return {
            drinks: response.data.drinks,
        }
    } catch (error) {
        console.log(error);
    }
}
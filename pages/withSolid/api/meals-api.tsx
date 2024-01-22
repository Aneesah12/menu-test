import axios from 'axios';

export default async function fetchMeals() {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
        console.log("RESPONSE22222!", response.data.meals)
        return {
            meals: response.data.meals,
        }
    } catch (error) {
        console.log(error);
    }
}
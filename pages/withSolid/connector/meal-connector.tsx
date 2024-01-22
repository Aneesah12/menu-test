import Menu from '../menu/menu-with-solid'
import fetchMeals from "../api/meals-api";


const ConnectedMeals = () => {
    const handleFetch = async () => {
        return await fetchMeals().then(r => r.meals);
    }
    return (
        <>
            <h3>Meals!</h3>
            <Menu clickForMenuItems={handleFetch} id={'idMeal'} name={'strMeal'}/>
        </>
    )
}
export default ConnectedMeals;
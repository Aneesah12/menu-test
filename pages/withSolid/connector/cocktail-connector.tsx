import Menu from '../menu/menu-with-solid'
import fetchCocktails from "../api/cocktail-api";

const ConnectedCocktails = () => {
    const handleFetch = async () => {
        return await fetchCocktails().then(r => r.drinks);
    }
    return (
        <>
            <h3>Cocktails!</h3>
            <Menu clickForMenuItems={handleFetch} id={'idDrink'} name={'strDrink'}/>
        </>
    )
}
export default ConnectedCocktails;


const toggleFavorite = (id:number) =>{

    console.log("toggle Llamado")

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites')|| '[]');

    if(favorites.includes(id)){
        favorites = favorites.filter (pokeId => pokeId !=id)
    }else{
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existFavorites = (id:number)=>{
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites')|| '[]');

    return favorites.includes(id);
}

const pokemons = ():number[] =>{
    return JSON.parse(localStorage.getItem('favorites')|| '[]');
}

export default{
    toggleFavorite,
    existFavorites,
    pokemons
}
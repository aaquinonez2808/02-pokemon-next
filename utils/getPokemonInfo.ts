import pokeApi from "../api/pokeApi";
import { Pokemon } from "../interfaces/pokem-full";

export const getPokemonInfo  = async(nameOrId:string)=>{

    const {data} = await pokeApi.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }
}
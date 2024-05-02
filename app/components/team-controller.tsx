import React, {useState} from "react";

const useTeamController = (): [({id: string}[]), (id: string)=>void, (index: number)=>void] => {
    const [pokemonArray, setPokemonArray] =
        useState([{id: ""}]);

    function addPokemon(id: string) {
        let newPokemon = { id: id };
        let onlySelectedPokemon = pokemonArray.filter((v: { id: string; }) => v.id !== "");
        onlySelectedPokemon.push(newPokemon)
        setPokemonArray(onlySelectedPokemon);
    }

    function removePokemon(index: number) {
        let onlySelectedPokemon = pokemonArray.filter((v: { id: string; }) => v.id !== "");
        onlySelectedPokemon.splice(index, 1);
        setPokemonArray(onlySelectedPokemon);
    }

    function normalizePokemonArray(pokemonArray: {id: string}[]) {
        if (pokemonArray.length < 6) {
            while (pokemonArray.length < 6) {
                pokemonArray.push({id: ""});
            }
        }
        if (pokemonArray.length > 6) {
            pokemonArray.shift()
        }
        return pokemonArray;
    }

    return [normalizePokemonArray(pokemonArray), addPokemon, removePokemon]
}

export default useTeamController;
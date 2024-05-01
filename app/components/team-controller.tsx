import React, {useState} from "react";
import Pokemon from "@/app/components/pokemon";

const useTeamController = () => {
    const [pokemonArray, setPokemonArray] =
        useState(
            [
                {
                    id: "324.6",
                },
                {
                    id: "363.263",
                },
                {
                    id: "439.34",
                },
                {
                    id: "12.372",
                },
            ]);

    function addPokemon(id: string) {
        let newPokemon = { id: id };
        pokemonArray.push(newPokemon)
        setPokemonArray(pokemonArray);
    }

    function removePokemon(id: string) {}



    // function removePokemon(id: string) {
    //     var modifiedPokemonArray = pokemonArray;
    //     var specifiedPokemon = pokemonArray.indexOf({id: id});
    //     if (specifiedPokemon > -1) {
    //         modifiedPokemonArray.splice(specifiedPokemon, 1);
    //     }
    //     setPokemonArray(modifiedPokemonArray);
    // }

    return [pokemonArray, addPokemon, removePokemon ]
}

export default useTeamController;
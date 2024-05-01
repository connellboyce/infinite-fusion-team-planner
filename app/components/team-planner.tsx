"use client";
import React, {useState} from "react";
import Team from "@/app/components/team";
import SelectionMenu from "@/app/components/selection-menu";
import useTeamController from "@/app/components/team-controller";

const TeamPlanner = () => {
    const [team, addPokemon, removePokemon] = useTeamController();

    function normalizePokemonArray(pokemonArray: {id: string}[]) {
        if (pokemonArray.length < 6) {
            while (pokemonArray.length < 6) {
                pokemonArray.push({id: ""});
            }
        }
        if (pokemonArray.length > 6) {

        }
        return pokemonArray;
    }

    return (
        <section>
            <Team pokemonArray={normalizePokemonArray(team) } />
            <SelectionMenu />
        </section>
    )
}

export default TeamPlanner;
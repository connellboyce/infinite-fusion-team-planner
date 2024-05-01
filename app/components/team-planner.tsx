"use client";
import React, {useState} from "react";
import Team from "@/app/components/team";
import SelectionMenu from "@/app/components/selection-menu";
import useTeamController from "@/app/components/team-controller";

const TeamPlanner = () => {
    const [team, addPokemon, removePokemon] = useTeamController();
    const [refresh, setRefresh] = useState(false);

    function addPokemonToTeamController(id: string ) {
        addPokemon(id);

        // This is a hack.
        // The component is not rerendering on the above "addPokemon()"
        setRefresh(!refresh);
    }

    function removePokemonFromTeamController(index: number) {
        removePokemon(index);
        console.log("team planner:")
        console.log(team)

        // This is a hack.
        // The component is not rerendering on the above "removePokemon()"
        setRefresh(!refresh);
    }

    return (
        <section>
            <Team pokemonArray={ team } removePokemon={ removePokemonFromTeamController } />
            <SelectionMenu addPokemon={addPokemonToTeamController} />
        </section>
    )
}

export default TeamPlanner;
import React from "react";
import Pokemon from "@/app/components/pokemon";

const Team = (pokemonArray: {pokemonArray: {id: string}[]}, removePokemon: {removePokemon: Function}) => {
    return (
        <div className="bg-white rounded-xl border-gray-400 border-[0.02rem] mx-auto grid grid-cols-2 md:grid-cols-6 justify-items-center gap-y-0 w-[70%] mt-8">
            <h1 className="absolute font-bold text-blue-600 text-2xl z-100">Your Team</h1>
            {pokemonArray.pokemonArray.map((id, index) => (
                    <Pokemon key={index} id={id.id}  />
            ))}
        </div>
    )
}

export default Team;
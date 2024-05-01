import React from "react";
import Pokemon from "@/app/components/pokemon";

interface teamProps {
    removePokemon?: (index: number) => void,
    pokemonArray: {id: string}[],
}

const Team = ({removePokemon = (index: number) => {}, pokemonArray }: teamProps) => {
    return (
        <div className="bg-white rounded-xl border-gray-400 border-[0.02rem] mx-auto grid grid-cols-2 md:grid-cols-6 justify-items-center gap-y-0 w-[70%] mt-8">
            <h1 className="absolute font-bold text-blue-600 text-2xl z-100">Your Team</h1>
            {pokemonArray.map((id, index) => (
                    <Pokemon key={index} index={index} id={id.id} removePokemon={removePokemon} />
            ))}
        </div>
    )
}

export default Team;
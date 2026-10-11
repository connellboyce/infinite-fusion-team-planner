import React from "react";
import Pokemon from "@/app/components/pokemon";

interface teamProps {
    removePokemon?: (index: number) => void,
    pokemonArray: {id: string}[],
}

const Team = ({removePokemon = (index: number) => {}, pokemonArray }: teamProps) => {
    return (
        <div
            className="relative mx-auto mt-8 grid w-[32rem] max-w-[92%] grid-cols-2 justify-items-center rounded-xl border-[0.02rem] border-gray-400 bg-white px-2 pb-4 pt-10 sm:grid-cols-3 xl:w-[75rem] xl:max-w-[calc(100%-2rem)] xl:grid-cols-6 xl:gap-y-0 xl:px-4 xl:pb-8 xl:pt-12"
            style={{ rowGap: "1rem" }}
        >
            <h1 className="absolute left-1/2 top-2 -translate-x-1/2 text-2xl font-bold text-blue-600">Your Team</h1>
            {pokemonArray.map((id, index) => (
                    <Pokemon key={index} index={index} id={id.id} removePokemon={removePokemon} />
            ))}
        </div>
    )
}

export default Team;
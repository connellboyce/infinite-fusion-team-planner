"use client";
import React, {useEffect, useState} from "react";
import Pokeball from "@/app/components/pokeball";
import SpeciesCard from "@/app/components/species-card";

interface pokemonProps {
    removePokemon: (index: number) => void,
    id: string | undefined,
    index: number
}
const Pokemon = ({id, index, removePokemon}: pokemonProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const [name, setName] = useState("--");
    const [type1, setType1] = useState("NONE");
    const [type2, setType2] = useState("NONE");
    const [imageUrl, setImageUrl] = useState("/images/egg.png");

    const resetPokemonState = () => {
        setName("--");
        setType1("NONE");
        setType2("NONE");
        setImageUrl("/images/egg.png");
        setIsSelected(false);
    };

    const applyPokemonData = (data: { pokemon?: { name?: string; type?: string[] }; sprites?: Array<{ image_url?: string }> }) => {
        const pokemon = data?.pokemon ?? {};
        const types = Array.isArray(pokemon.type) && pokemon.type.length > 0 ? pokemon.type : ["NONE"];

        setName(pokemon.name ?? "--");
        setType1(types[0] ?? "NONE");
        setType2(types[1] ?? types[0] ?? "NONE");
        setImageUrl(data?.sprites?.[0]?.image_url ?? "/images/egg.png");
        setIsSelected(true);
    };

    useEffect(() => {
        if (id === undefined || id === "") {
            resetPokemonState();
            return;
        }

        fetch(`/api/fusiondex/${encodeURIComponent(id)}`)
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error(`FusionDex lookup failed for ${id}`);
                }

                return res.json();
            })
            .then((data) => {
                applyPokemonData(data);
            })
            .catch(() => {
                resetPokemonState();
            });
    }, [id]);

    const mapTypeToColor = (type: string): string => {
        if (type === "BUG") {
            return "#94bc4a";
        } else if (type === "DARK") {
            return ("#736c75");
        } else if (type === "DRAGON") {
            return ("#6a7baf");
        } else if (type === "ELECTRIC") {
            return("#e5c531");
        } else if (type === "FAIRY") {
            return("#e397d1");
        } else if (type === "FIGHTING") {
            return ("#cb5f48");
        } else if (type === "FIRE") {
            return("#ea7a3c");
        } else if (type === "FLYING") {
            return("#7da6de");
        } else if (type === "GHOST") {
            return("#846ab6");
        } else if (type === "GRASS") {
            return("#71c558");
        } else if (type === "GROUND") {
            return("#cc9f4f");
        } else if (type === "ICE") {
            return("#70cbd4");
        } else if (type === "NORMAL") {
            return("#aab09f");
        } else if (type === "POISON") {
            return("#b468b7");
        } else if (type === "PSYCHIC") {
            return("#e5709b");
        } else if (type === "ROCK") {
            return("#b2a061");
        } else if (type === "STEEL") {
            return("#89a1b0");
        } else if (type === "WATER") {
            return("#539ae2");
        } else {
            return "#68A090";
        }
    }

    function removeIfSelected() {
        if (isSelected) {
            removePokemon(index);
        }
    }

    return (
        <div className="px-0 pb-0 pt-0 lg:px-4 lg:pb-8 lg:pt-12">
            <div className={isSelected ? "cursor-not-allowed hover:animate-shake": ""} onClick={removeIfSelected}>
                <div className="scale-[0.8] origin-top transform-gpu xl:scale-[0.85]">
                    <Pokeball color1={mapTypeToColor(type1)} color2={mapTypeToColor(type2)} imageUrl={imageUrl}/>
                    <div className="py-1 lg:py-2">
                        <SpeciesCard name={name} color={mapTypeToColor(type1)} type1={type1} type2={type2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
"use client";
import React, {useEffect, useState} from "react";
import Pokeball from "@/app/components/pokeball";
import SpeciesCard from "@/app/components/species-card";

const Pokemon = ({id}: { id: string }) => {
    const [isLoading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [type1, setType1] = useState("???");
    const [type2, setType2] = useState("???");
    const [imageUrl, setImageUrl] = useState("/images/egg.png");

    useEffect(() => {
        fetch(`https://if.daena.me/api/v0/dex/` + {id}.id + `.json`)
            .then(res => res.json())
            .then((data) => {
                setName(data?.pokemon.name)
                setType1(data?.pokemon.type[0])
                setType2IfPresent(data?.pokemon.type)
                setImageUrl(data?.sprites[0].image_url)
            })

    }, [id]);

    const setType2IfPresent = (type: string[]) => {
        if (type.length < 2) {
            setType2(type[0]);
        } else {
            setType2(type[1]);
        }
    }

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
            return("#cb5f48");
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
            return "#f3f3f3";
        }
    }

    return (
        <div className="px-4 pb-8 pt-12">
            <div>
                <Pokeball color1={mapTypeToColor(type1)} color2={mapTypeToColor(type2)} imageUrl={imageUrl}/>
            </div>
            <div className="py-4">
                <SpeciesCard name={name} color={mapTypeToColor(type1)} type1={type1} type2={type2}/>
            </div>
        </div>
    )
}

export default Pokemon;
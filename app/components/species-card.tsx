import React from "react";
import Image from "next/image";

const SpeciesCard = ({ name, color, type1, type2} : {name: string, color: string, type1: string, type2: string}) => {
    const type1ImageSrc = "/images/types/"+type1+".png";
    const type2ImageSrc = "/images/types/"+type2+".png";
    return (
        <div className="w-48 h-24 rounded-3xl text-center" style={{backgroundColor: color}}>
            <h4 className="font-bold py-4">{name}</h4>
            <div className="flex items-center gap-2 justify-center">
                <Image
                    src={type1ImageSrc}
                    alt={type1}
                    width="229"
                    height="86"
                    className="w-20"
                />
                { type1 !== type2 && (
                    <Image
                        src={type2ImageSrc}
                        alt={type2}
                        width="229"
                        height="86"
                        className="w-20"
                    />
                )}
            </div>
        </div>
    )
}

export default SpeciesCard;
import React from "react";
import Image from "next/image";

const Pokeball = ({ color1, color2, imageUrl} : {color1: string, color2: string | undefined, imageUrl: string}) => {

    return (
        <section>
            <div className="relative">
                <div className="h-48 w-48 rounded-full" style={{backgroundColor: color2}}></div>

                <div className="absolute top-0">
                    <div className="h-[6.5rem] overflow-hidden">
                        <div className="h-48 w-52 bg-white rounded-full top-0"></div>
                    </div>
                </div>

                <div className="absolute top-0">
                    <div className="h-[5.25rem] overflow-hidden">
                        <div className="h-48 w-48 rounded-full top-0" style={{backgroundColor: color1}}></div>
                    </div>
                </div>

                <div className="w-20 h-20 bg-white rounded-full absolute transform translate-y-[-8.75rem] translate-x-[3.3rem]"></div>

                <div className="w-12 h-12 rounded-full absolute transform -translate-y-[7.75rem] translate-x-[4.3rem]"
                     style={{backgroundColor: color1}}>
                    <div className="absolute w-48 h-48 transform -translate-y-[3rem] -translate-x-[4rem]">
                        <img
                            src={imageUrl}
                            alt={"Your Pokemon Here"}
                            height="288"
                            width="288"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pokeball;
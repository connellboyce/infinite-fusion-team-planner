import React from "react";
import Pokemon from "@/app/components/pokemon";

const Team = () => {
    return (
        <div className="bg-white rounded-xl border-gray-400 border-[0.02rem] mx-auto grid grid-cols-2 md:grid-cols-6 justify-items-center gap-y-0 w-[70%] mt-8">
            <h1 className="absolute font-bold text-blue-600 text-2xl z-100">Your Team</h1>
            <Pokemon id="324.6" />
            <Pokemon id="363.263" />
            <Pokemon id="439.34" />
            <Pokemon id="12.372" />
            <Pokemon id="448.333" />
            <Pokemon id="25.1" />
        </div>
    )
}

export default Team;
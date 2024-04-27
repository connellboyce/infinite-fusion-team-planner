import React from "react";
import Pokemon from "@/app/components/pokemon";

const SelectionMenu = () => {
    return (
        <div className="bg-white rounded-xl border-gray-400 border-[0.02rem] mx-auto justify-items-center gap-y-0 w-[90%] md:w-[70%] mt-8">
            <h1 className="font-bold text-blue-600 text-2xl z-100 text-center">Your Options</h1>
            <div className="mx-auto grid grid-cols-2 md:grid-cols-6 justify-items-center gap-y-0 w-[70%] mt-8">
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
            </div>
        </div>
    )
}

export default SelectionMenu;
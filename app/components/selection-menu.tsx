import React from "react";
import Pokemon from "@/app/components/pokemon";
import Image from "next/image";

const SelectionMenu = () => {
    return (
        <div className="bg-white rounded-xl border-gray-400 border-[0.02rem] mx-auto justify-items-center gap-y-0 w-[90%] md:w-[70%] mt-8">
            <h1 className="font-bold text-blue-600 text-2xl z-100 text-center">Your Options</h1>
            <div className="mx-auto grid justify-items-center gap-y-0 w-[70%] mt-8 gap-[18rem]">
                <div className="py-4 border border-slate-400 rounded-lg w-64 mb-8">
                    <div className="flex items-center justify-center w-full">
                        <Image
                            src="/images/head.png"
                            alt="head"
                            height="577"
                            width="777"
                            className="h-24 w-32"
                        />
                        <select>
                            <option key="" selected={true} disabled={true}></option>
                            <option key="1">Bulbasaur</option>
                            <option key="2">Ivysaur</option>
                            <option key="25">Pikachu</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <Image
                            src="/images/body.png"
                            alt="head"
                            height="577"
                            width="777"
                            className="h-24 w-32"
                        />
                        <select>
                            <option key="" selected={true} disabled={true}></option>
                            <option key="1">Bulbasaur</option>
                            <option key="2">Ivysaur</option>
                            <option key="25">Pikachu</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center w-full pb-2 py-4">
                        <button className="bg-blue-500 text-white font-semibold rounded-md px-4">Add to Team</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectionMenu;
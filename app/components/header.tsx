import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-4">
                <Image
                    src="/images/logos/infinite-fusion.png"
                    alt="Pokemon Infinite Fusion"
                    height="450"
                    width="600"
                    className="h-16 w-[5.25rem] lg:h-24 lg:w-[7.5rem]"
                />
                <h2 className="text-2xl font-bold text-purple-500 lg:text-3xl">Team Planner</h2>
            </div>
            <div className="mt-3 flex justify-center lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:justify-end lg:p-4">
                <a href="https://www.buymeacoffee.com/connellboyce" className="block w-40 lg:w-52">
                    <img className="w-full" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=connellboyce&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" alt="Buy me a Coffee"/>
                </a>
            </div>
        </div>
    )
}

export default Header;
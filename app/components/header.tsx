import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-4">
                <Image
                    src="/images/logos/infinite-fusion.png"
                    alt="Pokemon Infinite Fusion"
                    height="450"
                    width="600"
                    className="h-24 w-[7.5rem]"
                />
                <h2 className="text-3xl font-bold text-purple-500">Team Planner</h2>
            </div>
            <div className="absolute top-0 right-0 p-4">
                <a href="https://www.buymeacoffee.com/connellboyce"><img className="w-52" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=connellboyce&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" alt="Buy me a Coffee"/></a>
            </div>
        </div>
    )
}

export default Header;
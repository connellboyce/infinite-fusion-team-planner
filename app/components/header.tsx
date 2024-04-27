import React from "react";
import Image from "next/image";

const Header = () => {
    return (
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
    )
}

export default Header;
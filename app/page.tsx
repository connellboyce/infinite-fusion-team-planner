import Image from "next/image";
import Pokemon from "@/app/components/pokemon";
import Header from "@/app/components/header";
import Team from "@/app/components/team";
import SelectionMenu from "@/app/components/selection-menu";
import Link from "next/link";
import TeamPlanner from "@/app/components/team-planner";

export default function Home() {
  return (
    <main className="">
        <Header />
        <div className="text-center text-sm py-4">
            <p>This is an app to plan your Pokemon Infinite Fusion teams with. Use the prompts</p>
            <p>to add a Pokemon to your team. Click on it again to remove it.</p>
        </div>
        <TeamPlanner />

        <p className="text-xs pt-8 text-center">Created by <Link href="https://connellboyce.com/" className="text-white font-bold bg-black rounded-xl px-1">connell<span className="text-[#f9004d]">boyce.</span></Link></p>
        <p className="text-xs text-center">This application is based on <Link href="https://richi3f.github.io/pokemon-team-planner" className="underline">Pokémon Team Planner by richi3f</Link></p>
        <p className="text-xs text-center">Pokémon is © of Nintendo, 1995-2024</p>
    </main>
  );
}

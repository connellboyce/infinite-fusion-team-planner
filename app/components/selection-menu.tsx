import React from "react";
import Image from "next/image";
import Select from "react-select";
import { POKEMON_OPTIONS } from "@/app/data/pokemon";

interface SelectionMenuProps {
  addPokemon?: (id: string) => void;
}

const SelectionMenu = ({ addPokemon = () => {} }: SelectionMenuProps) => {
  const [head, setHead] = React.useState("");
  const [body, setBody] = React.useState("");
  const options = POKEMON_OPTIONS;

  function addPokemonToTeam() {
    if (!head || !body) {
      return;
    }

    addPokemon(`${head}.${body}`);
  }

  function setHeadValue(selectedOption: { value?: string } | null) {
    setHead(selectedOption?.value ?? "");
  }

  function setBodyValue(selectedOption: { value?: string } | null) {
    setBody(selectedOption?.value ?? "");
  }

  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      width: "10rem",
      minWidth: "10rem",
    }),
  };

  return (
    <div className="bg-white rounded-xl border-gray-400 border-[0.02rem] mx-auto justify-items-center gap-y-0 w-[90%] md:w-[70%] mt-8">
      <h1 className="font-bold text-blue-600 text-2xl text-center">Your Options</h1>
      <div className="mx-auto grid justify-items-center gap-y-0 w-[70%] mt-8 gap-[18rem]">
        <div className="border border-slate-400 rounded-lg mb-8">
          <div className="py-2 w-72">
            <div className="flex items-center justify-center w-full">
              <Image
                src="/images/head.png"
                alt="head"
                height="577"
                width="777"
                className="h-24 w-32"
              />
              <Select
                placeholder="Select Fusion Head"
                options={options}
                onChange={setHeadValue}
                className="resize-none pr-4"
                styles={customStyles}
              />
            </div>

            <div className="flex items-center justify-center w-full">
              <Image
                src="/images/body.png"
                alt="body"
                height="577"
                width="777"
                className="h-24 w-32"
              />
              <Select
                placeholder="Select Fusion Body"
                options={options}
                onChange={setBodyValue}
                className="resize-none pr-4"
                styles={customStyles}
              />
            </div>

            <div className="flex items-center justify-center w-full pb-2 py-4">
              <button
                className="bg-blue-500 text-white font-semibold rounded-md px-4"
                onClick={addPokemonToTeam}
              >
                Add to Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionMenu;

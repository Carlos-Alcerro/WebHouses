import { useState } from "react";
import { GrFormDown, GrLocation, GrFormUp } from "react-icons/gr";

export function SearchLocation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-8 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrLocation />

      <div className="">
        <p>Localizacion</p>
        <p className="text-xs ">Selecciona tu localizacion</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
          <p>Madrid</p>
          <p>Barcelona</p>
          <p>Zaragoza</p>
          <p>Sevilla</p>
        </div>
      )}
    </div>
  );
}

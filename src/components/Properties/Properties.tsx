"use client";

import Link from "next/link";
import { Transition } from "../Transition/Transition";
import { dataProperties } from "./Properties.data";
import {
  LiaStarSolid,
  LiaBedSolid,
  LiaBathSolid,
  LiaRulerCombinedSolid,
} from "react-icons/lia";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { useState, useEffect } from "react";

export function Properties() {
  const [counterHouses, setCounterHouses] = useState(8);
  const dataFilteredHouses = dataProperties.slice(0, counterHouses);

  return (
    <Transition className="px-4 my-8 md:py-32 md:px-40">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {dataFilteredHouses.map(
          ({
            id,
            location,
            price,
            bedrooms,
            bathroom,
            image,
            star,
            meters,
          }) => (
            <Link
              key={id}
              href={`/properties/${id}`}
              className="shadow-light hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative -z-[1] ">
                <div className="relative">
                  <div className="absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary">
                    <LiaStarSolid />
                    <span className="ml-1 font-semibold ">{star}</span>
                  </div>
                  <Image
                    src={`/assets/properties/${image}`}
                    alt="Location"
                    width={150}
                    height={150}
                    className="object-cover w-full max-h-full h-[200px] rounded-t-2xl"
                  />
                  <div className="px-3 py-5 ">
                    <p className="text-secondary ">{location}</p>
                    <p className="font-semibold">{formatPrice(price)}</p>
                    <div className="gap-4 mt-2 xl:flex">
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                        <LiaBedSolid />
                        <span className="ml-2">{bedrooms}</span>
                      </div>
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                        <LiaBathSolid />
                        <span className="ml-2">{bathroom}</span>
                      </div>
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                        <LiaRulerCombinedSolid />
                        <span className="ml-2">{meters}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
      {counterHouses < dataProperties.length && (
        <div className="text-center my-7">
          <button
            onClick={() => setCounterHouses(counterHouses + 4)}
            className="px-6 py-5 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black"
          >
            Ver mas viviendas
          </button>
        </div>
      )}
    </Transition>
  );
}

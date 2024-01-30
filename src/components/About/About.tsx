import Image from "../../../node_modules/next/image";
import { Transition } from "../Transition/Transition";

export function About() {
  return (
    <Transition className="grid px-4 py-8 md:py-44 md:px-36 md:grid-cols-2 gap-4">
      <div
        className="flex flex-col items-center justify-center max-w-xl mb-7"
        id="about"
      >
        <h4 className="text-secondary">Sobre Nosotros</h4>
        <h2 className="my-4 text-3xl font-semibold">
          Mas de 1,000 viviendas para vender y comprar en Honduras
        </h2>
        <p className="mb-10 mt-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit libero
          autem nostrum, nihil, nemo nam enim omnis aut repudiandae, eaque
          necessitatibus pariatur voluptatibus! Illo quibusdam recusandae, earum
          ducimus excepturi omnis!
        </p>
        <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">
          Cargar mas
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/house.jpeg"
          alt="about"
          width={350}
          height={450}
          className="w-auto h-auto"
          priority
        />
      </div>
    </Transition>
  );
}

import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";

export function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-5 ">
      <h1 className="text-5xl font-semibold mb-6 ">Error 404</h1>
      <h2 className="text-3xl mb-5 ">
        !UPS! No se ha encontrado la vivienda que buscas
      </h2>
      <Image
        src="/assets/404-not-found.jpg"
        alt="not found"
        width={600}
        height={450}
        className="rounded-lg shadow-light"
      />
      <div className="text-center mt-5 ">
        <Link href="/" className="px-3 py-2 bg-secondary text-white rounded-lg">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

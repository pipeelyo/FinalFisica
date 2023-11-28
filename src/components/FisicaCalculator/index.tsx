// "use client";
import { calcularAceleracion, calcularDistanciaMRUA, calcularEnergiaCineticaMRU, calcularPotenciaMRU, calcularPotenciaMRUA, calcularPotenciaYTrabajo, calcularTrabajoMRU, calcularTrabajoMRUA, calcularTrabajoYEnergiaCinetica, calcularVelocidadFinal, calcularVelocidadPromedio, primeraLeyDeNewton, segundaLeyDeNewton, terceraLeyDeNewton, trabajoMRUA } from "@/src/physicalFormulas";
import Image from "next/image";

const FisicaCalculator = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-extrabold pt-6 pb-6">Movimiento rectilineo Uniforme (MRU)</h1>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Velocidad promedio (v):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/Vpromedio.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularVelocidadPromedio(20,10)}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Trabajo (W):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/Trabajo.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularTrabajoMRU()}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Potencia (P):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/Potencia.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularPotenciaMRU()}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Energia Cinetica (E_k):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/Vpromedio.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularEnergiaCineticaMRU(3,10)}
              disabled
            />
          </div>
        </div>
        <h1 className="text-2xl font-extrabold pt-6 pb-6">Movimiento rectilineo Uniformemente acelerado (MRUA):</h1>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            aceleracion (a):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/Aceleracion.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularAceleracion(10,0,200)}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Velocidad Final (v_f):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/VelocidadFinal.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularVelocidadFinal(10, 20, 4)}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Distancia (d) en funcion del tiempo:
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/DistanciaEnFuncionDelTiempo.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularDistanciaMRUA(5, 2, 3)}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Trabajo (W) en MRUA
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/TrabajoEnMRUA.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularTrabajoMRUA(10, 15, Math.PI / 4)}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Potencia (P) en MRUA
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/PotenciaEnMRUA.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularPotenciaMRUA(calcularTrabajoMRUA(10, 15, Math.PI / 4), 5)}
              disabled
            />
          </div>
        </div>
        <h1 className="text-2xl font-extrabold pt-6 pb-6">Leyes de Newton:</h1>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Primera Ley de Newton (Ley de la inercia):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/PrimeraLeydeNewton.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={primeraLeyDeNewton()}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Segunda Ley de Newton:
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/SegundaLeydeNewton.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={segundaLeyDeNewton(5, 3)}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Tercera Ley de Newton:
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/TerceraLeyNewton.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={terceraLeyDeNewton()}
              disabled
            />
          </div>
        </div>
        <h1 className="text-2xl font-extrabold pt-6 pb-6">Relaciones entre trabajo, energia y potencia</h1>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Trabajo (W) y Energía Cinética (E_k):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/TrabajoyEnergiaCinetica.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularTrabajoYEnergiaCinetica(10, 5, 2, 0, 4)}
              disabled
            />
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-semibold text-center p-3">
            Potencia (P) y Trabajo (W):
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/PotenciayTrabajo.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={calcularPotenciaYTrabajo(30, 5)}
              disabled
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FisicaCalculator;

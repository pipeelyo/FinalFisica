"use client";
import {
  calcularAceleracion,
  calcularDistanciaMRUA,
  calcularEnergiaCineticaMRU,
  calcularPotenciaMRU,
  calcularPotenciaMRUA,
  calcularPotenciaYTrabajo,
  calcularTrabajoMRU,
  calcularTrabajoMRUA,
  calcularTrabajoYEnergiaCinetica,
  calcularVelocidadFinal,
  calcularVelocidadPromedio,
  primeraLeyDeNewton,
  segundaLeyDeNewton,
  terceraLeyDeNewton,
  trabajoMRUA,
} from "@/src/physicalFormulas";
import Image from "next/image";
import { useState } from "react";

const FisicaCalculator = () => {
  const [distancia, setDistancia] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [masa, setMasa] = useState(0);
  const [velocidad, setVelocidad] = useState(0);
  const [velocidadFinal, setVelocidadFinal] = useState(0);
  const [velocidadInicial, setVelocidadInicial] = useState(0);
  const [aceleracion, setAceleracion] = useState(0);
  const [fuerza, setFuerza] = useState(0);
  const [angulo, setAngulo] = useState(0);
  const [trabajo, setTrabajo] = useState(0);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-extrabold pt-6 pb-6">
          Movimiento rectilineo Uniforme (MRU)
        </h1>
        <div className="p-6">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Distancia:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={distancia}
              onChange={(e) => setDistancia(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Tiempo:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={tiempo}
              onChange={(e) => setTiempo(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Masa:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={masa}
              onChange={(e) => setMasa(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Velocidad:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={velocidad}
              onChange={(e) => setVelocidad(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Velocidad Final:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={velocidadFinal}
              onChange={(e) => setVelocidadFinal(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Velocidad Inicial:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={velocidadInicial}
              onChange={(e) => setVelocidadInicial(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Aceleración:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={aceleracion}
              onChange={(e) => setAceleracion(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Fuerza:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={fuerza}
              onChange={(e) => setFuerza(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Ángulo:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={angulo}
              onChange={(e) => setAngulo(Number(e.target.value))}
            />
          </div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Trabajo:</label>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={trabajo}
              onChange={(e) => setTrabajo(Number(e.target.value))}
            />
          </div>{" "}
        </div>
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
              value={calcularVelocidadPromedio(distancia, tiempo)}
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
              value={calcularEnergiaCineticaMRU(masa, velocidad)}
              disabled
            />
          </div>
        </div>
        <h1 className="text-2xl font-extrabold pt-6 pb-6">
          Movimiento rectilineo Uniformemente acelerado (MRUA):
        </h1>
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
              value={calcularAceleracion(velocidadFinal, velocidadInicial, tiempo)}
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
              value={calcularVelocidadFinal(velocidadInicial, aceleracion, tiempo)}
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
              value={calcularDistanciaMRUA(velocidadInicial, aceleracion, tiempo)}
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
              value={calcularTrabajoMRUA(fuerza, distancia, Math.PI / angulo)}
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
              value={calcularPotenciaMRUA(
                calcularTrabajoMRUA(fuerza, distancia, Math.PI / angulo),
                tiempo
              )}
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
              value={segundaLeyDeNewton(masa, aceleracion)}
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
        <h1 className="text-2xl font-extrabold pt-6 pb-6">
          Relaciones entre trabajo, energia y potencia
        </h1>
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
              value={calcularTrabajoYEnergiaCinetica(fuerza, distancia, masa, velocidadInicial, velocidadFinal)}
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
              value={calcularPotenciaYTrabajo(trabajo, tiempo)}
              disabled
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FisicaCalculator;

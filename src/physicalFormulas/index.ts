// Movimiento Rectilíneo Uniforme (MRU)
export function calcularVelocidadPromedio(distancia: number, tiempo: number): number {
  return distancia / tiempo;
}

// Trabajo (W) en MRU (ya que no hay cambio de energía cinética, el trabajo es cero)
export const calcularTrabajoMRU = (): number => 0;

// Potencia (P) en MRU (como el trabajo es cero, la potencia también es cero)
export const calcularPotenciaMRU = (): number => 0;

// Energía Cinética (E_k) en MRU (como la velocidad es export constante, la energía cinética se mantiene export constante)
export const calcularEnergiaCineticaMRU = (masa: number, velocidad: number): number =>
  0.5 * masa * velocidad ** 2;

// Movimiento Rectilíneo Uniformemente Acelerado (MRUA)
export function calcularAceleracion(
  velocidadFinal: number,
  velocidadInicial: number,
  tiempo: number
): number {
  return (velocidadFinal - velocidadInicial) / tiempo;
}

export function calcularVelocidadFinal(
  velocidadInicial: number,
  aceleracion: number,
  tiempo: number
): number {
  return velocidadInicial + aceleracion * tiempo;
}

export function calcularDistanciaMRUA(
  velocidadInicial: number,
  tiempo: number,
  aceleracion: number
): number {
  return velocidadInicial * tiempo + 0.5 * aceleracion * tiempo ** 2;
}

export function calcularTrabajoMRUA(
  fuerza: number,
  distancia: number,
  angulo: number
): number {
  return fuerza * distancia * Math.cos(angulo);
}

export function calcularPotenciaMRUA(trabajo: number, tiempo: number): number {
  return trabajo / tiempo;
}

// Leyes de Newton
// Primera Ley de Newton (Ley de la inercia): Un objeto permanece en reposo o en movimiento rectilíneo uniforme a menos que una fuerza externa actúe sobre él.
export function primeraLeyDeNewton(): string {
  return "Un objeto permanece en reposo o en movimiento rectilíneo uniforme a menos que una fuerza externa actúe sobre él.";
}

// Segunda Ley de Newton: Fuerza (F) es igual a la masa (m) multiplicada por la aceleración (a). F = ma
export function segundaLeyDeNewton(masa: number, aceleracion: number): number {
  return masa * aceleracion;
}

// Tercera Ley de Newton: Por cada acción hay una reacción igual y opuesta.
export function terceraLeyDeNewton(): string {
  return "Por cada acción hay una reacción igual y opuesta.";
}

// Relaciones entre trabajo, energía y potencia
// Trabajo (W) y Energía Cinética (E_k): El trabajo realizado sobre un objeto es igual a la variación de su energía cinética.
export function calcularTrabajoYEnergiaCinetica(
  fuerza: number,
  distancia: number,
  masa: number,
  velocidadInicial: number,
  velocidadFinal: number
): number {
    const trabajo = fuerza * distancia * Math.cos(Math.PI); // Ángulo de 180 grados para indicar trabajo en dirección opuesta a la velocidad.
    const energiaCineticaInicial = 0.5 * masa * velocidadInicial ** 2;
    const energiaCineticaFinal = 0.5 * masa * velocidadFinal ** 2;
  return trabajo + (energiaCineticaFinal - energiaCineticaInicial);
}

// Potencia (P) y Trabajo (W): La potencia es igual al trabajo realizado dividido por el tiempo.
export function calcularPotenciaYTrabajo(trabajo: number, tiempo: number): number {
  return trabajo / tiempo;
}

// Ejemplo de uso
export const fuerzaSegundaLey = segundaLeyDeNewton(5, 3); // Ejemplo de cálculo de fuerza con la Segunda Ley de Newton
export const terceraLey = terceraLeyDeNewton(); // Ejemplo de aplicación de la Tercera Ley de Newton
export const trabajoEnergiaCinetica = calcularTrabajoYEnergiaCinetica(10, 5, 2, 0, 4); // Ejemplo de cálculo de trabajo y energía cinética
export const potenciaTrabajo = calcularPotenciaYTrabajo(30, 5); // Ejemplo de cálculo de potencia y trabajo

export const distanciaMRUA = calcularDistanciaMRUA(5, 2, 3); // Ejemplo de cálculo de distancia en MRUA
export const trabajoMRUA = calcularTrabajoMRUA(10, 15, Math.PI / 4); // Ejemplo de cálculo de trabajo en MRUA
export const potenciaMRUA = calcularPotenciaMRUA(trabajoMRUA, 5); // Ejemplo de cálculo de potencia en MRUA

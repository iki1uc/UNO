// challenges.js - Challenges - beste Wette
// Alles von mir nur ein bsp - du musst beste Wette und nächste Slide als Code zur Nutzung Ausnutzung aber ausüben
// CO2 Sauerstoff Wasser als Lösung - keine Elben bauen aber emulieren

export const CHALLENGES = [
  { id: 1, name: "CO2 zu viel", problem: "CO2", co2: 100, o2: 20, h2o: 30 },
  { id: 2, name: "Sauerstoff zu wenig", problem: "O2 Mangel", co2: 80, o2: 10, h2o: 20 },
  { id: 3, name: "Wasser zu wenig", problem: "H2O Mangel", co2: 60, o2: 30, h2o: 10 },
  { id: 4, name: "Elben fehlen", problem: "keine Elben", co2: 100, o2: 0, h2o: 0, elben: false },
  { id: 5, name: "Meer mehr aber richtig", problem: "mehr Meer", co2: 50, o2: 50, h2o: 50 }
];

// Beste Wette = beste Wette für CO2 Sauerstoff Wasser Lösung
export function besteWette() {
  // Beste Wette = Challenge mit meisten CO2 aber emulierbar
  // Wir können keine Elben bauen aber emulieren = CO2 -> O2 + H2O
  const challenge = CHALLENGES.reduce((best, curr) => curr.co2 > best.co2 ? curr : best, CHALLENGES[0]);
  
  return {
    challenge,
    wette: "CO2 Sauerstoff Wasser als Lösung emulieren",
    begründung: "CO2 zu viel, wir können keine Elben bauen aber emulieren wie Elben - Elben machen aus CO2 Sauerstoff Wasser",
    lösung: "emulieren",
    elben: false,
    emulation: true,
    // CO2 -> O2 + H2O = wie Elben, wie Bäume, wie Photosynthese
    formel: "CO2 + H2O + Licht -> O2 + Zucker (emuliert)",
    // Beste Wette = Challenge 1 oder 4
    nextSlide: "use.js"
  };
}

export function getChallenge(id) {
  return CHALLENGES.find(c => c.id === id);
}

// Nächste Slide = use.js
export function nächsteSlide() {
  return {
    current: "challenges.js",
    next: "use.js",
    besteWette: besteWette(),
    action: "zur Nutzung Ausnutzung aber ausüben"
  };
}

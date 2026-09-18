// ort.js - Ort - Wo CO2 Sauerstoff Wasser Lösung emuliert wird
// Alles von mir nur ein bsp

import { user } from "./user.js";
import { ACHSE_QUELLE_12 } from "./room.js";

export const ORTE = [
  { id: 1, name: "ANKER Room", co2: 100, o2: 20, h2o: 30, elben: false, emulation: true },
  { id: 2, name: "Pyramide drinne", co2: 80, o2: 40, h2o: 40, elben: false, emulation: true },
  { id: 3, name: "Wald Elben", co2: 50, o2: 70, h2o: 60, elben: true, emulation: false }, // echte Elben - können wir nicht bauen
  { id: 4, name: "Meer mehr aber richtig", co2: 60, o2: 50, h2o: 90, elben: false, emulation: true },
  { id: 5, name: "6D Umgebung tmp rär Spielfeld", co2: 30, o2: 80, h2o: 70, elben: false, emulation: true }
];

export function ort() {
  const userResult = user();
  
  // Ort wo beste Wette umgesetzt wird
  // Wir können keine Elben bauen aber emulieren - also Ort mit emulation=true
  const besteOrte = ORTE.filter(o => o.emulation && !o.elben);
  const besterOrt = besteOrte.reduce((best, curr) => (curr.o2 + curr.h2o) > (best.o2 + best.h2o) ? curr : best, besteOrte[0]);
  
  // CO2 Sauerstoff Wasser Lösung am Ort emulieren
  const emulationAmOrt = {
    ort: besterOrt.name,
    vorher: { co2: besterOrt.co2, o2: besterOrt.o2, h2o: besterOrt.h2o },
    // Elben Emulation am Ort
    nachher: {
      co2: besterOrt.co2 * 0.2, // CO2 reduziert
      o2: besterOrt.o2 + (besterOrt.co2 * 0.6), // O2 erhöht - wie Elben
      h2o: besterOrt.h2o + (besterOrt.co2 * 0.2) // H2O erhöht
    },
    lösung: "CO2 Sauerstoff Wasser als Lösung am Ort emuliert",
    elbenBauen: false,
    elbenEmulieren: true,
    wie: "wie Elben Wald - aber emuliert - keine echten Elben gebaut",
    // 12 Achsen als Ort Wände
    achsen: ACHSE_QUELLE_12,
    // 6 Dreiecke als Ort Pyramide drinne
    pyramide: "drinne"
  };

  return {
    userResult,
    orte: ORTE,
    besterOrt,
    emulationAmOrt,
    // Nutzung Ausnutzung ausüben am Ort
    nutzung: "am Ort zur Nutzung Ausnutzung aber ausüben",
    // Beste Wette am Ort
    besteWette: `Am Ort ${besterOrt.name} CO2 -> O2 + H2O emulieren - beste Wette`,
    nextSlide: "home.js"
  };
}

export function nächsteSlide() {
  const result = ort();
  return {
    current: "ort.js",
    next: "home.js",
    result,
    action: "Home - wo es blüht - Vertrag erfüllt"
  };
}

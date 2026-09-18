// use.js - Use - Nutzung Ausnutzung aber ausüben
// Beste Wette und nächste Slide als Code zur Nutzung
// CO2 Sauerstoff Wasser als Lösung - emulieren

import { besteWette } from "./challenges.js";

export const USE_CASES = {
  co2_sauerstoff_wasser: {
    name: "CO2 Sauerstoff Wasser Lösung emulieren",
    input: { co2: 100, h2o: 50, licht: 100 },
    // Elben können nicht bauen aber emulieren
    elbenEmulation: {
      // Elben = Photosynthese = CO2 + Wasser -> Sauerstoff
      photosynthese: (co2, h2o, licht) => {
        const o2 = (co2 * 0.7) + (licht * 0.3); // emuliert
        const zucker = co2 * 0.3;
        const wasserRest = h2o * 0.8;
        return { o2, zucker, wasserRest, co2Rest: co2 * 0.1 };
      },
      // Wir können keine Elben bauen aber emulieren
      bauen: false,
      emulieren: true,
      lösung: "CO2 Sauerstoff Wasser als Lösung sehen"
    }
  }
};

export function use() {
  const wette = besteWette();
  const useCase = USE_CASES.co2_sauerstoff_wasser;
  
  // Nutzung Ausnutzung aber ausüben = Code ausüben
  const result = useCase.elbenEmulation.photosynthese(
    wette.challenge.co2,
    50, // H2O
    100 // Licht
  );

  return {
    wette,
    useCase,
    input: useCase.input,
    output: result,
    nutzung: "zur Nutzung",
    ausnutzung: "Ausnutzung aber ausüben - es soll CO2 Sauerstoff Wasser als Lösung sehen",
    code: "use() ausüben",
    // Beste Wette umgesetzt
    besteWetteUmgesetzt: true,
    // CO2 -> O2 + H2O
    lösung: `CO2 ${wette.challenge.co2} -> O2 ${result.o2.toFixed(1)} + H2O ${result.wasserRest.toFixed(1)} + Zucker ${result.zucker.toFixed(1)} - emuliert wie Elben`,
    nextSlide: "user.js"
  };
}

export function nächsteSlide() {
  const result = use();
  return {
    current: "use.js",
    next: "user.js",
    result,
    action: "nächste Slide - user.js - User nutzt Elben Emulation"
  };
}

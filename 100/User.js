// user.js - User - User nutzt
// Alles von mir nur ein bsp - beste Wette nächste Slide

import { use } from "./use.js";

export const USER = {
  name: "User - wir wollen alle dasselbe",
  kannElbenBauen: false,
  kannEmulieren: true,
  // Wir können keine Elben bauen aber emulieren
  elben: {
    bauen: false,
    emulieren: true,
    wie: "wie Bäume, wie Photosynthese, wie Wald, wie Elben"
  }
};

export function user() {
  const useResult = use();
  
  // User nutzt CO2 Sauerstoff Wasser Lösung emuliert
  const userAction = {
    user: USER.name,
    kannElbenBauen: USER.kannElbenBauen,
    kannEmulieren: USER.kannEmulieren,
    // User sieht CO2 Sauerstoff Wasser als Lösung
    sieht: "CO2 Sauerstoff Wasser als Lösung sehen",
    // User nutzt Emulation
    nutzt: useResult.output,
    // Beste Wette vom User
    besteWette: "Elben emulieren statt bauen - CO2 -> O2 + H2O",
    // Nutzung Ausnutzung ausüben
    ausüben: true,
    // User Erfahrung
    erfahrung: "Wir können keine Elben bauen aber wir können emulieren - das ist mehr Meer aber richtig"
  };

  return {
    useResult,
    userAction,
    // Nächste Slide = ort.js - Ort wo es passiert
    nextSlide: "ort.js",
    // User ist in Room JS - Pyramide drinne
    room: "room.js - Pyramide drinne - User drinne nutzt Elben Emulation"
  };
}

export function nächsteSlide() {
  const result = user();
  return {
    current: "user.js",
    next: "ort.js",
    result,
    action: "Ort - wo CO2 Sauerstoff Wasser Lösung emuliert wird"
  };
}

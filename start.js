// ── Reloop nach 81 ─────────────────────────────
schritt() {
  this.tick++;
  this.fluss = (this.fluss + 1 / 60) % 1;
  if (this.fluss < 1 / 60) {
    this.links = this.rechts;
    this.rechts = Math.min(this.rechts + 1, this.anker.length - 1);

    // Reloop: wenn rechter Anker = 81 → zurück zu 3
    if (this.anker[this.rechts] === 81) {
      this.links = 0;   // zurück auf 3
      this.rechts = 1;  // nächster = 9
      log("♻ Neugeburt: Zyklus zurück auf 3");
    }
  }
  this.ueberleben = this.leben * (1 - this.anteil * this.einsatz);
  this.erfolg = this.wert() - this.einsatz;
  return this.zustand();
}

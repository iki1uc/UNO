// leben.trigger — Nachbar hören
window.addEventListener("message", (e) => {
  const d = e.data || {};
  if(d.type !== "leben.trigger") return;
  // Wer bin ich?
  const isHub = document.title.includes("RESPO") || !!document.getElementById("matrixGrid");
  const isUno = document.title.includes("ANKER") || document.body.innerText.includes("ANKER");

  if(isHub && d.to === "hub"){
    console.log("[hub] Trigger empfangen:", d);
    // z.B. bei earg → Matrix-Modus wechseln
    if(d.payload && d.payload.earg){
      const c = document.querySelectorAll('.cell81.active');
      if(c.length < 81){ const rnd = Math.floor(Math.random()*81); document.querySelector(`.cell81[data-idx="${rnd}"]`)?.click(); }
    }
    // Antwort zurück
    window.parent.postMessage({ type:"leben.hubEvent", payload:{ hubBeat: Date.now() } }, "*");
  }

  if(isUno && d.to === "uno"){
    console.log("[uno] Trigger empfangen:", d);
    // z.B. bei blüht → endSync triggern
    if(d.payload && d.payload.blüht){
      // sucht Button mit "End Sync" und klickt
      const btn = [...document.querySelectorAll('button')].find(b => b.textContent.includes("End Sync"));
      if(btn) btn.click();
    }
    window.parent.postMessage({ type:"leben.unoEvent", payload:{ unoBeat: Date.now() } }, "*");
  }
});

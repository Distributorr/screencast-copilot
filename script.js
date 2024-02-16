// Zugriff auf die Sensoren des Handys
const deviceOrientation = window.DeviceOrientationEvent;

// Funktion zur Aktualisierung der Kompassanzeige
function updateCompass(event) {
  // Berechnen der Kompassrichtung
  const compassHeading = event.webkitCompassHeading || event.alpha;
  
  // Drehen der Zeiger entsprechend der Kompassrichtung
  const zeigerElement = document.getElementById("zeiger");
  zeigerElement.style.transform = `rotate(${compassHeading}deg)`;
}

// Event-Listener für die Aktualisierung der Kompassanzeige
window.addEventListener("deviceorientation", updateCompass);

// Starten der Aktualisierung der Kompassanzeige
updateCompass();

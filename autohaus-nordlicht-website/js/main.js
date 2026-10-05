/* Autohaus Nordlicht – kleine Helfer */

// >>> HIER ANPASSEN: E-Mail-Adressen für Terminanfragen und Bewerbungen
const TERMIN_EMAIL = "info@ihre-domain.de";
const BEWERBUNG_EMAIL = "bewerbung@ihre-domain.de";

// Mobiles Menü
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("hauptnavigation");
if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

// Terminformular: öffnet das E-Mail-Programm mit vorausgefüllter Anfrage
const form = document.getElementById("termin");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const kz = form.kennzeichen.value.trim() || "–";
    const leistung = form.leistung.value;
    const datum = form.datum.value
      ? new Date(form.datum.value).toLocaleDateString("de-DE")
      : "flexibel";
    const subject = `Terminanfrage: ${leistung}`;
    const body =
      `Guten Tag,\n\nich möchte gern einen Termin anfragen.\n\n` +
      `Leistung: ${leistung}\nKennzeichen: ${kz}\nWunschtermin: ${datum}\n\n` +
      `Name:\nTelefon:\n\nViele Grüße`;
    window.location.href =
      `mailto:${TERMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// Bewerbungs-Links
document.querySelectorAll(".js-mail").forEach((link) => {
  const subject = link.dataset.subject || "Bewerbung";
  link.href = `mailto:${BEWERBUNG_EMAIL}?subject=${encodeURIComponent(subject)}`;
});

// Aktuelles Jahr in der Fußzeile
const jahr = document.getElementById("jahr");
if (jahr) jahr.textContent = new Date().getFullYear();

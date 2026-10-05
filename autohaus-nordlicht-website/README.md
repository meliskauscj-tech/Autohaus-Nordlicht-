# Autohaus Nordlicht – Website

Statische Website (HTML, CSS, JavaScript) – läuft ohne Server-Software, z. B. kostenlos über **GitHub Pages**.

## Online stellen mit GitHub Pages

1. Auf github.com ein neues Repository anlegen (z. B. `autohaus-nordlicht`), Sichtbarkeit **Public**.
2. **Add file → Upload files** und den kompletten Inhalt dieses Ordners hineinziehen (nicht den Ordner selbst, sondern alles darin – `index.html` muss ganz oben liegen). Mit **Commit changes** bestätigen.
3. **Settings → Pages** öffnen. Unter *Build and deployment* bei *Source* „Deploy from a branch“ wählen, Branch `main` und Ordner `/ (root)`, dann **Save**.
4. Nach ein bis zwei Minuten ist die Seite unter `https://<benutzername>.github.io/autohaus-nordlicht/` erreichbar.
5. Optional: Unter *Settings → Pages → Custom domain* eine eigene Domain eintragen.

## Vor dem Veröffentlichen anpassen

- **Platzhalter in eckigen Klammern** ersetzen (in `index.html`, `impressum.html`, `datenschutz.html`): Preis, Aktionszeitraum, Adresse, Telefon, Öffnungszeiten, Stellentexte.
- **E-Mail-Adressen** für Terminanfragen und Bewerbungen oben in `js/main.js` eintragen.
- **Impressum und Datenschutz** sind Vorlagen – vor dem Livegang vollständig ausfüllen und rechtlich prüfen lassen.
- **„Route planen“** im Kontaktbereich: Link in `index.html` auf die echte Adresse setzen.

## Aufbau

```
index.html          Startseite
impressum.html      Impressum (Vorlage)
datenschutz.html    Datenschutzerklärung (Vorlage)
css/style.css       Gestaltung (Farben ganz oben unter :root)
js/main.js          Mobiles Menü, Terminformular, Bewerbungs-Links
assets/             Logo, Favicon
fonts/              Schriften lokal eingebunden (keine Google-Server, DSGVO-freundlich)
```

Das Terminformular öffnet das E-Mail-Programm der Besucher mit einer vorausgefüllten Anfrage – dafür ist kein Server nötig.

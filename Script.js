const unwissendTexts = [
    "Verunsicherung: Der Mensch beginnt an sich selbst zu zweifeln und verliert den Fokus.",
    "Empathie und Schuldgefühle: Versuch, den Narzissten zu verstehen oder zu retten, oft auf eigene Kosten.",
    "Kompromissbereitschaft: Konflikte werden vermieden, indem man nachgibt, auch wenn es gegen die eigenen Interessen geht.",
    "Unbewusste Anpassung: Verhalten wird angepasst, um Harmonie zu wahren, ohne die Manipulation zu erkennen.",
    "Erhöhte Leistungsbereitschaft: Man versucht, die Erwartungen des Narzissten zu erfüllen, um Kritik zu vermeiden.",
    "Wutanfälle: Heftige emotionale Reaktionen, die die Situation eskalieren lassen, sobald die Manipulation bewusst wird.",
    "Konfuse Gegenwehr: Unklare, impulsive Verteidigungsversuche, die den Narzissten weiter anheizen.",
    "Überreaktionen: Kleine Provokationen lösen übertriebene emotionale Reaktionen aus.",
    "Passiv-aggressives Verhalten: Indirekte Angriffe oder Verweigerung, ohne klar Stellung zu beziehen.",
    "Isolation: Rückzug von sozialen Kontakten, um weiteren Konflikten auszuweichen."
];

const wissendTexts = [
    "Innere Ruhe bewahren: Emotional nicht reagieren, auch in herausfordernden Momenten.",
    "Nicht rechtfertigen: Keine Erklärungen abgeben, die dem Narzissten Angriffsfläche bieten könnten.",
    "Klare Grenzen setzen: Sachlich sagen, was man akzeptiert und was nicht, ohne Aggression.",
    "Grauer Fels: Emotionslos und uninteressant bleiben, um keine Energie für Angriffe zu liefern.",
    "Angriffe ignorieren: Beleidigungen oder Provokationen nicht beachten, sondern sachlich bleiben.",
    "Distanzieren: Gespräche kurz halten oder beenden, wenn nötig auch räumliche Distanz schaffen.",
    "Faktenorientiert bleiben: Nur auf überprüfbare Fakten hinweisen, um manipulative Verzerrungen zu entlarven.",
    "Keine Erwartungen setzen: Narzissten ändern sich selten durch Konfrontation; Fokus auf die eigene Reaktion.",
    "Selbstfürsorge: Zeit nehmen, um sich selbst emotional und mental zu stärken.",
    "Professionelle Hilfe: Unterstützung suchen, um besser mit den Herausforderungen umgehen zu können."
];

function showUnwissend(index) {
    document.getElementById('unwissend-text').innerText = unwissendTexts[index - 1];
}

function showWissend(index) {
    document.getElementById('wissend-text').innerText = wissendTexts[index - 1];
}

// Toutes les informations pratiques du restaurant.
// Modifier ce fichier suffit pour mettre à jour le site (horaires, tarifs, coordonnées).

export const restaurant = {
  name: "Yukimi",
  nameJp: "ゆきみ",
  tagline: "Restaurant japonais à volonté",
  city: "Montpellier",
  address: {
    street: "Rue de Galata",
    postalCode: "34000",
    city: "Montpellier",
    full: "Rue de Galata, 34000 Montpellier",
  },
  phone: "04 58 28 27 62",
  phoneHref: "+33458282762",
  social: {
    facebook: "https://www.facebook.com/yukimiFR",
    deliveroo: "https://deliveroo.fr",
  },
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Yukimi+Restaurant+Japonais+Rue+de+Galata+34000+Montpellier",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Yukimi+Restaurant+Japonais+Rue+de+Galata+34000+Montpellier&output=embed",
};

// Bandeau de fermeture temporaire. Mettre "active: false" pour le masquer,
// ou changer les dates directement ici.
export const closureNotice = {
  active: true,
  message:
    "Fermeture estivale du 13 juillet au 23 août 2026 inclus. Réouverture le lundi 24 août à 19h00.",
};

export type DaySchedule = {
  day: string;
  slots: string[];
};

export const openingHours: DaySchedule[] = [
  { day: "Lundi", slots: ["19h00 – 22h00"] },
  { day: "Mardi", slots: ["19h00 – 22h00"] },
  { day: "Mercredi", slots: ["12h00 – 14h00", "19h00 – 22h00"] },
  { day: "Jeudi", slots: ["12h00 – 14h00", "19h00 – 22h00"] },
  { day: "Vendredi", slots: ["12h00 – 14h00", "19h00 – 22h00"] },
  { day: "Samedi", slots: ["12h00 – 14h00", "19h00 – 22h00"] },
  { day: "Dimanche", slots: ["12h00 – 14h00", "19h00 – 22h00"] },
];

export const pricing = {
  notes: [
    "Boisson et dessert ne sont pas compris dans la formule.",
    "Vous commandez des plats autant que vous le désirez selon votre appétit. Le gaspillage n'a pas sa place.",
    "En cas d'abus, un supplément est facturé (2€ par pièce non consommée).",
    "Interdiction d'emporter toute nourriture non consommée.",
  ],
  weekendDefinition:
    "Week-end midi : samedi et dimanche midi · Week-end soir : vendredi, samedi et dimanche soir",
  adult: {
    midiSemaine: "17,50 €",
    midiWeekend: "19,50 €",
    soirSemaine: "25,50 €",
    soirWeekend: "27,50 €",
  },
  enfant: {
    label: "Enfant (moins d'1m40)",
    midiSemaine: "8,50 €",
    midiWeekend: "10,50 €",
    soirSemaine: "11,50 €",
    soirWeekend: "13,50 €",
  },
};

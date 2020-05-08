export const cards = {
  'nigiri-egg': {
    "title": "Egg Nigiri",
    "family": "nigiri",
    "type": "nigiri",
    "points": 1,
    "count": 4,
    "color": "yellow"
  },
  'nigiri-salmon': {
    "title": "Salmon Nigiri",
    "family": "nigiri",
    "type": "nigiri",
    "points": 2,
    "count": 5,
    "color": "yellow"
  },
  'nigiri-squid': {
    "title": "Squid Nigiri",
    "family": "nigiri",
    "type": "nigiri",
    "points": 3,
    "count": 3,
    "color": "yellow"
  },
  'maki-1': {
    "title": "Maki 1",
    "family": "maki",
    "type": "rolls",
    "value": 1,
    "count": 4,
    "color": "red"
  },
  'maki-2': {
    "title": "Maki 2",
    "family": "maki",
    "type": "rolls",
    "value": 2,
    "count": 4,
    "color": "red"
  },
  'maki-3': {
    "title": "Maki 3",
    "family": "maki",
    "type": "rolls",
    "value": 3,
    "count": 3,
    "color": "red"
  },
  'tempura': {
    "title": "Tempura",
    "family": "tempura",
    "type": "appetizer",
    "count": 8,
    "color": "purple"
  },
  'shashimi': {
    "title": "Shashimi",
    "family": "shashimi",
    "type": "appetizer",
    "count": 8,
    "color": "green"
  },
  'miso-soup': {
    "title": "Miso Soup",
    "family": "miso-soup",
    "type": "appetizer",
    "count": 8,
    "color": "turquoise"
  },
  'wasabi': {
    "title": "Wasabi",
    "family": "wasabi",
    "type": "special",
    "count": 3,
    "color": "yellow"
  },
  'tea': {
    "title": "Tea",
    "family": "tea",
    "type": "special",
    "count": 3,
    "color": "burgundy"
  },
  'grean-tea-ice-cream': {
    "title": "Green Tea Ice Cream",
    "family": "grean-tea-ice-cream",
    "type": "dessert",
    "count": 15,
    "color": "light-blue"
  },
}

export function deck() {
  
  let deck = [];

  Object.keys(cards).map(key => {
    let i = 0;
    while (i < cards[key].count) {
      if (cards[key].type === 'dessert') {
        i++;
        continue;
      }
      deck.push(key)
      i++;
    }

  })

  return deck;
}
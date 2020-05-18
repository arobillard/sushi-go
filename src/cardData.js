export const cards = {
  'egg': {
    "title": "Egg",
    "family": "nigiri",
    "type": "nigiri",
    "value": 1,
    "count": 4,
    "color": "yellow",
    "scoreDesc": "Nigiri 1",
    "wasabi": false
  },
  'salmon': {
    "title": "Salmon",
    "family": "nigiri",
    "type": "nigiri",
    "value": 2,
    "count": 5,
    "color": "yellow",
    "scoreDesc": "Nigiri 2",
    "wasabi": false
  },
  'squid': {
    "title": "Squid",
    "family": "nigiri",
    "type": "nigiri",
    "value": 3,
    "count": 3,
    "color": "yellow",
    "scoreDesc": "Nigiri 3",
    "wasabi": true
  },
  'maki-1': {
    "title": "Maki",
    "family": "maki",
    "type": "rolls",
    "value": 1,
    "count": 4,
    "color": "red",
    "scoreDescL": 'Most: 6/4/2',
    "scoreDescS": 'Most: 6/3'
  },
  'maki-2': {
    "title": "Maki",
    "family": "maki",
    "type": "rolls",
    "value": 2,
    "count": 4,
    "color": "red",
    "scoreDescL": 'Most: 6/4/2',
    "scoreDescS": 'Most: 6/3'
  },
  'maki-3': {
    "title": "Maki",
    "family": "maki",
    "type": "rolls",
    "value": 3,
    "count": 3,
    "color": "red",
    "scoreDescL": 'Most: 6/4/2',
    "scoreDescS": 'Most: 6/3'
  },
  'tempura': {
    "title": "Tempura",
    "family": "tempura",
    "type": "appetizer",
    "count": 8,
    "color": "purple",
    "scoreDesc": "x2 = 5"
  },
  'sashimi': {
    "title": "Sashimi",
    "family": "sashimi",
    "type": "appetizer",
    "count": 8,
    "color": "green",
    "scoreDesc": "x3 = 10"
  },
  'miso-soup': {
    "title": "Miso Soup",
    "family": "miso-soup",
    "type": "appetizer",
    "count": 8,
    "color": "turquoise",
    "scoreDesc": "Discard If another is played this turn",
    "cancelled": true
  },
  'wasabi': {
    "title": "Wasabi",
    "family": "wasabi",
    "type": "special",
    "count": 3,
    "color": "yellow",
    "scoreDesc": "Next nigiri x3"
  },
  'tea': {
    "title": "Tea",
    "family": "tea",
    "type": "special",
    "count": 3,
    "color": "burgundy",
    "scoreDesc": "x1 per most colour"
  },
  'ice-cream': {
    "title": "Ice Cream",
    "family": "ice-cream",
    "type": "dessert",
    "count": 15,
    "color": "light-blue",
    "scoreDesc": "x4 = 12"
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
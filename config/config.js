// ========================================
// PIZZA LEGACY CONFIGURATION
// ========================================
// Update this file to change countdown timer, event info, and winners

// COUNTDOWN TIMER - Update this for each new tournament
const CONFIG = {
  nextTournament: {
    date: '2026-04-18',  // Format: YYYY-MM-DD
    time: '11:30',       // Format: HH:MM (24-hour)
  },

  // EVENT INFORMATION
  eventInfo: {
    title: 'Malmö Pizza Legacy',
    intro: 'En gång per kvartal går Sveriges trevligaste MTG Legacy turnering av stapeln på Pizzeria Rex i Malmö.',
    
    // Details for the info section
    when: 'Lördag 18 april 2026, kl 11:30',
    where: 'Pizzeria Rex, Malmö', // Update with actual pizzeria name
    price: '350 kr om du anmäler dig innan 11 april, annars 400 kr. Det ingår en Pizza i avgiften sen går resten av pengarna tillbaka i priser.',
    support: 'Top 8 får specialdesignade tokens/kort. Alla deltagare får ett participation promo! Top 4 får plocka kort från Pizza Pärmen.',
    registration: 'Man anmäler sig genom att Swisha till Peppe: 0736789724 och skriva ett mail (peter.floderus@gmail.com) eller sms.',
  },

  // SOCIAL LINKS
  social: {
    email: 'info@pizzalegacy.com',
    twitter: 'https://x.com/MtgPizzaLegacy',  // Update with your actual Twitter URL
    discord: 'https://discord.gg/awSC3a8f3S',     // Update with your actual Discord invite
  },

  // PREVIOUS WINNERS
  // Format: { date: 'YYYY-MM-DD', winner: 'Player Name', decklistUrl: 'https://...' }
  // Image files should be named: YYYY-MM-DD-winner.png, YYYY-MM-DD-top8.png, YYYY-MM-DD-participation.png
  winners: [
    {
      date: '2025-10-18',
      winner: 'Alex',
      decklistUrl: '#', // Add decklist link when available
    },
    {
      date: '2025-07-12',
      winner: 'Peppe',
      decklistUrl: '#',
    },
    {
      date: '2025-04-05',
      winner: 'Johan',
      decklistUrl: 'https://moxfield.com/decks/PsRfV3XdlkqmUy25eUSr3w',
    },
    {
      date: '2025-01-11',
      winner: 'Peppe',
      decklistUrl: '#', // Update with actual link
    },
    {
      date: '2024-09-28',
      winner: 'Gottfrid',
      decklistUrl: 'https://moxfield.com/decks/UNrcdhfc_US5V-vSDIVQoA',
    },
    {
      date: '2024-06-08',
      winner: 'Anders',
      decklistUrl: '#',
    },
    {
      date: '2024-03-02',
      winner: 'Alex',
      decklistUrl: '#',
    },
    {
      date: '2023-12-09',
      winner: 'Hampus',
      decklistUrl: 'https://moxfield.com/decks/pB7Cfq9RekqLHBDoKZ2vAw',
    },
    {
      date: '2023-09-09',
      winner: 'Viktor',
      decklistUrl: 'https://moxfield.com/decks/CU0uRwkBd0uQWudKpQ3d0Q',
    },
    {
      date: '2023-05-27',
      winner: 'Kristian',
      decklistUrl: 'https://moxfield.com/decks/jDFkuJ2L90G7OtCptcNh4w',
    },
    {
      date: '2023-03-18',
      winner: 'Kristian',
      decklistUrl: '#',
    },
    {
      date: '2023-01-07',
      winner: 'Gustav',
      decklistUrl: '#',
    },
    {
      date: '2022-09-24',
      winner: 'Chris',
      decklistUrl: 'https://moxfield.com/decks/7MbEfBF5ik6EDV8uR0Rqfg',
    },
  ],
};

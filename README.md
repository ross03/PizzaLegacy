# Malmö Pizza Legacy Website

Welcome to your Pizza Legacy website! This README will help you update and maintain the site.

## 📁 Project Structure

```
pizzalegacy/
├── index.html              # Main website file (you rarely need to edit this)
├── config/
│   └── config.js          # ⭐ EDIT THIS to update timer, event info, and winners
├── css/
│   └── style.css          # Website styling
├── js/
│   └── main.js            # Website functionality
├── images/
│   ├── logo.png           # Your Pizza Legacy logo
│   └── winners/           # ⭐ PUT NEW TOKEN IMAGES HERE
│       ├── 2025-01-11-winner.png
│       ├── 2025-01-11-top8.png
│       ├── 2025-01-11-participation.png
│       └── ... (more event images)
└── README.md              # This file
```

## 🔧 How to Update the Website

### 1️⃣ Update Countdown Timer (Before Each Tournament)

**File to edit:** `config/config.js`

Find this section:
```javascript
nextTournament: {
  date: '2025-04-18',  // Format: YYYY-MM-DD
  time: '11:30',       // Format: HH:MM (24-hour)
},
```

Change the date and time to your next tournament.

**Example:** For a tournament on June 15, 2025 at 2:30 PM:
```javascript
nextTournament: {
  date: '2025-06-15',
  time: '14:30',
},
```

### 2️⃣ Update Event Information

**File to edit:** `config/config.js`

Find the `eventInfo` section:
```javascript
eventInfo: {
  when: 'Fredag 18 april 2025, kl 11:30',
  where: 'Pizzeria Name, Malmö',
  price: '100 kr',
  support: 'Top 8 får specialdesignade tokens/kort...',
  registration: 'Anmäl dig via Discord eller...',
},
```

Update any of these fields as needed.

### 3️⃣ Add New Winners (After Each Tournament)

**Step 1:** Add winner images to `images/winners/` folder

Name your files exactly like this:
- `YYYY-MM-DD-winner.png` (Winner token)
- `YYYY-MM-DD-top8.png` (Top 8 promo)
- `YYYY-MM-DD-participation.png` (Participation promo)

**Example:** For a tournament on April 18, 2025:
- `2025-04-18-winner.png`
- `2025-04-18-top8.png`
- `2025-04-18-participation.png`

**Step 2:** Update `config/config.js`

Find the `winners` array and add a new entry at the top:
```javascript
winners: [
  {
    date: '2025-04-18',
    winner: 'Player Name',
    decklistUrl: 'https://www.moxfield.com/decks/...',
  },
  // ... existing winners below
]
```

### 4️⃣ Update Social Links

**File to edit:** `config/config.js`

Find the `social` section:
```javascript
social: {
  email: 'info@pizzalegacy.com',
  twitter: 'https://twitter.com/pizzalegacy',
  discord: 'https://discord.gg/yourserver',
},
```

Update with your actual URLs.

## 🚀 Deploying to GitHub Pages

### First Time Setup:

1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Select your `pizzalegacy` folder
4. Click "Publish repository" to GitHub
5. Go to your repository on GitHub.com
6. Click "Settings" → "Pages"
7. Under "Source", select "main" branch
8. Click "Save"
9. Your site will be live at `https://yourusername.github.io/pizzalegacy/`

### To Update the Website:

1. Make your changes in VSCode (update `config/config.js` or add images)
2. Save all files
3. Open GitHub Desktop
4. You'll see your changes listed
5. Write a summary (e.g., "Updated countdown for next tournament")
6. Click "Commit to main"
7. Click "Push origin"
8. Your website will update automatically in a few minutes!

## 📝 Common Tasks Checklist

### Before Each Tournament:
- [ ] Update countdown timer date/time in `config/config.js`
- [ ] Update event info (date, time, location) in `config/config.js`
- [ ] Commit and push changes to GitHub

### After Each Tournament:
- [ ] Take photos/scans of all three tokens (winner, top 8, participation)
- [ ] Save images with correct naming: `YYYY-MM-DD-winner.png`, etc.
- [ ] Add images to `images/winners/` folder
- [ ] Add winner entry to `config/config.js` (name and decklist URL)
- [ ] Update countdown timer for next tournament
- [ ] Commit and push changes to GitHub

## 🎨 Customizing Colors

If you want to change the red and yellow colors:

**File to edit:** `css/style.css`

Find the top section:
```css
:root {
  --primary-red: #fc0e0e;
  --primary-yellow: #ffff00;
  --dark-bg: #1a1a1a;
  --text-dark: #000000;
}
```

Change the color codes to whatever you want!

## ❓ Troubleshooting

**Q: The countdown timer isn't showing correctly**
- Check that your date format is `YYYY-MM-DD` and time is `HH:MM` (24-hour format)
- Make sure there are no typos in `config/config.js`

**Q: Token images aren't showing**
- Check that filenames match exactly: `YYYY-MM-DD-winner.png` (case-sensitive)
- Make sure images are in the `images/winners/` folder
- Check that the date in the filename matches the date in `config.js`

**Q: Website changes aren't showing**
- Did you commit and push in GitHub Desktop?
- Wait 2-3 minutes for GitHub Pages to update
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Q: Social links don't work**
- Update the URLs in `config/config.js` with your actual Twitter/Discord links

## 📧 Need Help?

If you run into issues, remember:
1. Check that file names are exactly correct (including `.js`, `.png` extensions)
2. Look for typos in `config/config.js`
3. Make sure you committed and pushed changes in GitHub Desktop

Good luck with your tournaments! 🍕🎮

# 🚀 Quick Start Guide

Welcome! Here's how to get your Pizza Legacy website up and running.

## Step 1: Initial Setup

1. **Open this folder in VSCode**
   - File → Open Folder → Select `pizzalegacy` folder

2. **Update your social links**
   - Open `config/config.js`
   - Find the `social` section
   - Replace the Twitter and Discord URLs with your actual links

3. **Update pizzeria name**
   - In `config/config.js`, find `where: 'Pizzeria Name, Malmö'`
   - Replace "Pizzeria Name" with the actual pizzeria name

## Step 2: Add Your Winner Images

1. **Organize your token images**
   - Rename them to match the format: `YYYY-MM-DD-winner.png`
   - For example: `2025-01-11-winner.png`, `2025-01-11-top8.png`, `2025-01-11-participation.png`

2. **Copy them to the correct folder**
   - Put all images in `images/winners/` folder

3. **Update winner names and decklists**
   - Open `config/config.js`
   - Find the `winners` array
   - Update each winner's name and decklist URL

## Step 3: Publish to GitHub

1. **Open GitHub Desktop**

2. **Add this repository**
   - Click "Add" → "Add Existing Repository"
   - Browse to your `pizzalegacy` folder
   - Click "Add Repository"

3. **Publish to GitHub**
   - Click "Publish repository"
   - Uncheck "Keep this code private" (unless you want it private)
   - Click "Publish Repository"

4. **Enable GitHub Pages**
   - Go to GitHub.com and find your repository
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 2-3 minutes
   - Your site will be live!

## Step 4: Test Your Website

1. **Open locally first**
   - Open `index.html` in your web browser
   - Check that everything looks good
   - Test the countdown timer
   - Check that images load

2. **Check on GitHub Pages**
   - Go to your GitHub Pages URL
   - Make sure everything works online too

## 🎉 You're Done!

Now whenever you need to update:
1. Edit files in VSCode
2. Save
3. Commit in GitHub Desktop
4. Push to GitHub
5. Website updates automatically!

## Need More Help?

Check the main README.md file for detailed instructions on:
- Updating the countdown timer
- Adding new winners
- Customizing colors
- Troubleshooting

Good luck! 🍕

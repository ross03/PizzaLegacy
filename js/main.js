ag// Main JavaScript for Pizza Legacy website

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Initialize countdown timer
  initCountdown();
  
  // Load event info
  loadEventInfo();
  
  // Load winners gallery
  loadWinners();
});

// Countdown Timer
function initCountdown() {
  const countdownElement = document.getElementById('countdown');
  const messageElement = document.getElementById('countdown-message');
  
  const targetDateTime = new Date(`${CONFIG.nextTournament.date}T${CONFIG.nextTournament.time}:00`);
  
  function updateCountdown() {
    const now = new Date();
    const difference = targetDateTime - now;
    
    if (difference <= 0) {
      // Tournament time has passed
      countdownElement.style.display = 'none';
      messageElement.style.display = 'block';
      messageElement.textContent = 'Snart kommer information om nästa Pizza Legacy';
      return;
    }
    
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
  
  // Update immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Load event information from config
function loadEventInfo() {
  document.getElementById('event-when').textContent = CONFIG.eventInfo.when;
  document.getElementById('event-where').textContent = CONFIG.eventInfo.where;
  document.getElementById('event-price').textContent = CONFIG.eventInfo.price;
  document.getElementById('event-support').textContent = CONFIG.eventInfo.support;
  document.getElementById('event-registration').textContent = CONFIG.eventInfo.registration;
  
  // Update intro text
  document.getElementById('intro-text').textContent = CONFIG.eventInfo.intro;
}

// Load winners gallery
function loadWinners() {
  const winnersGrid = document.getElementById('winners-grid');
  
  CONFIG.winners.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'winner-event';
    
    // Format date nicely
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString('sv-SE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    eventCard.innerHTML = `
      <h3 class="event-date">${formattedDate}</h3>
      <div class="winner-name">Vinnare: ${event.winner}</div>
      <div class="token-grid">
        <div class="token-card">
          <img src="images/winners/${event.date}-winner.png" alt="Winner Token" onerror="this.parentElement.style.display='none'">
          <div class="token-label">Vinnare Token</div>
        </div>
        <div class="token-card">
          <img src="images/winners/${event.date}-top8.png" alt="Top 8 Promo" onerror="this.parentElement.style.display='none'">
          <div class="token-label">Top 8 Promo</div>
        </div>
        <div class="token-card">
          <img src="images/winners/${event.date}-participation.png" alt="Participation Promo" onerror="this.parentElement.style.display='none'">
          <div class="token-label">Deltagare Promo</div>
        </div>
      </div>
      ${event.decklistUrl !== '#' ? `<a href="${event.decklistUrl}" target="_blank" class="decklist-link">Se vinnande leklista →</a>` : ''}
    `;
    
    winnersGrid.appendChild(eventCard);
  });
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

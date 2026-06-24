(function () {
  if (localStorage.getItem("maisha-theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

/* ================================================================
   NAVBAR HTML - FIXED VERSION
   ================================================================ */
const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="index.html" class="nav-logo" aria-label="Maisha Laundry Home">
      <img src="images/logo1.png"
        alt="Maisha Laundry Logo"
        class="nav-logo-img">
      <span class="logo-text">
       <b>MAISHA</b> LAUNDRY
      </span>
    </a>

    <ul class="nav-links" role="list">
      <li><a href="index.html"    data-page="index.html">Home</a></li>
      <li><a href="about.html"    data-page="about.html">About Us</a></li>
      <li><a href="services.html" data-page="services.html">Services</a></li>
      <li><a href="contact.html"  data-page="contact.html">Contact</a></li>
    </ul>

    <div class="nav-actions">
      <button class="dark-toggle" aria-label="Toggle dark mode">🌙</button>
      <a href="contact.html#booking" class="btn btn-primary btn-sm">Book Pickup</a>
    </div>

    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<div class="mobile-nav" id="mobile-nav" role="navigation" aria-label="Mobile navigation">
  <a href="index.html"    data-page="index.html">🏠 Home</a>
  <a href="about.html"    data-page="about.html">ℹ️ About Us</a>
  <a href="services.html" data-page="services.html">🧼 Services</a>
  <a href="contact.html"  data-page="contact.html">📞 Contact</a>
  <div style="height:1px;background:var(--border);margin:12px 0;"></div>
  <a href="contact.html#booking" class="btn btn-primary" style="justify-content:center; width:100%;">📅 Book Pickup</a>
  <a href="https://wa.me/256780603561?text=Hello%20Maisha%20Laundry!%20I%27d%20like%20to%20book%20a%20pickup."
     target="_blank" rel="noopener" class="btn btn-whatsapp" style="justify-content:center; width:100%; margin-top:8px;">
    💬 WhatsApp Us
  </a>
</div>
`;

/* ================================================================
   FOOTER HTML
   ================================================================ */
const FOOTER_HTML = `
<footer class="footer" aria-label="Site footer">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="color:#fff;">
          <div class="nav-logo-icon">
            <img src="images/logo1.png" alt="Maisha Laundry Logo" class="nav-logo-img" style="height:40px; width:auto;">
          </div>
          <span><b>MAISHA</b> LAUNDRY</span>
        </a>
        <p>Kampala's most convenient laundry service. Free pickup &amp; delivery,
           same-day service — because your time matters.</p>
           
        <div class="footer-social">
          <a href="https://www.instagram.com/maisha_laundry/" target="_blank" rel="noopener" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@maisha_laundry2025" target="_blank" rel="noopener" title="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          <a href="https://wa.me/256780603561" target="_blank" rel="noopener" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="mailto:maishadrycleaners@gmail.com" title="Email"> <i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="contact.html#booking">Book a Pickup</a></li>
          <li><a href="index.html#faq">FAQ</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><a href="services.html#wash-fold">Wash &amp; Fold</a></li>
          <li><a href="services.html#ironing">Ironing / Steaming</a></li>
          <li><a href="services.html#dry-cleaning">Dry Cleaning</a></li>
          <li><a href="services.html#shoe-cleaning">Shoe Cleaning</a></li>
          <li><a href="services.html#basket-wash">Basket Wash</a></li>
          <li><a href="services.html#carpet">Carpet Cleaning</a></li>
          <li><a href="services.html#soft-toys">Soft Toy Cleaning</a></li>
          <li><a href="services.html#special">Suits &amp; Traditional</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-contact-item">
          <span class="icon">📞</span>
          <span>
            <a href="tel:+256780603561" style="color:#8aacd0;">0780 603561</a><br>
            <a href="tel:+256751571256" style="color:#8aacd0;">0751 571256</a>
          </span>
        </div>
        <div class="footer-contact-item">
          <span class="icon"> <i class="fa-brands fa-whatsapp"></i></span>
          <a href="https://wa.me/256780603561" target="_blank" rel="noopener" style="color:#8aacd0;">WhatsApp: 0780 603561</a>
        </div>
        <div class="footer-contact-item">
          <span class="icon"> <i class="fa-solid fa-envelope"></i></span>
          <a href="mailto:maishadrycleaners@gmail.com" style="color:#8aacd0;">maishadrycleaners@gmail.com</a>
        </div>
        <div class="footer-contact-item">
          <span class="icon"> <i class="fa-solid fa-map-marker-alt"></i></span>
          <span>Kyebando Central Ring Road,<br>towards PAED Medical, Kampala</span>
        </div>
        <div class="footer-contact-item">
          <span class="icon">🕒</span>
          <span>Daily: 8:00 AM – 8:00 PM<br>
            <small style="color:#5a7fa0;">Including Public Holidays</small>
          </span>
        </div>
      </div>

    </div><!-- /footer-grid -->

    <div class="footer-bottom">
      <p>© <span id="footer-year"></span> Maisha Laundry &amp; Dry Cleaners Ltd. All rights reserved. &nbsp;|&nbsp; Fresh. Clean. Delivered.</p>
      <div class="footer-bottom-social">
        <a href="https://www.instagram.com/maisha_laundry/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Instagram</a>
        <span style="color:#2a4a6a;">•</span>
        <a href="https://www.tiktok.com/@maisha_laundry2025" target="_blank" rel="noopener"><i class="fa-brands fa-tiktok"></i> TikTok</a>
        <span style="color:#2a4a6a;">•</span>
        <a href="https://wa.me/256780603561" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
        <span style="color:#2a4a6a;">•</span>
        <a href="mailto:maishadrycleaners@gmail.com">Email</a>
      </div>
    </div>
  </div>
</footer>
`;

/* ---- WhatsApp float ---- */
const WA_BTN = `
<a href="https://wa.me/256780603561?text=Hello%20Maisha%20Laundry!%20I%27d%20like%20to%20book%20a%20pickup.%20My%20name%20is%20"
   target="_blank" rel="noopener"
   class="whatsapp-float"
   aria-label="Chat with us on WhatsApp">
  <span class="wa-icon"><i class="fa-brands fa-whatsapp"></i></span>
  <span class="wa-text">WhatsApp Us</span>
</a>
`;

/* ---- Inject everything ---- */
function initLayout() {
  /* --- Navbar --- */
  const navWrap = document.createElement("div");
  navWrap.innerHTML = NAV_HTML.trim();
  // First child = <nav>, second = <div class="mobile-nav">
  document.body.insertBefore(navWrap.children[0], document.body.firstChild);
  document.body.insertBefore(navWrap.children[0], document.body.children[1]);

  /* --- Footer --- */
  const ftWrap = document.createElement("div");
  ftWrap.innerHTML = FOOTER_HTML.trim();
  document.body.appendChild(ftWrap.children[0]);

  /* --- WhatsApp float --- */
  const waWrap = document.createElement("div");
  waWrap.innerHTML = WA_BTN.trim();
  document.body.appendChild(waWrap.children[0]);

  /* Footer year */
  const yr = document.getElementById("footer-year");
  if (yr) yr.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", initLayout);
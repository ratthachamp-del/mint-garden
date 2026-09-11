import './style.css';
import { 
  COMPANY_INFO, 
  NAV_LINKS, 
  STATS, 
  WORK_STEPS, 
  SERVICES, 
  BEFORE_AFTER, 
  PORTFOLIO_PROJECTS, 
  REVIEWS, 
  FAQS 
} from './data.js';

// SVG Icons tailored specifically to the 6 services
const ICONS = {
  // รับจัดสวนครบวงจร
  trees: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-5m0 0a4 4 0 01-4-4c0-2 2-3 2-5 0-3 2-4 2-4s2 1 2 4c0 2 2 3 2 5a4 4 0 01-4 4zm-7 5v-3m0 0a3 3 0 01-3-3c0-1.5 1.5-2 1.5-3.5 0-2 1.5-2.5 1.5-2.5s1.5.5 1.5 2.5c0 1.5 1.5 2 1.5 3.5a3 3 0 01-3 3zm14 0v-3m0 0a3 3 0 01-3-3c0-1.5 1.5-2 1.5-3.5 0-2 1.5-2.5 1.5-2.5s1.5.5 1.5 2.5c0 1.5 1.5 2 1.5 3.5a3 3 0 01-3 3z"/>
  </svg>`,
  
  // รับจัดสวนอังกฤษ (English Garden / Rose / Classical arch)
  rose: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7c2 0 3.5 1.5 3.5 3.5 0 2.5-3.5 5-3.5 5s-3.5-2.5-3.5-5C8.5 8.5 10 7 12 7z"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15.5V21"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 18c1.5.5 3.5 0 4.5-.5"/>
  </svg>`,

  // รับปูหญ้าเทียม (Artificial Turf / Lustrous Blades)
  turf: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 21l3-12 3 12m2 0l3-14 3 14m2 0l3-10"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M2 21h20"/>
  </svg>`,

  // รับปูกระเบื้อง (Outdoor Tiles / Paving Grid)
  tiles: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="13" y="3" width="8" height="8" rx="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="3" y="13" width="8" height="8" rx="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="13" y="13" width="8" height="8" rx="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // รับปลูกต้นไม้ทุกชนิด (Tree Planting / Sprout / Rooted Sapling)
  sprout: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 22V10"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10a5 5 0 0 0 5-5c0 0-3 0-5 3"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14a5 5 0 0 1-5-5c0 0 3 0 5 3"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 22h16"/>
  </svg>`,

  // รับแก้ปัญหาโพรงดินทรุด (Under-Slab Void & Subsidence Repair / Structural Shield)
  'shield-fix': `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3s7 3 7 8c0 6-7 10-7 10S5 17 5 11c0-5 7-8 7-8z"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18"/>
  </svg>`,

  check: `<svg class="w-4 h-4 text-[#4CAF50] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  renderWorkSteps();
  renderServices();
  renderPortfolio();
  renderReviews();
  renderFAQs();
  initBeforeAfterSlider();
  initPortfolioFilters();
  initModals();
  initNavigation();
  initQuoteForm();
});

// ============================================================================
// 1. RENDER WORK STEPS (About Us - Fresh Light Luxury)
// ============================================================================
function renderWorkSteps() {
  const container = document.getElementById('work-steps-container');
  if (!container) return;

  container.innerHTML = WORK_STEPS.map((item) => `
    <div class="relative p-6 sm:p-7 rounded-3xl bg-white border border-[#81C784]/25 shadow-sm hover:shadow-lg hover:border-[#4CAF50] transition-all group">
      <div class="flex items-center justify-between mb-4">
        <span class="text-3xl font-bold font-serif text-[#81C784] group-hover:text-[#2E7D32] transition-colors">
          ${item.step}
        </span>
        <span class="w-8 h-8 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center text-xs font-bold border border-[#81C784]/30">
          ✓
        </span>
      </div>
      <h4 class="text-base font-bold text-[#1C2D22] mb-2 font-serif">${item.title}</h4>
      <p class="text-xs sm:text-sm text-[#4A5D52] leading-relaxed font-light">${item.desc}</p>
    </div>
  `).join('');
}

// ============================================================================
// 2. RENDER SERVICES (6 Services - Fresh Light Modern Luxury)
// ============================================================================
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map((service) => {
    const iconSvg = ICONS[service.icon] || ICONS.trees;
    return `
      <div class="service-card rounded-3xl p-8 flex flex-col justify-between group bg-white border border-[#81C784]/25">
        <div>
          <div class="flex items-center justify-between mb-6">
            <div class="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center border border-[#81C784]/30 group-hover:scale-110 transition-transform shadow-sm">
              ${iconSvg}
            </div>
            <span class="px-3.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold tracking-wide border border-[#81C784]/30">
              ${service.badge}
            </span>
          </div>
          <span class="text-xs font-luxury uppercase tracking-widest text-[#2E7D32] block mb-1.5 font-medium">
            ${service.titleEn}
          </span>
          <h3 class="text-xl font-bold font-serif text-[#1C2D22] mb-3">
            ${service.titleTh}
          </h3>
          <p class="text-xs sm:text-sm text-[#4A5D52] leading-relaxed font-light mb-6">
            ${service.shortDesc}
          </p>
          <div class="space-y-2.5 pt-4 border-t border-[#81C784]/15 mb-8">
            ${service.features.map(f => `
              <div class="flex items-start gap-2.5 text-xs text-[#1C2D22]">
                ${ICONS.check}
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <button 
          class="btn-select-service w-full py-3.5 rounded-2xl bg-[#E8F5E9] hover:bg-[#4CAF50] text-[#2E7D32] hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-[#81C784]/30 shadow-sm"
          data-service-id="${service.id}"
        >
          <span>ขอใบเสนอราคาบริการนี้</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    `;
  }).join('');

  // Attach click events to service quote buttons
  grid.querySelectorAll('.btn-select-service').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceId = e.currentTarget.getAttribute('data-service-id');
      preselectServiceAndScroll(serviceId);
    });
  });
}

function preselectServiceAndScroll(serviceId) {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Check matching checkbox
  const checkboxMap = {
    'service-landscape': 'landscape',
    'service-english': 'english',
    'service-turf': 'turf',
    'service-tiling': 'tiling',
    'service-planting': 'planting',
    'service-subsidence': 'subsidence'
  };

  const checkboxValue = checkboxMap[serviceId];
  if (checkboxValue) {
    const cb = document.querySelector(`input[name="services"][value="${checkboxValue}"]`);
    if (cb) {
      cb.checked = true;
      cb.parentElement.classList.add('ring-2', 'ring-emerald-700');
      setTimeout(() => {
        cb.parentElement.classList.remove('ring-2', 'ring-emerald-700');
      }, 2500);
    }
  }

  // Focus on name input
  setTimeout(() => {
    const nameInput = document.getElementById('form-name');
    if (nameInput) nameInput.focus();
  }, 600);
}

// ============================================================================
// 3. INTERACTIVE BEFORE & AFTER SLIDER
// ============================================================================
function initBeforeAfterSlider() {
  const container = document.getElementById('before-after-container');
  const clip = document.getElementById('before-image-clip');
  const handle = document.getElementById('slider-handle');

  if (!container || !clip || !handle) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = Math.min(Math.max((x / rect.width) * 100, 4), 96);

    clip.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    handle.style.left = `${percentage}%`;
  }

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events (Mobile)
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches && e.touches[0]) {
      updateSlider(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      updateSlider(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

// ============================================================================
// 4. PORTFOLIO & FILTERING
// ============================================================================
let currentFilter = 'all';

function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const filtered = currentFilter === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === currentFilter);

  grid.innerHTML = filtered.map(project => `
    <article class="portfolio-card bg-white rounded-3xl overflow-hidden border border-[#81C784]/25 shadow-sm cursor-pointer group" data-project-id="${project.id}">
      <div class="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          loading="lazy"
          class="w-full h-full object-cover"
        />
        <div class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#2E7D32] border border-[#81C784]/30 text-xs font-semibold shadow-sm">
          ${project.categoryName}
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#1C2D22]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span class="text-white text-xs font-semibold flex items-center gap-1.5 bg-[#2E7D32]/95 px-4 py-2 rounded-full backdrop-blur-sm shadow-md">
            <span>คลิกดูรายละเอียดโครงการ</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </span>
        </div>
      </div>
      <div class="p-6 sm:p-7">
        <span class="text-xs text-[#2E7D32] block mb-1 font-medium">${project.location}</span>
        <h4 class="text-lg font-bold font-serif text-[#1C2D22] mb-2 group-hover:text-[#2E7D32] transition-colors">
          ${project.title}
        </h4>
        <p class="text-xs sm:text-sm text-[#4A5D52] line-clamp-2 leading-relaxed font-light mb-4">
          ${project.description}
        </p>
        <div class="flex items-center justify-between pt-4 border-t border-[#81C784]/15 text-xs text-[#1C2D22] font-medium">
          <span class="flex items-center gap-1">
            <span class="text-[#758A7E]">ขนาด:</span> ${project.area}
          </span>
          <span class="flex items-center gap-1">
            <span class="text-[#758A7E]">ระยะเวลา:</span> ${project.duration}
          </span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click for Lightbox Modal
  grid.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      const project = PORTFOLIO_PROJECTS.find(p => p.id === pid);
      if (project) openProjectLightbox(project);
    });
  });
}

function initPortfolioFilters() {
  const buttons = document.querySelectorAll('.portfolio-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentFilter = e.currentTarget.getAttribute('data-category');
      renderPortfolio();
    });
  });
}

function openProjectLightbox(project) {
  const modal = document.getElementById('project-lightbox');
  if (!modal) return;

  document.getElementById('lightbox-img').src = project.image;
  document.getElementById('lightbox-img').alt = project.title;
  document.getElementById('lightbox-category').textContent = project.categoryName;
  document.getElementById('lightbox-location').textContent = project.location;
  document.getElementById('lightbox-title').textContent = project.title;
  document.getElementById('lightbox-desc').textContent = project.description;
  document.getElementById('lightbox-area').textContent = project.area;
  document.getElementById('lightbox-duration').textContent = project.duration;

  modal.classList.remove('hidden');
}

// ============================================================================
// 5. REVIEWS & FAQS (Light Luxury Styling)
// ============================================================================
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  grid.innerHTML = REVIEWS.map(rev => `
    <div class="review-card p-8 rounded-3xl bg-white border border-[#81C784]/25 shadow-sm flex flex-col justify-between hover:border-[#4CAF50] transition-all">
      <div>
        <div class="flex items-center gap-1 text-amber-400 mb-4">
          ${Array(rev.rating).fill(`
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          `).join('')}
        </div>
        <p class="text-sm sm:text-base text-[#1C2D22] leading-relaxed italic mb-6 font-light">
          "${rev.text}"
        </p>
      </div>
      <div class="flex items-center gap-4 pt-6 border-t border-[#81C784]/15">
        <img src="${rev.avatar}" alt="${rev.author}" class="w-12 h-12 rounded-full object-cover border border-[#81C784]/30" loading="lazy" />
        <div>
          <h4 class="text-sm font-bold text-[#1C2D22] font-serif">${rev.author}</h4>
          <p class="text-xs text-[#758A7E]">${rev.role} (${rev.location})</p>
          <span class="inline-block text-[11px] text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full font-medium mt-1 border border-[#81C784]/30">${rev.projectType}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQs() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = FAQS.map((faq) => `
    <div class="faq-item rounded-2xl bg-white border border-[#81C784]/25 overflow-hidden transition-all shadow-sm">
      <button class="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#1C2D22] text-sm hover:text-[#2E7D32] transition-colors">
        <span>${faq.q}</span>
        <svg class="faq-icon w-5 h-5 text-[#2E7D32] transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div class="faq-content hidden px-5 pb-5 text-xs sm:text-sm text-[#4A5D52] leading-relaxed border-t border-[#81C784]/15 pt-3">
        ${faq.a}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isHidden = content.classList.contains('hidden');

      // Close other items
      container.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      container.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

      if (isHidden) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    });
  });
}

// ============================================================================
// 6. MODALS MANAGEMENT
// ============================================================================
function initModals() {
  // Line QR Modal
  const lineModal = document.getElementById('line-modal');
  const btnShowQr = document.getElementById('btn-show-qr');
  const btnFloatingLine = document.getElementById('btn-floating-line');
  const btnCloseLine = document.getElementById('btn-close-line');

  const openLine = () => lineModal?.classList.remove('hidden');
  const closeLine = () => lineModal?.classList.add('hidden');

  btnShowQr?.addEventListener('click', openLine);
  btnFloatingLine?.addEventListener('click', openLine);
  btnCloseLine?.addEventListener('click', closeLine);

  // Privacy Policy Modal
  const privacyModal = document.getElementById('privacy-modal');
  const btnFooterPrivacy = document.getElementById('btn-footer-privacy');
  const btnOpenPrivacyInline = document.getElementById('btn-open-privacy-inline');
  const btnClosePrivacy = document.getElementById('btn-close-privacy');
  const btnConfirmPrivacy = document.getElementById('btn-confirm-privacy');

  const openPrivacy = () => privacyModal?.classList.remove('hidden');
  const closePrivacy = () => privacyModal?.classList.add('hidden');

  btnFooterPrivacy?.addEventListener('click', openPrivacy);
  btnOpenPrivacyInline?.addEventListener('click', openPrivacy);
  btnClosePrivacy?.addEventListener('click', closePrivacy);
  btnConfirmPrivacy?.addEventListener('click', closePrivacy);

  // Lightbox Modal
  const lightboxModal = document.getElementById('project-lightbox');
  const btnCloseLightbox = document.getElementById('btn-close-lightbox');
  const btnLightboxQuote = document.getElementById('btn-lightbox-quote');

  const closeLightbox = () => lightboxModal?.classList.add('hidden');
  btnCloseLightbox?.addEventListener('click', closeLightbox);
  btnLightboxQuote?.addEventListener('click', () => {
    closeLightbox();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Success Modal
  const successModal = document.getElementById('success-modal');
  const btnCloseSuccess = document.getElementById('btn-close-success');
  btnCloseSuccess?.addEventListener('click', () => successModal?.classList.add('hidden'));

  // Close modals on backdrop click
  [lineModal, privacyModal, lightboxModal, successModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });

  // Close modals on ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [lineModal, privacyModal, lightboxModal, successModal].forEach(m => m?.classList.add('hidden'));
    }
  });
}

// ============================================================================
// 7. NAVIGATION & HEADER BEHAVIOR
// ============================================================================
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky luxury header transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('header-luxury-scrolled');
      header?.classList.remove('header-luxury-top');
    } else {
      header?.classList.remove('header-luxury-scrolled');
      header?.classList.add('header-luxury-top');
    }
  });

  // Mobile menu toggle
  mobileMenuBtn?.addEventListener('click', () => {
    const isClosed = mobileMenu?.classList.contains('hidden');
    if (isClosed) {
      mobileMenu?.classList.remove('hidden');
      iconOpen?.classList.add('hidden');
      iconClose?.classList.remove('hidden');
    } else {
      mobileMenu?.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    }
  });

  // Close mobile drawer on link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    });
  });

  // Header and Hero Quote buttons
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    mobileMenu?.classList.add('hidden');
    iconOpen?.classList.remove('hidden');
    iconClose?.classList.add('hidden');
    setTimeout(() => {
      document.getElementById('form-name')?.focus();
    }, 600);
  };

  document.getElementById('btn-header-quote')?.addEventListener('click', scrollToContact);
  document.getElementById('btn-hero-quote')?.addEventListener('click', scrollToContact);
  document.getElementById('btn-mobile-quote')?.addEventListener('click', scrollToContact);
  document.getElementById('btn-services-consult')?.addEventListener('click', scrollToContact);

  // Active section scrollspy
  const sections = document.querySelectorAll('main > section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// ============================================================================
// 8. QUOTE FORM SUBMISSION & CALCULATOR
// ============================================================================
function initQuoteForm() {
  const form = document.getElementById('quote-form');
  const successModal = document.getElementById('success-modal');
  const refElement = document.getElementById('success-ref');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Generate reference ID
    const randomCode = Math.floor(100 + Math.random() * 900);
    const refId = `#MS-${new Date().getFullYear()}-${randomCode}`;
    if (refElement) refElement.textContent = refId;

    // Show success dialog
    if (successModal) successModal.classList.remove('hidden');

    // Reset form
    form.reset();
  });
}

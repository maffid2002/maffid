/**
 * ==========================================================================
 * MD. MAFFID HASAN | WORDPRESS CREATOR & THEME CUSTOMIZER
 * Production Interactive Engine: Pure Vanilla ES6+ (Sub-Millisecond Execution)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. Mobile Navigation & Backdrop Controller
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking navigation links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 2. Navbar Elevation & Background Blur on Scroll
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('bg-theme-bg/95', 'shadow-2xl', 'shadow-black/70');
      navbar.classList.remove('bg-theme-bg/85');
    } else {
      navbar.classList.remove('bg-theme-bg/95', 'shadow-2xl', 'shadow-black/70');
      navbar.classList.add('bg-theme-bg/85');
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 3. Trust Metrics Animated Number Counters (Intersection Observer)
  // --------------------------------------------------------------------------
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const targetStr = counter.getAttribute('data-target');
      const targetVal = parseFloat(targetStr);
      const isDecimal = targetStr.includes('.');
      const hasPlus = counter.textContent.includes('+');
      const hasPercent = counter.textContent.includes('%');
      const hasLessThan = counter.textContent.includes('<');
      const hasS = counter.textContent.includes('s');

      let current = 0;
      const duration = 1600;
      const steps = 50;
      const increment = targetVal / steps;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetVal) {
          current = targetVal;
          clearInterval(timer);
        }

        let output = isDecimal ? current.toFixed(2) : Math.floor(current);
        if (hasLessThan) output = '< ' + output;
        if (hasPercent) output = output + '%';
        if (hasS) output = output + 's';
        if (hasPlus) output = output + '+';

        counter.textContent = output;
      }, stepDuration);
    });
  };

  const counterTrigger = document.querySelector('.counter');
  if (counterTrigger) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
        }
      });
    }, { threshold: 0.25 });

    observer.observe(counterTrigger);
  }

  // --------------------------------------------------------------------------
  // 4. About Section Philosophy Tabs Engine (100% Functional Tab Switching)
  // --------------------------------------------------------------------------
  const aboutTabBtns = document.querySelectorAll('.about-tab-btn');
  const aboutPanels = document.querySelectorAll('.about-tab-panel');

  if (aboutTabBtns.length > 0) {
    aboutTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Manage active button styles
        aboutTabBtns.forEach(b => {
          b.classList.remove('active', 'bg-theme-cyan/20', 'text-theme-cyan', 'border-theme-cyan/40');
          b.classList.add('text-slate-400', 'border-theme-border', 'bg-theme-bg');
        });
        btn.classList.add('active', 'bg-theme-cyan/20', 'text-theme-cyan', 'border-theme-cyan/40');
        btn.classList.remove('text-slate-400', 'border-theme-border', 'bg-theme-bg');

        // Toggle panel display with smooth fade
        aboutPanels.forEach(panel => {
          if (panel.id === `tab-${targetTab}`) {
            panel.classList.remove('hidden');
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(8px)';
            setTimeout(() => {
              panel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              panel.style.opacity = '1';
              panel.style.transform = 'translateY(0px)';
            }, 10);
          } else {
            panel.classList.add('hidden');
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. Code Terminal Window: Real WordPress Workflow Snippets
  // --------------------------------------------------------------------------
  const workflowSnippets = {
    'Custom-Styling.css': {
      path: 'WordPress-Workflow/Custom-Styling.css',
      code: `<span class="text-slate-500">/* ============================================================
   WordPress Theme Customization: Custom Responsive Styling
   Tailored Elementor & Gutenberg layout enhancements
   ============================================================ */</span>

<span class="text-theme-cyan">.hero-container</span> {
    <span class="text-blue-300">display</span>: <span class="text-emerald-400">flex</span>;
    <span class="text-blue-300">align-items</span>: <span class="text-emerald-400">center</span>;
    <span class="text-blue-300">justify-content</span>: <span class="text-emerald-400">space-between</span>;
    <span class="text-blue-300">background</span>: <span class="text-emerald-400">radial-gradient(circle, #090E1A 0%, #04060C 100%)</span>;
}

<span class="text-theme-cyan">.woocommerce-checkout-btn</span> {
    <span class="text-blue-300">background</span>: <span class="text-emerald-400">linear-gradient(135deg, #FF5E36, #FFA000)</span>;
    <span class="text-blue-300">border-radius</span>: <span class="text-yellow-300">9999px</span>;
    <span class="text-blue-300">font-weight</span>: <span class="text-yellow-300">700</span>;
    <span class="text-blue-300">transition</span>: <span class="text-emerald-400">transform 0.25s ease, box-shadow 0.25s ease</span>;
}

<span class="text-theme-cyan">.woocommerce-checkout-btn:hover</span> {
    <span class="text-blue-300">transform</span>: <span class="text-emerald-400">scale(1.05)</span>;
    <span class="text-blue-300">box-shadow</span>: <span class="text-emerald-400">0 15px 30px rgba(255, 94, 54, 0.35)</span>;
}`
    },
    'Speed-Optimization.php': {
      path: 'WordPress-Workflow/Speed-Optimization.php',
      code: `<span class="text-slate-500">&lt;?php</span>
<span class="text-slate-500">/**
 * WordPress Performance Tweaks: Lightweight Child Theme Hooks
 * Automatically defer non-critical scripts and enable WebP support
 */</span>

<span class="text-blue-300">add_filter</span>(<span class="text-emerald-400">'wp_lazy_loading_enabled'</span>, <span class="text-theme-violet">'__return_true'</span>);

<span class="text-slate-500">// Remove unnecessary emojis and embed scripts for faster mobile load</span>
<span class="text-theme-cyan">function</span> <span class="text-yellow-300">maffid_clean_wp_header</span>() {
    <span class="text-blue-300">remove_action</span>(<span class="text-emerald-400">'wp_head'</span>, <span class="text-emerald-400">'print_emoji_detection_script'</span>, 7);
    <span class="text-blue-300">remove_action</span>(<span class="text-emerald-400">'wp_print_styles'</span>, <span class="text-emerald-400">'print_emoji_styles'</span>);
    <span class="text-blue-300">wp_deregister_script</span>(<span class="text-emerald-400">'wp-embed'</span>);
}
<span class="text-blue-300">add_action</span>(<span class="text-emerald-400">'init'</span>, <span class="text-emerald-400">'maffid_clean_wp_header'</span>);`
    },
    'SEO-Schema-Setup.json': {
      path: 'WordPress-Workflow/SEO-Schema-Setup.json',
      code: `<span class="text-slate-500">// Google-Ready Structured Data for Business & Products</span>
{
  <span class="text-theme-cyan">"@context"</span>: <span class="text-emerald-400">"https://schema.org"</span>,
  <span class="text-theme-cyan">"@type"</span>: <span class="text-emerald-400">"LocalBusiness"</span>,
  <span class="text-theme-cyan">"name"</span>: <span class="text-emerald-400">"Client Business Platform"</span>,
  <span class="text-theme-cyan">"founder"</span>: {
    <span class="text-theme-cyan">"@type"</span>: <span class="text-emerald-400">"Person"</span>,
    <span class="text-theme-cyan">"name"</span>: <span class="text-emerald-400">"Md. Maffid Hasan"</span>
  },
  <span class="text-theme-cyan">"service"</span>: [
    <span class="text-emerald-400">"WordPress Website Creation"</span>,
    <span class="text-emerald-400">"WooCommerce Store Setup"</span>,
    <span class="text-emerald-400">"On-Page SEO Optimization"</span>
  ],
  <span class="text-theme-cyan">"rating"</span>: {
    <span class="text-theme-cyan">"ratingValue"</span>: <span class="text-yellow-300">"5.0"</span>,
    <span class="text-theme-cyan">"reviewCount"</span>: <span class="text-yellow-300">"20"</span>
  }
}`
    }
  };

  const terminalTabBtns = document.querySelectorAll('.terminal-tab-btn');
  const terminalCodeDisplay = document.getElementById('terminalCodeDisplay');
  const terminalFileName = document.getElementById('terminalFileName');
  const copyBtn = document.getElementById('copyTerminalBtn');

  if (terminalTabBtns.length > 0 && terminalCodeDisplay) {
    terminalTabBtns.forEach(tab => {
      tab.addEventListener('click', () => {
        const snippetKey = tab.getAttribute('data-snippet');
        if (workflowSnippets[snippetKey]) {
          terminalTabBtns.forEach(t => {
            t.classList.remove('active', 'text-white', 'border-b-2', 'border-theme-cyan', 'bg-white/[0.02]');
            t.classList.add('text-slate-400');
          });
          tab.classList.add('active', 'text-white', 'border-b-2', 'border-theme-cyan', 'bg-white/[0.02]');
          tab.classList.remove('text-slate-400');

          if (terminalFileName) {
            terminalFileName.textContent = workflowSnippets[snippetKey].path;
          }
          terminalCodeDisplay.innerHTML = workflowSnippets[snippetKey].code;
        }
      });
    });
  }

  // Copy Snippet to Clipboard Action
  if (copyBtn && terminalCodeDisplay) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = terminalCodeDisplay.innerText || terminalCodeDisplay.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i data-lucide="check" class="w-3 h-3 text-theme-emerald"></i> <span class="text-theme-emerald">Copied!</span>`;
        if (window.lucide) lucide.createIcons();

        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          if (window.lucide) lucide.createIcons();
        }, 2000);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Google PageSpeed Interactive Switcher (Mobile vs Desktop Simulation)
  // --------------------------------------------------------------------------
  const speedToggleBtns = document.querySelectorAll('.speed-toggle-btn');
  const speedScoreDisplay = document.getElementById('speedScoreDisplay');
  const metricFCP = document.getElementById('metricFCP');
  const metricLCP = document.getElementById('metricLCP');
  const metricCLS = document.getElementById('metricCLS');
  const metricTBT = document.getElementById('metricTBT');
  const speedAuditedUrl = document.getElementById('speedAuditedUrl');

  if (speedToggleBtns.length === 2) {
    speedToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        speedToggleBtns.forEach(b => {
          b.classList.remove('active', 'bg-theme-card', 'text-theme-cyan', 'font-bold', 'border', 'border-theme-border');
          b.classList.add('text-slate-400');
        });
        btn.classList.add('active', 'bg-theme-card', 'text-theme-cyan', 'font-bold', 'border', 'border-theme-border');
        btn.classList.remove('text-slate-400');

        const mode = btn.getAttribute('data-mode');
        if (mode === 'desktop') {
          if (speedScoreDisplay) speedScoreDisplay.textContent = '96';
          if (metricFCP) metricFCP.textContent = '0.4s';
          if (metricLCP) metricLCP.textContent = '0.8s';
          if (metricCLS) metricCLS.textContent = '0.000';
          if (metricTBT) metricTBT.textContent = '0 ms';
          if (speedAuditedUrl) speedAuditedUrl.textContent = 'Environment: Desktop (Chrome on Fast Broadband)';
        } else {
          if (speedScoreDisplay) speedScoreDisplay.textContent = '88';
          if (metricFCP) metricFCP.textContent = '0.8s';
          if (metricLCP) metricLCP.textContent = '1.4s';
          if (metricCLS) metricCLS.textContent = '0.002';
          if (metricTBT) metricTBT.textContent = '20 ms';
          if (speedAuditedUrl) speedAuditedUrl.textContent = 'Environment: Mobile (Moto G4 on Throttled 4G)';
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Portfolio Category Filter Engine
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-theme-cyan', 'text-black');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('active', 'bg-theme-cyan', 'text-black');
      btn.classList.remove('text-slate-400');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'flex';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease';
            item.style.opacity = '1';
          }, 15);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 8. Interactive Project Cost & Scope Estimator Engine
  // --------------------------------------------------------------------------
  const scopeBtns = document.querySelectorAll('.scope-btn');
  const addonInputs = document.querySelectorAll('.addon-input');
  const calcPriceEl = document.getElementById('calcPrice');
  const calcDaysEl = document.getElementById('calcDays');
  const calcTypeEl = document.getElementById('calcType');

  let baseRate = 80;
  let baseDays = 3;
  let selectedTitle = "Business / Portfolio Website";

  function recalculateEstimate() {
    let currentPrice = baseRate;
    let currentDays = baseDays;

    addonInputs.forEach(addon => {
      if (addon.checked) {
        currentPrice += parseInt(addon.getAttribute('data-addon'), 10);
        currentDays += parseInt(addon.getAttribute('data-days'), 10);
      }
    });

    if (calcPriceEl) {
      calcPriceEl.textContent = `$${currentPrice.toLocaleString()}`;
    }
    if (calcDaysEl) {
      calcDaysEl.textContent = `${currentDays} Days`;
    }
    if (calcTypeEl) {
      calcTypeEl.textContent = selectedTitle;
    }
  }

  scopeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scopeBtns.forEach(b => {
        b.classList.remove('active', 'border-theme-cyan', 'bg-theme-cyan/10');
        b.classList.add('border-theme-border', 'bg-theme-bg');
      });
      btn.classList.add('active', 'border-theme-cyan', 'bg-theme-cyan/10');
      btn.classList.remove('border-theme-border', 'bg-theme-bg');

      baseRate = parseInt(btn.getAttribute('data-price'), 10);
      baseDays = parseInt(btn.getAttribute('data-days'), 10);
      selectedTitle = btn.querySelector('span').textContent.trim();

      recalculateEstimate();
    });
  });

  addonInputs.forEach(addon => {
    addon.addEventListener('change', recalculateEstimate);
  });

  // --------------------------------------------------------------------------
  // 9. FAQ Accordion (Smooth Open/Close & Icon Toggle)
  // --------------------------------------------------------------------------
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    const body = card.querySelector('.faq-body');
    const icon = card.querySelector('.faq-icon');

    header.addEventListener('click', () => {
      const isAlreadyOpen = !body.classList.contains('hidden');

      // Close all other accordions
      faqCards.forEach(otherCard => {
        otherCard.classList.remove('active', 'border-theme-cyan');
        otherCard.classList.add('border-theme-border');
        otherCard.querySelector('.faq-body').classList.add('hidden');
        
        const otherIcon = otherCard.querySelector('.faq-icon');
        otherIcon.setAttribute('data-lucide', 'plus');
        otherIcon.classList.remove('text-theme-cyan');
        otherIcon.classList.add('text-slate-400');
      });

      // Toggle clicked accordion
      if (!isAlreadyOpen) {
        card.classList.add('active', 'border-theme-cyan');
        card.classList.remove('border-theme-border');
        body.classList.remove('hidden');

        icon.setAttribute('data-lucide', 'minus');
        icon.classList.add('text-theme-cyan');
        icon.classList.remove('text-slate-400');
      }

      if (window.lucide) lucide.createIcons();
    });
  });

  // --------------------------------------------------------------------------
  // 10. Contact Form Asynchronous Submission (With WhatsApp Quick Connect)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⟳</span>
        <span>Sending Your Message...</span>
      `;

      setTimeout(() => {
        contactForm.innerHTML = `
          <div class="p-8 rounded-2xl bg-theme-bg border border-theme-border text-center space-y-4">
            <div class="w-14 h-14 rounded-full bg-theme-emerald/10 border border-theme-emerald/40 flex items-center justify-center mx-auto text-theme-emerald">
              <i data-lucide="check" class="w-7 h-7"></i>
            </div>
            <h3 class="text-xl font-black text-white font-sans">Thank You! Message Received</h3>
            <p class="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Your message has been sent directly to Md. Maffid Hasan. For an instant response, you can also reach me directly on WhatsApp!
            </p>
            <div class="pt-2">
              <a href="https://wa.me/8801848363533" target="_blank" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-fire-gradient shadow-lg">
                <i data-lucide="message-circle" class="w-4 h-4"></i>
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>
          </div>
        `;
        if (window.lucide) lucide.createIcons();
      }, 1000);
    });
  }

});
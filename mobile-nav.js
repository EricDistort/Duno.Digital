const mobileNavHTML = `
<style>
  /* Responsive sizing for locked production environments */
  #dot-nav-menu {
    width: calc(100vw - 48px);
    max-width: 500px;
    gap: 16px;
  }
  #dot-nav-left-col {
    width: 130px;
    min-width: 130px;
  }
  
  /* ACTION ROW RESPONSIVE LOGIC */
  /* Mobile First: Stack theme button on top, circles centered on bottom */
  #dot-nav-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    flex-shrink: 0;
  }
  
  #theme-single-btn {
    width: 100%;
    height: 48px;
    min-height: 48px;
    flex-shrink: 0;
  }
  
  #dot-nav-action-circles {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    justify-content: center; /* Perfectly centers the phone and mail icons */
  }

  /* Desktop/Tablet: Snap everything into a single row */
  @media (min-width: 550px) {
    #dot-nav-menu {
      gap: 24px;
    }
    #dot-nav-left-col {
      width: 160px;
      min-width: 160px;
    }
    #dot-nav-actions {
      flex-direction: row;
      align-items: center;
      height: 48px;
    }
    #theme-single-btn {
      flex: 1; /* Takes the remaining horizontal space in Desktop view */
      width: auto;
    }
    #dot-nav-action-circles {
      width: auto;
      justify-content: flex-end; /* Pushes the circles to the right edge */
    }
  }

  /* UIVERSE ANIMATION STYLES */
  .uiverse-loader {
    --color-one: #ffbf48;
    --color-two: #be4a1d;
    --color-three: #ffbf4780;
    --color-four: #bf4a1d80;
    --color-five: #ffbf4740;
    --time-animation: 2s;
    --size: 0.55; 
    
    position: relative;
    border-radius: 50%;
    transform: scale(var(--size));
    box-shadow:
      0 0 25px 0 var(--color-three),
      0 20px 50px 0 var(--color-four);
    animation: ui-colorize calc(var(--time-animation) * 3) ease-in-out infinite;
  }

  .uiverse-loader::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-top: solid 1px var(--color-one);
    border-bottom: solid 1px var(--color-two);
    background: linear-gradient(180deg, var(--color-five), var(--color-four));
    box-shadow:
      inset 0 10px 10px 0 var(--color-three),
      inset 0 -10px 10px 0 var(--color-four);
  }

  .uiverse-loader .uiverse-box {
    width: 100px;
    height: 100px;
    background: linear-gradient(
      180deg,
      var(--color-one) 30%,
      var(--color-two) 70%
    );
    mask: url(#clipping);
    -webkit-mask: url(#clipping);
  }

  .uiverse-loader svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .uiverse-loader svg #clipping {
    filter: contrast(15);
    animation: ui-roundness calc(var(--time-animation) / 2) linear infinite;
  }

  .uiverse-loader svg #clipping polygon {
    filter: blur(7px);
  }

  .uiverse-loader svg #clipping polygon:nth-child(1) {
    transform-origin: 75% 25%;
    transform: rotate(90deg);
  }

  .uiverse-loader svg #clipping polygon:nth-child(2) {
    transform-origin: 50% 50%;
    animation: ui-rotation var(--time-animation) linear infinite reverse;
  }

  .uiverse-loader svg #clipping polygon:nth-child(3) {
    transform-origin: 50% 60%;
    animation: ui-rotation var(--time-animation) linear infinite;
    animation-delay: calc(var(--time-animation) / -3);
  }

  .uiverse-loader svg #clipping polygon:nth-child(4) {
    transform-origin: 40% 40%;
    animation: ui-rotation var(--time-animation) linear infinite reverse;
  }

  .uiverse-loader svg #clipping polygon:nth-child(5) {
    transform-origin: 40% 40%;
    animation: ui-rotation var(--time-animation) linear infinite reverse;
    animation-delay: calc(var(--time-animation) / -2);
  }

  .uiverse-loader svg #clipping polygon:nth-child(6) {
    transform-origin: 60% 40%;
    animation: ui-rotation var(--time-animation) linear infinite;
  }

  .uiverse-loader svg #clipping polygon:nth-child(7) {
    transform-origin: 60% 40%;
    animation: ui-rotation var(--time-animation) linear infinite;
    animation-delay: calc(var(--time-animation) / -1.5);
  }

  @keyframes ui-rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes ui-roundness {
    0% { filter: contrast(15); }
    20% { filter: contrast(3); }
    40% { filter: contrast(3); }
    60% { filter: contrast(15); }
    100% { filter: contrast(15); }
  }

  @keyframes ui-colorize {
    0% { filter: hue-rotate(0deg); }
    20% { filter: hue-rotate(-30deg); }
    40% { filter: hue-rotate(-60deg); }
    60% { filter: hue-rotate(-90deg); }
    80% { filter: hue-rotate(-45deg); }
    100% { filter: hue-rotate(0deg); }
  }
</style>

<div id="mobile-dot-nav" class="fixed bottom-6 left-6 z-[9999] flex flex-col-reverse items-start gap-5">
  
  <!-- The Dot Button -->
  <button id="dot-nav-button" aria-label="Toggle Menu" class="relative size-14 bg-transparent rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105" style="flex-shrink: 0;">
    
    <!-- UIVERSE ANIMATION WRAPPER -->
    <div id="dot-nav-menu-icon" class="pointer-events-none flex items-center justify-center absolute inset-0">
      <div class="uiverse-loader">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <mask id="clipping">
              <polygon points="0,0 100,0 100,100 0,100" fill="black"></polygon>
              <polygon points="25,25 75,25 50,75" fill="white"></polygon>
              <polygon points="50,25 75,75 25,75" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
              <polygon points="35,35 65,35 50,65" fill="white"></polygon>
            </mask>
          </defs>
        </svg>
        <div class="uiverse-box"></div>
      </div>
    </div>
  </button>

  <!-- THE MAIN CONTAINER (Updated to rounded-[36px] for iPhone squircle effect) -->
  <div id="dot-nav-menu" class="hidden flex-row bg-white/60 dark:bg-backgrounds-7/60 backdrop-blur-[25px] rounded-[36px] p-6 shadow-2xl transition-all duration-300 origin-bottom-left opacity-0 translate-y-4 scale-95" style="border: 1px solid rgba(128, 128, 128, 0.25);">
    
    <!-- Left Column: Menu Links -->
    <nav id="dot-nav-left-col" class="flex flex-col gap-2 justify-center" style="flex-shrink: 0;">
      <a href="index.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Home</a>
      <a href="Brandings.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Branding</a>
      <a href="Graphics.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Graphics</a>
      <a href="Website.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Website</a>
      <a href="Mobile_App.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Mobile App</a>
      
    </nav>

    <!-- SLICK VERTICAL DIVIDER -->
    <div style="width: 1px; background-color: rgba(128, 128, 128, 0.25); border-radius: 2px; flex-shrink: 0;"></div>

    <!-- Right Column: Image and Action Buttons -->
    <div class="flex flex-col gap-5 flex-1 justify-center" style="min-width: 0;">
      
      <!-- THE IMAGE CONTAINER -->
      <div class="w-full rounded-[25px] overflow-hidden bg-gray-200 dark:bg-gray-800 relative flex items-center justify-center" style="height: 290px; flex-shrink: 0; box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);">
        <span class="absolute text-gray-500 dark:text-gray-400 text-sm font-medium z-0">Image Area</span>
        <img src="./astraunot.jpg" alt="Menu Feature" class="relative z-10 w-full h-full object-cover" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <!-- Actions Container (Responsive Row/Col Setup) -->
      <div id="dot-nav-actions">
        
        <!-- Dynamic Theme Toggle Button -->
        <button id="theme-single-btn" type="button" aria-label="Toggle Theme" class="rounded-full flex items-center justify-center gap-2 text-sm font-bold tracking-wide transition-all duration-300 bg-black text-white shadow-md border-none dark:bg-white dark:text-black hover:opacity-80">
          <span class="hidden dark:block">Light Mode</span>
          <span class="block dark:hidden">Dark Mode</span>
        </button>

        <!-- Circle Action Buttons Wrapper -->
        <div id="dot-nav-action-circles">
          <!-- Call Button -->
          <a href="tel:+971565622280" aria-label="Call Us" class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white text-black shadow-md hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>

          <!-- Mail Button -->
          <a href="mailto:knocklooser.pro@gmail.com" aria-label="Email Us" class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white text-black shadow-md hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 ２.２５ 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
        
      </div>

    </div>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('mobile-dot-nav')) return;
  
  document.body.insertAdjacentHTML('beforeend', mobileNavHTML);

  const dotBtn = document.getElementById('dot-nav-button');
  const dotMenu = document.getElementById('dot-nav-menu');
  const themeSingleBtn = document.getElementById('theme-single-btn');
  const htmlEl = document.documentElement;

  const isDark = localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  htmlEl.classList.toggle('dark', isDark);

  const setTheme = (theme) => {
    htmlEl.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  // Single Button Theme Toggle Logic
  themeSingleBtn?.addEventListener('click', () => {
    const currentThemeIsDark = htmlEl.classList.contains('dark');
    setTheme(currentThemeIsDark ? 'light' : 'dark');
  });

  const toggleMenu = (show) => {
    if (show) {
      dotMenu.classList.remove('hidden');
      dotMenu.classList.add('flex');
      requestAnimationFrame(() => {
        dotMenu.classList.replace('opacity-0', 'opacity-100');
        dotMenu.classList.replace('scale-95', 'scale-100');
        dotMenu.classList.replace('translate-y-4', 'translate-y-0');
      });
    } else {
      dotMenu.classList.replace('opacity-100', 'opacity-0');
      dotMenu.classList.replace('scale-100', 'scale-95');
      dotMenu.classList.replace('translate-y-0', 'translate-y-4');
      setTimeout(() => {
        dotMenu.classList.add('hidden');
        dotMenu.classList.remove('flex');
      }, 300);
    }
  };

  dotBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(dotMenu.classList.contains('hidden'));
  });

  document.addEventListener('click', (e) => {
    if (!dotMenu.contains(e.target) && !dotMenu.classList.contains('hidden')) {
      toggleMenu(false);
    }
  });
});
const mobileNavHTML = `
<style>
  /* Responsive sizing for locked production environments */
  #dot-nav-menu {
    width: calc(100vw - 48px); /* Accounts for left-6 (24px) to prevent overflow */
    max-width: 500px;
    gap: 16px;
  }
  #dot-nav-left-col {
    width: 130px;
    min-width: 130px;
  }
  @media (min-width: 550px) {
    #dot-nav-menu {
      gap: 24px;
    }
    #dot-nav-left-col {
      width: 160px;
      min-width: 160px;
    }
  }
</style>

<div id="mobile-dot-nav" class="fixed bottom-6 left-6 z-[9999] flex flex-col-reverse items-start gap-5">
  
  <!-- The Dot Button -->
  <button id="dot-nav-button" aria-label="Toggle Menu" class="size-14 bg-background-8 dark:bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-105" style="flex-shrink: 0;">
    <svg id="dot-nav-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 stroke-white dark:stroke-black">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    <svg id="dot-nav-close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 stroke-white dark:stroke-black hidden">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  <!-- THE MAIN CONTAINER -->
  <div id="dot-nav-menu" class="hidden flex-row bg-white/60 dark:bg-backgrounds-7/60 backdrop-blur-[25px] rounded-[28px] p-6 shadow-2xl transition-all duration-300 origin-bottom-left opacity-0 translate-y-4 scale-95" style="border: 1px solid rgba(128, 128, 128, 0.25);">
    
    <!-- Left Column: Menu Links -->
    <nav id="dot-nav-left-col" class="flex flex-col gap-2 justify-center" style="flex-shrink: 0;">
      <a href="Brandings.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Branding</a>
      <a href="Graphics.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Graphics</a>
      <a href="Website.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Website</a>
      <a href="Mobile_App.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Mobile App</a>
      <a href="./contact.html" class="block px-4 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Let's Chat</a>
    </nav>

    <!-- SLICK VERTICAL DIVIDER -->
    <div style="width: 1px; background-color: rgba(128, 128, 128, 0.25); border-radius: 2px; flex-shrink: 0;"></div>

    <!-- Right Column: Image and Theme Buttons -->
    <div class="flex flex-col gap-5 flex-1 justify-center" style="min-width: 0;">
      
      <!-- THE IMAGE CONTAINER -->
      <div class="w-full rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 relative flex items-center justify-center" style="height: 290px; flex-shrink: 0; box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);">
        <span class="absolute text-gray-500 dark:text-gray-400 text-sm font-medium z-0">Image Area</span>
        
        <!-- LOCAL IMAGE PATH HERE -->
        <img src="./astraunot.jpg" alt="Menu Feature" class="relative z-10 w-full h-full object-cover" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <!-- Theme Buttons Container -->
      <div class="w-full flex flex-col gap-3" style="flex-shrink: 0;">
        
        <!-- Light Mode Button -->
        <button id="theme-light-btn" type="button" aria-label="Light Mode" class="w-full py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-white text-black border border-transparent shadow-md dark:bg-transparent dark:text-white dark:border-white/30 dark:shadow-none hover:opacity-80">
          Light Mode
        </button>

        <!-- Dark Mode Button -->
        <button id="theme-dark-btn" type="button" aria-label="Dark Mode" class="w-full py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-transparent text-black border border-black/30 shadow-none dark:bg-black dark:text-white dark:border-transparent dark:shadow-md hover:opacity-80">
          Dark Mode
        </button>

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
  const menuIcon = document.getElementById('dot-nav-menu-icon');
  const closeIcon = document.getElementById('dot-nav-close-icon');
  const lightBtn = document.getElementById('theme-light-btn');
  const darkBtn = document.getElementById('theme-dark-btn');
  const htmlEl = document.documentElement;

  const isDark = localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  htmlEl.classList.toggle('dark', isDark);

  const setTheme = (theme) => {
    htmlEl.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  lightBtn?.addEventListener('click', () => setTheme('light'));
  darkBtn?.addEventListener('click', () => setTheme('dark'));

  const toggleMenu = (show) => {
    if (show) {
      dotMenu.classList.remove('hidden');
      dotMenu.classList.add('flex');
      requestAnimationFrame(() => {
        dotMenu.classList.replace('opacity-0', 'opacity-100');
        dotMenu.classList.replace('scale-95', 'scale-100');
        dotMenu.classList.replace('translate-y-4', 'translate-y-0');
      });
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      dotMenu.classList.replace('opacity-100', 'opacity-0');
      dotMenu.classList.replace('scale-100', 'scale-95');
      dotMenu.classList.replace('translate-y-0', 'translate-y-4');
      setTimeout(() => {
        dotMenu.classList.add('hidden');
        dotMenu.classList.remove('flex');
      }, 300);
      closeIcon.classList.add('hidden');
      menuIcon.classList.remove('hidden');
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
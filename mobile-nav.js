const mobileNavHTML = `
<div id="mobile-dot-nav" class="fixed bottom-6 left-6 z-[9999] flex flex-col-reverse items-start gap-5">
  
  <!-- The Dot Button -->
  <button id="dot-nav-button" aria-label="Toggle Menu" class="size-14 bg-background-8 dark:bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-105">
    <svg id="dot-nav-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 stroke-white dark:stroke-black">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    <svg id="dot-nav-close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 stroke-white dark:stroke-black hidden">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  <!-- The Menu Container -->
  <div id="dot-nav-menu" class="hidden flex-col border border-stroke-2 dark:border-stroke-7 bg-white/60 dark:bg-backgrounds-7/60 backdrop-blur-[25px] rounded-[28px] p-6 shadow-2xl transition-all duration-300 origin-bottom-left opacity-0 translate-y-4 scale-95 min-w-[240px]">
    
    <nav class="flex flex-col gap-1.5">
      <a href="Brandings.html" class="block px-3 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Branding</a>
      <a href="Graphics.html" class="block px-3 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Graphics</a>
      <a href="Website.html" class="block px-3 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Website</a>
      <a href="Mobile_App.html" class="block px-3 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Mobile App</a>
      <a href="./contact.html" class="block px-3 py-2.5 rounded-lg text-tagline-1 text-secondary/80 hover:text-secondary hover:bg-black/5 dark:text-accent/80 dark:hover:text-accent dark:hover:bg-white/10 font-medium transition-all duration-200">Let's Chat</a>
    </nav>

    <!-- Divider with improved vertical spacing -->
    <div class="w-full h-px bg-stroke-2 dark:bg-stroke-7 my-5"></div>

    <!-- Solid Theme Toggle Button -->
    <button id="theme-toggle" type="button" aria-label="Toggle Theme" class="w-full flex items-center justify-between px-5 py-4 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-300 cursor-pointer group">
      
      <!-- Text relies on CSS to swap instantly -->
      <span class="text-[15px] font-semibold tracking-wide text-secondary dark:text-accent dark:hidden">Light Mode</span>
      <span class="text-[15px] font-semibold tracking-wide text-secondary dark:text-accent hidden dark:block">Dark Mode</span>
      
      <!-- Change/Swap Icon -->
      <svg id="theme-sync-icon" class="w-5 h-5 text-secondary dark:text-accent transition-transform duration-500 group-active:scale-90" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
      
    </button>

  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Prevent duplicate injections
  if (!document.getElementById('mobile-dot-nav')) {
    document.body.insertAdjacentHTML('beforeend', mobileNavHTML);
  }

  const dotBtn = document.getElementById('dot-nav-button');
  const dotMenu = document.getElementById('dot-nav-menu');
  const menuIcon = document.getElementById('dot-nav-menu-icon');
  const closeIcon = document.getElementById('dot-nav-close-icon');

  // Theme Toggle Elements
  const themeToggle = document.getElementById('theme-toggle');
  const syncIcon = document.getElementById('theme-sync-icon');
  const htmlElement = document.documentElement;

  // 1. Initial Theme Setup
  const isDarkMode = localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDarkMode) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }

  // 2. Theme Toggle Click Event
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // Add a clean spin effect to the icon
      if (syncIcon) {
        syncIcon.style.transform = syncIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
      }

      // Toggle Tailwind classes and save to localStorage
      htmlElement.classList.toggle('dark');
      if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // 3. Navigation Toggle Events
  if (dotBtn && dotMenu) {
    dotBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dotMenu.classList.contains('hidden')) {
        dotMenu.classList.remove('hidden');
        dotMenu.classList.add('flex');
        
        setTimeout(() => {
          dotMenu.classList.remove('opacity-0', 'scale-95', 'translate-y-4');
          dotMenu.classList.add('opacity-100', 'scale-100', 'translate-y-0');
        }, 10);
        
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        closeMenu();
      }
    });

    document.addEventListener('click', (e) => {
      if (!dotMenu.contains(e.target) && !dotMenu.classList.contains('hidden')) {
        closeMenu();
      }
    });

    function closeMenu() {
      dotMenu.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
      dotMenu.classList.add('opacity-0', 'scale-95', 'translate-y-4');
      setTimeout(() => {
        dotMenu.classList.add('hidden');
        dotMenu.classList.remove('flex');
      }, 300);
      closeIcon.classList.add('hidden');
      menuIcon.classList.remove('hidden');
    }
  }
});
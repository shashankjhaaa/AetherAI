AOS.init({ once: true, offset: 50 });

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("scroll-progress").style.width = scrolled + "%";

      const scrollTopBtn = document.getElementById('scroll-top-btn');
      if (winScroll > 400 && document.getElementById('dashboard-view').classList.contains('hidden')) {
        scrollTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        scrollTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        scrollTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    });

    const typeTarget = document.getElementById('typewriter');
    const typeWords = ['outcomes.', 'sales.', 'your brand.'];
    let wordIdx = 0; let charIdx = 0; let isDeleting = false;
    
    function typeWriter() {
      if(!typeTarget) return;
      const currentWord = typeWords[wordIdx];
      if(isDeleting) {
        typeTarget.innerText = currentWord.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typeTarget.innerText = currentWord.substring(0, charIdx + 1);
        charIdx++;
      }
      let typeSpeed = isDeleting ? 50 : 100;
      if(!isDeleting && charIdx === currentWord.length) {
        typeSpeed = 2000; isDeleting = true;
      } else if(isDeleting && charIdx === 0) {
        isDeleting = false; wordIdx = (wordIdx + 1) % typeWords.length; typeSpeed = 500;
      }
      setTimeout(typeWriter, typeSpeed);
    }
    setTimeout(typeWriter, 1000);

    let exitIntentTriggered = false;
    document.addEventListener('mouseleave', function(e) {
      if (e.clientY <= 5 && !exitIntentTriggered && document.getElementById('dashboard-view').classList.contains('hidden')) {
        exitIntentTriggered = true;
        document.getElementById('exit-modal').classList.remove('hidden');
        document.getElementById('exit-modal').classList.add('flex');
      }
    });
    function closeExitModal() {
      document.getElementById('exit-modal').classList.add('hidden');
      document.getElementById('exit-modal').classList.remove('flex');
    }

    let isAnnual = false;
    function toggleBilling() {
      isAnnual = !isAnnual;
      const dot = document.getElementById('billing-dot');
      const toggleBtn = document.getElementById('billing-toggle');
      if(isAnnual) {
        dot.style.transform = 'translateX(28px)';
        toggleBtn.classList.add('bg-brand-primary'); toggleBtn.classList.remove('bg-slate-300', 'dark:bg-slate-700');
      } else {
        dot.style.transform = 'translateX(0)';
        toggleBtn.classList.remove('bg-brand-primary'); toggleBtn.classList.add('bg-slate-300', 'dark:bg-slate-700');
      }
      calculatePricing();
    }

    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      const icons = [document.getElementById('theme-icon'), document.getElementById('dash-theme-icon')];
      icons.forEach(icon => {
        if(icon) {
          if (isDark) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); } 
          else { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
        }
      });
    }

    const toastMessages = [
      "🎉 Aman from Delhi just booked a demo!",
      "⚡ Unitel API integration completed",
      "💬 New 5-star review from Vodafone",
      "🚀 System handling 400+ active chats",
      "💸 Aether AI saved a client $450 today"
    ];
    function showRandomToast() {
      if(!document.getElementById('dashboard-view').classList.contains('hidden')) return; 
      const container = document.getElementById('toast-container');
      const msg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
      const toast = document.createElement('div');
      toast.className = "bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-xl rounded-xl px-4 py-3 text-sm font-bold text-slate-800 dark:text-white animate-slide-up flex items-center space-x-3";
      toast.innerHTML = `<div class="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div><span>${msg}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.4s ease';
        setTimeout(() => toast.remove(), 400);
      }, 4000);
    }
    setTimeout(() => { setInterval(showRandomToast, 12000); showRandomToast(); }, 3000);

    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('i');
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    }

    function openLoginModal() { 
      document.getElementById('login-modal').classList.remove('hidden'); 
      document.getElementById('login-modal').classList.add('flex'); 
      document.getElementById('password-input').value = '';
      if(isSignupMode) toggleAuthMode(); 
    }
    function closeLoginModal() { document.getElementById('login-modal').classList.add('hidden'); document.getElementById('login-modal').classList.remove('flex'); document.getElementById('login-error').classList.add('hidden'); }
    
    function openDemoModal() { 
      document.getElementById('demo-modal').classList.remove('hidden'); 
      document.getElementById('demo-modal').classList.add('flex'); 
      document.getElementById('demo-form-container').classList.remove('hidden');
      document.getElementById('demo-success-container').classList.add('hidden');
      document.getElementById('demo-success-container').classList.remove('flex');
    }
    function closeDemoModal() { 
      document.getElementById('demo-modal').classList.add('hidden'); 
      document.getElementById('demo-modal').classList.remove('flex'); 
    }
    function handleDemoSubmit(event) {
      event.preventDefault();
      document.getElementById('demo-form-container').classList.add('hidden');
      document.getElementById('demo-success-container').classList.remove('hidden');
      document.getElementById('demo-success-container').classList.add('flex');
      setTimeout(() => { closeDemoModal(); }, 2500);

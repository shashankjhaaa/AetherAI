function openDashboard() { document.getElementById('landing-view').classList.add('hidden'); document.getElementById('dashboard-view').classList.remove('hidden'); switchDashboardTab('overview'); window.scrollTo(0, 0); initChart(); document.getElementById('scroll-top-btn').classList.add('hidden'); }
    function closeDashboard() { document.getElementById('dashboard-view').classList.add('hidden'); document.getElementById('landing-view').classList.remove('hidden'); window.scrollTo(0, 0); document.getElementById('scroll-top-btn').classList.remove('hidden'); }
    
    function switchDashboardTab(tabName) {
      document.getElementById('tab-overview').classList.add('hidden'); document.getElementById('tab-settings').classList.add('hidden');
      document.getElementById('nav-overview').className = "w-full flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl font-semibold transition";
      document.getElementById('nav-settings').className = "w-full flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl font-semibold transition";
      if (tabName === 'overview') {
        document.getElementById('tab-overview').classList.remove('hidden'); document.getElementById('dash-header-title').innerText = "Dashboard Overview";
        document.getElementById('nav-overview').className = "w-full flex items-center space-x-3 px-4 py-3 bg-brand-primary/20 text-brand-primary rounded-xl font-bold transition";
      } else if (tabName === 'settings') {
        document.getElementById('tab-settings').classList.remove('hidden'); document.getElementById('dash-header-title').innerText = "Agent Settings";
        document.getElementById('nav-settings').className = "w-full flex items-center space-x-3 px-4 py-3 bg-brand-primary/20 text-brand-primary rounded-xl font-bold transition";
      }
    }

    document.getElementById('bot-color-picker').addEventListener('input', function(e) { document.getElementById('bot-color-text').value = e.target.value; });
    let currentBotColor = "#0ea5e9";
    let currentBotMessage = "Hi there! 👋 I am powered by Gemini AI. Type or click below!";
    
    function saveBotSettings() {
      currentBotColor = document.getElementById('bot-color-text').value;
      currentBotMessage = document.getElementById('bot-welcome-msg').value;
      document.getElementById('chat-widget-btn').style.backgroundColor = currentBotColor;
      document.getElementById('chat-widget-header').style.backgroundColor = currentBotColor;
      document.getElementById('chat-messages').innerHTML = ""; 
      appendMessage(currentBotMessage, 'bot');
      const successMsg = document.getElementById('save-success-msg'); successMsg.classList.remove('hidden'); setTimeout(() => { successMsg.classList.add('hidden'); }, 3000);
    }

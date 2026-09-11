const chatPanel = document.getElementById('chat-panel'); 
    const chatMessages = document.getElementById('chat-messages');
    appendMessage("Hi there! 👋 I'm powered by Gemini. Ask me anything!", 'bot');

    function toggleChat() {
      if (chatPanel.classList.contains('hidden')) { chatPanel.classList.remove('hidden'); chatPanel.classList.add('flex'); } 
      else { chatPanel.classList.add('hidden'); chatPanel.classList.remove('flex'); }
    }

    async function sendCustomMessage(presetText = null) {
      const input = document.getElementById('chat-input');
      const text = presetText || input.value.trim();
      if (!text) return;
      if (!presetText) input.value = "";
      
      appendMessage(text, 'user');
      const typingId = "typing-" + Date.now();
      appendTypingIndicator(typingId);
      
      try {
        const res = await fetch('http://localhost:8080/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text })
        });
        
        const data = await res.json();
        document.getElementById(typingId).remove();
        
        let formattedReply = (data.reply || "").replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
        appendMessage(formattedReply, 'bot');
        
      } catch(e) {
        document.getElementById(typingId).remove();
        appendMessage("⚠️ Backend is offline. Please start Spring Boot on port 8080.", 'bot');
      }
    }

    function appendMessage(text, sender) {
      const msgDiv = document.createElement('div');
      msgDiv.className = sender === 'user' ? 'flex items-start space-x-2 justify-end' : 'flex items-start space-x-2';
      
      const userIcon = `<div class="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center text-slate-500 dark:text-slate-300 text-xs mt-auto"><i class="fa-solid fa-user"></i></div>`;
      const botIcon = `<div class="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs bg-white/20" style="background-color: ${currentBotColor};"><i class="fa-solid fa-robot"></i></div>`;
      const userBubble = `<div class="text-white p-3 rounded-2xl rounded-tr-sm text-xs shadow-sm max-w-[80%]" style="background-color: ${currentBotColor};">${text}</div>`;
      const botBubble = `<div class="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 p-3 rounded-2xl rounded-tl-sm text-xs shadow-sm max-w-[80%]" style="overflow-wrap: break-word;">${text}</div>`;

      msgDiv.innerHTML = sender === 'user' ? userBubble + userIcon : botIcon + botBubble;
      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight; 
    }

    function appendTypingIndicator(id) {
      const msgDiv = document.createElement('div');
      msgDiv.id = id;
      msgDiv.className = 'flex items-start space-x-2';
      msgDiv.innerHTML = `<div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs bg-white/20" style="background-color: ${currentBotColor};"><i class="fa-solid fa-robot"></i></div><div class="bg-white dark:bg-slate-900 border p-3 rounded-2xl text-xs"><i class="fa-solid fa-ellipsis animate-pulse text-lg"></i></div>`;
      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

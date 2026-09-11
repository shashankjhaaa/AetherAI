function initChart() {
      if(myChart) return; 
      const ctx = document.getElementById('analyticsChart').getContext('2d');
      myChart = new Chart(ctx, { type: 'line', data: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], datasets: [{ label: 'Queries', data: [120, 190, 150, 220, 180, 250, 210], borderColor: '#0ea5e9', backgroundColor: 'rgba(14, 165, 233, 0.1)', borderWidth: 3, fill: true, tension: 0.4 }] }, options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true }, x: { grid: { display: false } } } } });
    }

    function calculatePricing() {
      const chats = parseInt(document.getElementById('chats-slider').value); 
      document.getElementById('chats-val').innerText = chats.toLocaleString();
      let total = 99 + ((chats / 1000) * 15); 
      if(isAnnual) { total = total * 0.8; } 
      const humanEquiv = Math.round(chats * 0.45); 
      const savingsPct = Math.round(((humanEquiv - total) / humanEquiv) * 100);
      document.getElementById('price-total').innerText = Math.round(total).toLocaleString(); 
      document.getElementById('projected-savings').innerText = `${savingsPct > 0 ? savingsPct : 0}%`;
    }
    calculatePricing();

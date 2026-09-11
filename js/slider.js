const testimonialSlider = document.getElementById('slider');
    if(testimonialSlider) {
      let isDown = false; let startX; let scrollLeft;
      testimonialSlider.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - testimonialSlider.offsetLeft; scrollLeft = testimonialSlider.scrollLeft; });
      testimonialSlider.addEventListener('mouseleave', () => { isDown = false; });
      testimonialSlider.addEventListener('mouseup', () => { isDown = false; });
      testimonialSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return; e.preventDefault();
        const x = e.pageX - testimonialSlider.offsetLeft;
        const walk = (x - startX) * 2; testimonialSlider.scrollLeft = scrollLeft - walk;
      });
      document.getElementById('slide-left')?.addEventListener('click', () => { testimonialSlider.scrollBy({ left: -350, behavior: 'smooth' }); });
      document.getElementById('slide-right')?.addEventListener('click', () => { testimonialSlider.scrollBy({ left: 350, behavior: 'smooth' }); });
    }

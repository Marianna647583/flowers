document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal__close');
    const subscribeBtn = document.querySelector('.blog__button');
  
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
      });
    }
  
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
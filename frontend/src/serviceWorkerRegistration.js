

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/service-worker.js';

      navigator.serviceWorker
        .register(swUrl)
        .then(() => console.log('SW registrado'))
        .catch(() => console.log('Error SW'));
    });
  }
}
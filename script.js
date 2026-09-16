const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const message = document.getElementById('message');
const counter = document.getElementById('counter');
if (message) {
  message.addEventListener('input', () => counter.textContent = `${message.value.length} / 5000`);
}

const waSend = document.getElementById('waSend');
if (waSend) {
  waSend.addEventListener('click', () => {
    const topic = document.getElementById('topic').value || 'General support';
    const text = message.value.trim();
    if (!text) {
      alert('Please enter a message before continuing to WhatsApp.');
      message.focus();
      return;
    }
    const body = `MSF PRIVATE ROOM\\nTopic: ${topic}\\n\\n${text}`;
    window.open(`https://wa.me/27783498115?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
  });
}

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      const old = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = old, 1200);
    } catch {
      alert(`Account number: ${btn.dataset.copy}`);
    }
  });
});

// İlişki sayacı: 23 Eylül 2023, yerel saatle gece yarısı
const startDate = new Date(2023, 8, 23, 0, 0, 0);
function updateCounter(){
  const now = new Date();
  let diff = Math.max(0, now - startDate);
  const day = 86400000, hour = 3600000, minute = 60000;
  const days = Math.floor(diff / day);
  diff -= days * day;
  const hours = Math.floor(diff / hour);
  diff -= hours * hour;
  const minutes = Math.floor(diff / minute);
  const seconds = Math.floor((diff - minutes * minute) / 1000);
  document.getElementById('days').textContent = days.toLocaleString('tr-TR');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
}
updateCounter(); setInterval(updateCounter, 1000);
document.getElementById('reveal').addEventListener('click', function(){
  const message = document.getElementById('message');
  message.classList.toggle('show');
  this.textContent = message.classList.contains('show') ? 'Notu kapat ♡' : 'Sana özel notu aç ♥';
});

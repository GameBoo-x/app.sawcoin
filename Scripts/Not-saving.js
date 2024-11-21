// منع القائمة السياقية
        document.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        });

        // منع الضغط المطوّل على العناصر
        document.querySelectorAll("img, p").forEach(element => {
            element.addEventListener("mousedown", e => e.preventDefault());
            element.addEventListener("touchstart", e => e.preventDefault());
        });



// إظهار الشاشة السوداء عند أخذ اسكرين شوت
function showBlackScreenOverlay() {
  const overlay = document.createElement('div');
  overlay.classList.add('screenshot-overlay');
  document.body.appendChild(overlay);
  overlay.style.display = 'block';

  // إخفاء الطبقة بعد فترة قصيرة
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.removeChild(overlay);
  }, 1000); // مدة التغطية: ثانية واحدة
}

// محاكاة اكتشاف اخذ الاسكرين شوت
window.addEventListener('keydown', (e) => {
  if (e.key === 'PrintScreen') { // تحقق إذا تم الضغط على مفتاح PrintScreen
    showBlackScreenOverlay();
  }
});


/* بسيط لمسح أي سلوك افتراضي وتشغيل القائمة الجانبية + نموذج الاتصال */
(function(){
  // sidebar functions
  window.openMenu = function(){
    document.getElementById('sidebar').style.right = '0';
  };
  window.closeMenu = function(){
    document.getElementById('sidebar').style.right = '-320px';
  };

  // close sidebar when clicking outside on mobile
  document.addEventListener('click', function(e){
    var sidebar = document.getElementById('sidebar');
    if(!sidebar) return;
    var isClickInside = sidebar.contains(e.target) || e.target.classList.contains('menu-toggle');
    if(!isClickInside){
      sidebar.style.right = '-320px';
    }
  });

  // simple form handler (contact)
  window.submitForm = function(ev){
    ev.preventDefault();
    var name = document.getElementById('name').value || 'زائر';
    var msg = document.getElementById('message').value || '';
    alert('شكراً يا '+ name + '، رسالتك وصلِت! هنتواصل معاك عبر التليجرام.');
    // لو حابب تخزن الرسالة في مكان محلي ممكن نضيف LocalStorage أو API لاحقاً
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
    return false;
  };

})();
// Centralized navigation mapping for easy future updates
(function(){
  function norm(t){return (t||'').trim().toLowerCase();}
  var volunteerTargets = ['Tintuc.html'];
  var volunteerTexts = ['tình nguyện viên'];
  var footerVolunteerTexts = ['tình nguyện'];
  var breadcrumbVolunteerTexts = ['tình nguyện viên'];

  document.addEventListener('DOMContentLoaded', function(){
    var links = document.querySelectorAll('a');
    links.forEach(function(a){
      var text = norm(a.textContent);
      if (volunteerTexts.indexOf(text) !== -1 || breadcrumbVolunteerTexts.indexOf(text) !== -1 || footerVolunteerTexts.indexOf(text) !== -1) {
        a.setAttribute('href', volunteerTargets[0]);
      }
    });
  });
})();

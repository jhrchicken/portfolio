document.addEventListener('DOMContentLoaded', function() {
  includeHTML('zipmin', '/portfolio/zipmin.html');
  includeHTML('doctorview', '/portfolio/doctorview.html');
});

async function includeHTML(selector, file) {
  const element = document.getElementById(selector);
  const response = await fetch(file);
  element.innerHTML = await response.text();
}





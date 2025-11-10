document.addEventListener('DOMContentLoaded', function() {
  includeHTML('zipmin', '../zipmin.html');
  includeHTML('doctorview', '../doctorview.html');
});

async function includeHTML(selector, file) {
  const element = document.getElementById(selector);
  const response = await fetch(file);
  element.innerHTML = await response.text();
}





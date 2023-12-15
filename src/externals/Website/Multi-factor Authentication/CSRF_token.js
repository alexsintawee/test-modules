function getCsrfToken() {
    var csrfToken = document.querySelector('meta[name="csrf-token"]');
    return csrfToken ? csrfToken.getAttribute('content') : null;
  }
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/submit-form');
  xhr.setRequestHeader('X-CSRF-Token', getCsrfToken());
  xhr.send(data);
  
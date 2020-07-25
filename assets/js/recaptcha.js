   grecaptcha.ready(function() {
       grecaptcha.execute('6LexG7YZAAAAAFh-J3uSH5R1XCwrjn-mmDD6rZQr', {action: 'homepage'})
       .then(function(token) {
         document.getElementById('captchaResponse').value = token;
       });
     });

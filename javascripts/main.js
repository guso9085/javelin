$(document).ready(function() {
  particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
  });
  $('.button').click(function(e) {
    e.preventDefault();
    $('.button').html("<img src='loading.gif'/>");
    $.get('http://talk-to-obama.herokuapp.com/chat?size=tweet')
      .then(function(d){
        $('.button').html("<h1 id='buttonT'> SAUCE ME </h1>");
        $('.talk').text('"' + d.content + '"');
      })
  });
});

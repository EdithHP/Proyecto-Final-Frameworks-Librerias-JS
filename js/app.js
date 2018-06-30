function colorTitulo(selector) {
  $(selector).delay(1000).animate({
    opacity: '1'
  },
  {
    step: function() {
      $(this).css('color', 'white');
    },
    queue: true
  }
  )
  .delay(1000)
  .animate({
    opacity: '1'
  },
  {
    step: function() {
      $(this).css('color', 'yellow')
      colorTitulo('h1.main-titulo');
    },
    queue: true
  }
  );
}

$(function(){
  colorTitulo('.main-titulo')
})

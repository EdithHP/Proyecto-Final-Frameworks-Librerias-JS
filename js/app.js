// Requierimiemto 1 cambiar 2 colores
function colorTitulo(selector) {
  $(selector).delay(1000).animate({
      opacity: '1'
    }, {
      step: function() {
        $(this).css('color', 'white');
      },
      queue: true
    })
    .delay(1000)
    .animate({
      opacity: '1'
    }, {
      step: function() {
        $(this).css('color', 'yellow')
        colorTitulo('h1.main-titulo');
      },
      queue: true
    });
}

$(function() {
  colorTitulo('.main-titulo')
})

// Requerimiento 2 generar los dulces aleatoriamente
function aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generarDulces(tipo, index) {
  var dulceCol1 = $('.col-1').children();
  var dulceCol2 = $('.col-2').children();
  var dulceCol3 = $('.col-3').children();
  var dulceCol4 = $('.col-4').children();
  var dulceCol5 = $('.col-5').children();
  var dulceCol6 = $('.col-6').children();
  var dulceCol7 = $('.col-7').children();

  var columnas = $([dulceCol1, dulceCol2, dulceCol3, dulceCol4, dulceCol5, dulceCol6, dulceCol7]);

  if (typeof index === 'number') {
    var filas = $([dulceCol1.eq(index), dulceCol2.eq(index), dulceCol3.eq(index), dulceCol4.eq(index), dulceCol5.eq(index), dulceCol6.eq(index), dulceCol7.eq(index)]);
  } else {
    index = '';
  }

  if (tipo === 'columns') {
    return columnas;
  } else if (tipo === 'rows' && index !== ''){
    return filas;
  }
}

function filaDulce(index){
  var filas = generarDulces('rows', index);
  return filas;
}

function columnas(index){
  var colDulce = generarDulces('colunms');
  return colDulce[index];
}

function llenarPanel(){
  var top = 6;
  var column = $('[class^="col-"]');

  column.each(function(){
    var dulces = $(this).children().length;
    var agrega = top - dulces;
    for (var i = 0; i < agrega; i++) {
      var tipoDulce = aleatorio(1, 5);
      if (i === 0 && dulces < 1) {
        $(this).append('<img src="image/'+tipoDulce+'.png" class="element"></img>' );
      } else {
        $(this).find('img:eq(0)').before('<img src="image/'+tipoDulce+'.png" class="element"></img>');
      }
    }
  });
}

$('.btn-reinicio').click(function(){
  llenarPanel();
  $(this).text('Reiniciar');
})

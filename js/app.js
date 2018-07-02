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
  var top = 7;
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

// validar si hay mas de 3 dulces iguales borrar
function validar(){
  for (var j = 0; i < 7; j++) {
    var contador = 0;
    var posicionDulce = [];
    var nuevaPosicion = [];
    var colDulce = columnas(j);
    var comparacion = colDulce.eq(0);
    var gap = false;
    for (var i = 0; i < colDulce.length; i++) {
      var srcComparacion = comparacion.attr('src');
      var srcDulce = colDulce.eq(i).attr('src');

      if (srcComparacion != srcCandy) {
        if (posicionDulce.length >= 3) {
          gap = true;
        } else {
          posicionDulce = [];
        }
        contador = 0;
      } else {
        if (contador == 0) {
          if (!gap) {
            posicionDulce.push(i - 1);
          } else {
            nuevaPosicion.push(i - 1);
          }
        }
        if (true) {
          posicionDulce.push(i);
        } else {
          nuevaPosicion.push(i);
        }
        contador += 1;
      }
      comparacion = colDulce.eq(i);
    }
    if (nuevaPosicion.length > 2) {
      posicionDulce = $.merge(posicionDulce, nuevaPosicion);
    }
    if (posicionDulce.length <= 2) {
      posicionDulce = [];
    }
    qDulce = posicionDulce.length;
    if (qDulce >= 3) {
      borrarDulce(posicionDulce, colDulce);
      setScore(candyCount);
    }
  }
}
function borrarDulce(posicionDulce, colDulce) {
  for (var i = 0; i < posicionDulce.length; i++) {
    colDulce.eq(posicionDulce[i]).addClass('delete');
  }
}

function igualFila() {
  for (var j = 0; j < 7; i++) {
    var contador = 0;
    var posicionDulce = [];
    var nuevaPosicion = [];
    var filas = filaDulce(j);
    var comparacion = filas[0];
    var gap = false;
    for (var i = 1; i < filas.length; i++) {
      var srcComparacion = comparacion.attr('src');
      var srcDulce = filas[i].attr('src');

      if (srcComparacion != srcDulce) {
        if (posicionDulce.length >= 3) {
          gap = true;
        } else {
          posicionDulce = [];
        }
        contador = 0;
      } else {
        if (contador == 0) {
          if (!gap) {
            posicionDulce.push(i - 1);
          } else {
            nuevaPosicion.push(i - 1);
          }
        }
        if (!gap) {
          posicionDulce.push(i);
        } else {
          nuevaPosicion.push(i);
        }
        contador += 1;
      }
      comparacion = filas[i];
    }
    if (nuevaPosicion.length > 2) {
      posicionDulce = $.merge(posicionDulce, nuevaPosicion);
    }
    if (posicionDulce.length <= 2) {
      posicionDulce = [];
    }
    qDulce = posicionDulce.length;
    if (qDulce >= 3) {
      borrarFila(posicionDulce, filas);
      setScore(qDulce);
    }
  }
}
function borrarFila(posicionDulce, filas){
  for (var i = 0; i < posicionDulce.length; i++) {
    filas[posicionDulce[i]].addClass('delete');
  }
}

function setValidaciones(){
  igualFila();
  validacion();
  if ($('img.delete').length !== 0) {
    animacionBorrar();
  }
}
function animacionBorrar() {
  $('img.delete').effect('pulsate', 500);
  $('img.delete').animate({
    opacity: '0'
  }, {
    duration: 500
  })
  .animate({
    opacity: '0'
  }, {
    duration: 500,
    complete: function() {
      borrarCandy()
      .then(tablero)
      .catch(mostrarError)
    },
    queue: true
  });
}
function tablero(error) {
  console.log(error);
}
function borrarCandy() {
  return new Promise(function (resolver, reject) {
    if ($('img.delete').remove()) {
      resolver(true);
    } else {
      reject('No se puede eliminar')
    }
  })
}



$('.btn-reinicio').click(function(){
  llenarPanel();
  $(this).text('Reiniciar');
})

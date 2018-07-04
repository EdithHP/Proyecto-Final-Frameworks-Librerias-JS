// Requerimiento 1 cambiar 2 colores
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

//Requerimiento 2 crear los dulces a azar//
function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Dulces en columnas
function giveCandyArrays(arrayType, index) {
  var candyCol1 = $('.col-1').children();
  var candyCol2 = $('.col-2').children();
  var candyCol3 = $('.col-3').children();
  var candyCol4 = $('.col-4').children();
  var candyCol5 = $('.col-5').children();
  var candyCol6 = $('.col-6').children();
  var candyCol7 = $('.col-7').children();
  var candyColumns = $([candyCol1, candyCol2, candyCol3, candyCol4, candyCol5, candyCol6, candyCol7]);
  if (typeof index === 'number') {
    var candyRow = $([candyCol1.eq(index), candyCol2.eq(index), candyCol3.eq(index), candyCol4.eq(index), candyCol5.eq(index), candyCol6.eq(index), candyCol7.eq(index)]);
  } else {
    index = '';
  }
  if (arrayType === 'columns') {
    return candyColumns;
  } else if (arrayType === 'rows' && index !== '') {
    return candyRow;
  }
}

function candyRow(index) {
  var candyRow = giveCandyArrays('rows', index);
  return candyRow;
}

function candyColumns(index) {
  var candyColumn = giveCandyArrays('columns');
  return candyColumn[index];
}

function llenarTablero() {
  var top = 7;
  var column = $('[class^="col-"]');
  column.each(function() {
    var candys = $(this).children().length;
    var agrega = top - candys;
    for (var i = 0; i < agrega; i++) {
      var candyType = getRandomInt(1, 5);
      if (i == 0 && candys < 1) {
        $(this).append('<img src="image/'+candyType+'.png" class="element" style="position: relative;"></img>');
      } else {
        $(this).find('img:eq(0)').before('<img src="image/'+candyType+'.png" class="element" style="position: relative;"></img>')
      }
    }
  });
  addCandyEvents();
  setValidations();
}

function setValidations() {
  columnValidation();
  rowValidation();
  if ($('img.delete').length != 0) {
    deletesCandyAnimation();
  }
}

// Requerimiento 3 validar 3 dulces en línea y borrar

function deletesCandy() {
  return new Promise(function(resolve, reject) {
    if ($('img.delete').remove()) {
      resolve(true);
    } else {
      reject('El dulce no se puede borrar...');
    }
  })
}

function deletesCandyAnimation() {
  disableCandyEvents();
  $('img.delete').effect('pulsate', 500);
  $('img.delete').animate({
    opacity: '0'
  }, {
    duration: 500
  })
  .animate({
    opacity:'0'
  }, {
    duration: 500,
    complete: function() {
      deletesCandy()
        .then(llenarTableroPromise)
        .catch(showPromiseError)
    },
    queue: true
  })
}

function showPromiseError(error) {
  console.log(error);
}
// Requerimiento 4 temporizador, finalizar toda la pantalla

function finJuego() {
  $('div.panel-tablero, div.time').effect('fold');
  $('h1.main-titulo').addClass('title-over')
  .text('Gracias por Jugar!');
  $('div.score, div.moves, div.panel-score').width('100%');
}

// Requerimiento 5 Contador movimientos
function updateMoves() {
  var actualValue = Number($('#movimientos-text').text());
  var result = actualValue += 1;
  $('#movimientos-text').text(result);
}

// Requerimiento 6 cambiar a Reiniciar
// Requerimiento 7 drag and drop
function addCandyEvents(){
  $('img').draggable({
    containment: '.panel-tablero',
    droppable: 'img',
    revert: true,
    revertDuration: 500,
    grid: [100,100],
    zIndex: 10,
    drag: constrainCandyMovement
  });
  $('img').droppable({
    drop: swapCandy
  });
  enableCandyEvents();
}

function disableCandyEvents() {
  $('img').draggable('disable');
  $('img').droppable('disable');
}

function enableCandyEvents() {
  $('img').draggable('enable');
  $('img').droppable('enable');
}

function constrainCandyMovement(event, candyDrag) {
  candyDrag.position.top = Math.min(100, candyDrag.position.top);
  candyDrag.position.bottom = Math.min(100, candyDrag.position.bottom);
  candyDrag.position.left = Math.min(100, candyDrag.position.left);
  candyDrag.position.right = MAth.min(100, candyDrag.position.right);
}

function swapCandy(event, candyDrag) {
  var candyDrag = $(candyDrag.draggable);
  var dragSrc = candyDrag.attr('src');
  var candyDrop = $(this);
  var dropSrc = candyDrop.att('src');
  candyDrag.attr('src', dropSrc);
  candyDrop.attr('src', dragSrc);

  setTimeout(function() {
    llenarTablero();
    if ($('img.delete').length == 0) {
      candyDrag.attr('src', dropSrc);
      candyDrop.attr('src', dragSrc);
    } else {
      updateMoves();
    }
  }, 500);
}

// boton
$('.btn-reinicio').click(function() {
  if ($(this).text() == 'Reiniciar') {
    location.reload(true);
  }
  llenarTablero();
  $(this).text('Reiniciar');
  $('#timer').startTimer({
    onComplete: finJuego
  })
});

function comprobarSubconjunto() {
    // Obtener los conjuntos ingresados por el usuario
    var conjuntoA = document.getElementById('conjuntoA').value.split(',');
    var conjuntoB = document.getElementById('conjuntoB').value.split(',');
    // Verificar si A es un subconjunto de B
    var esSubconjunto = esSubconjuntoDe(conjuntoA, conjuntoB);
    // Mostrar el resultado
    mostrarResultado(esSubconjunto);
  }
  function comprobarSubconjuntoInverso() {
    // Obtener los conjuntos ingresados por el usuario
    var conjuntoA = document.getElementById('conjuntoA').value.split(',');
    var conjuntoB = document.getElementById('conjuntoB').value.split(',');
    // Verificar si B es un subconjunto de A
    var esSubconjuntoInverso = esSubconjuntoDe(conjuntoB, conjuntoA);
    // Mostrar el resultado
    mostrarResultadoInverso(esSubconjuntoInverso);
}
function mostrarResultadoInverso(esSubconjuntoInverso) {
    var resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = esSubconjuntoInverso
      ? 'B es un subconjunto de A'
      : 'B no es un subconjunto de A';
      if (esSubconjuntoInverso) {
        var cardinalidadA = document.getElementById('conjuntoA').value.split(',').length;
        var cardinalidadB = document.getElementById('conjuntoB').value.split(',').length;
        resultadoContainer.innerHTML += '<br>Cardinalidad de A: ' + cardinalidadA;
        resultadoContainer.innerHTML += '<br>Cardinalidad de B: ' + cardinalidadB;
    }
}

function mostrarResultado(esSubconjunto) {
  var resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = esSubconjunto
    ? 'A es un subconjunto de B'
    : 'A no es un subconjunto de B';
    if (esSubconjunto) {
      var cardinalidadA = document.getElementById('conjuntoA').value.split(',').length;
      var cardinalidadB = document.getElementById('conjuntoB').value.split(',').length;

      resultadoContainer.innerHTML += '<br>Cardinalidad de A: ' + cardinalidadA;
      resultadoContainer.innerHTML += '<br>Cardinalidad de B: ' + cardinalidadB;
  }
}
  function esSubconjuntoDe(conjuntoA, conjuntoB) {
    return conjuntoA.every(elemento => conjuntoB.includes(elemento));
  }


function calcularConjuntoPotencia() {
  // Obtener el conjunto ingresado por el usuario
  var conjuntoC = document.getElementById('conjuntoC').value.split(',');
  // Calcular el conjunto potencia
  var potencia = calcularPotenciaDeConjunto(conjuntoC);
  // Mostrar el resultado
  mostrarResultadoPotencia(potencia);
}
function calcularPotenciaDeConjunto(conjunto) {
  var potencia = [[]];
  for (var i = 0; i < conjunto.length; i++) {
      var currentElement = conjunto[i];
      var tempSubset = {};
      for (var j = 0; j < potencia.length; j++) {
          var subset = potencia[j].slice();
          subset.push(currentElement);
          tempSubset.push(subset);
      }
      potencia = potencia.concat(tempSubset);
  }
  return potencia;
}
function mostrarResultadoPotencia(potencia) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = potencia.length;
  resultadoContainer.innerHTML = '<strong>Conjunto Potencia:</strong><br>' +
      'Elementos: ' + JSON.stringify(potencia) + '<br>' +
      'Cardinalidad: ' + cardinalidad;
}



function calcularUnion() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoX = document.getElementById('conjuntoX').value.split(',');
  var conjuntoY = document.getElementById('conjuntoY').value.split(',');
  // Calcular la Unión de conjuntos
  var union = calcularUnionDeConjuntos(conjuntoX, conjuntoY);
  // Mostrar el resultado
  mostrarResultadoUnion(union);
}
function calcularUnionDeConjuntos(conjuntoX, conjuntoY) {
  var union = Array.from(new Set([...conjuntoX, ...conjuntoY]));
  return union;
}
function mostrarResultadoUnion(union) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = union.length;

  resultadoContainer.innerHTML = '<strong>Unión de Conjuntos:</strong><br>' +
      'Elementos: ' + JSON.stringify(union) + '<br>' +
      'Cardinalidad: ' + cardinalidad;
}


function calcularInterseccion() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoM = document.getElementById('conjuntoM').value.split(',');
  var conjuntoN = document.getElementById('conjuntoN').value.split(',');
  // Calcular la Intersección de conjuntos
  var interseccion = calcularInterseccionDeConjuntos(conjuntoM, conjuntoN);
  // Mostrar el resultado
  mostrarResultadoInterseccion(interseccion);
}
function calcularInterseccionDeConjuntos(conjuntoM, conjuntoN) {
  var interseccion = conjuntoM.filter(elemento => conjuntoN.includes(elemento));
  return interseccion;
}
function mostrarResultadoInterseccion(interseccion) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = interseccion.length;
  resultadoContainer.innerHTML = '<strong>Intersección de Conjuntos:</strong><br>' +
      'Elementos: ' + JSON.stringify(interseccion) + '<br>' +
      'Cardinalidad: ' + cardinalidad;
}


function calcularDiferencia() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoP = document.getElementById('conjuntoP').value.split(',');
  var conjuntoQ = document.getElementById('conjuntoQ').value.split(',');

  // Calcular la Diferencia de conjuntos
  var diferencia = calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ);

  // Mostrar el resultado
  mostrarResultadoDiferencia(diferencia);
}
function calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ) {
  var diferencia = conjuntoP.filter(elemento => !conjuntoQ.includes(elemento));
  return diferencia;
}
function mostrarResultadoDiferencia(diferencia) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = diferencia.length;
  resultadoContainer.innerHTML = '<strong>Diferencia de Conjuntos:</strong><br>' +
      'Elementos: ' + JSON.stringify(diferencia) + '<br>' +
      'Cardinalidad: ' + cardinalidad;
}

// Función para calcular el producto cruz entre dos subconjuntos
function calcularProductoCruz() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoA = document.getElementById('conjuntoA').value.split(',');
  var conjuntoB = document.getElementById('conjuntoB').value.split(',');

  // Calcular el producto cruz
  var productoCruz = calcularProductoCruzDeSubconjuntos(conjuntoA, conjuntoB);

  // Mostrar el resultado y la explicación
  mostrarResultadoProductoCruz(productoCruz);
}

function calcularProductoCruzDeSubconjuntos(conjuntoA, conjuntoB) {
  var productoCruz = [];
  for (var i = 0; i < conjuntoA.length; i++) {
      for (var j = 0; j < conjuntoB.length; j++) {
          productoCruz.push([conjuntoA[i], conjuntoB[j]]);
      }
  }
  return productoCruz;
}

function mostrarResultadoProductoCruz(productoCruz) {
  var resultadoContainer = document.getElementById('resultado');
  var explicacionContainer = document.getElementById('explicacion');
  var cardinalidad = productoCruz.length;

  resultadoContainer.innerHTML = '<strong>Producto Cruz de Subconjuntos:</strong><br>' +
      'Elementos: ' + JSON.stringify(productoCruz) + '<br>' +
      'Cardinalidad: ' + cardinalidad;

  explicacionContainer.innerHTML = 'El producto cruz entre dos conjuntos A y B es el conjunto de todos los pares ordenados donde el primer elemento pertenece a A y el segundo a B.';
}

// Función para calcular combinaciones
function calcularCombinaciones() {
  var totalElementos = parseInt(document.getElementById('totalElementos').value);
  var tamanoCombinaciones = parseInt(document.getElementById('tamanoCombinaciones').value);

  var combinaciones = calcularCombinacionesDe(totalElementos, tamanoCombinaciones);

  mostrarResultadoCombinaciones(combinaciones);
}

function calcularCombinacionesDe(n, r) {
  function factorial(num) {
      if (num <= 1) return 1;
      return num * factorial(num - 1);
  }

  return factorial(n) / (factorial(r) * factorial(n - r));
}

function mostrarResultadoCombinaciones(combinaciones) {
  var resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = 'Número de Combinaciones: ' + combinaciones;

  var explicacionContainer = document.getElementById('explicacion');
  explicacionContainer.innerHTML = 'Las combinaciones de n elementos tomados de r en r son subconjuntos de tamaño r de un conjunto de n elementos. El número de combinaciones se calcula utilizando la fórmula C(n, r) = n! / (r! * (n - r)!).';
}

// Función para calcular permutaciones
function calcularPermutaciones() {
  var totalElementos = parseInt(document.getElementById('totalElementos').value);

  var permutaciones = calcularPermutacionesDe(totalElementos);

  mostrarResultadoPermutaciones(permutaciones);
}

function calcularPermutacionesDe(n) {
  function factorial(num) {
      if (num <= 1) return 1;
      return num * factorial(num - 1);
  }

  return factorial(n);
}

function mostrarResultadoPermutaciones(permutaciones) {
  var resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = 'Número de Permutaciones: ' + permutaciones;

  var explicacionContainer = document.getElementById('explicacion');
  explicacionContainer.innerHTML = 'Las permutaciones de n elementos son todas las posibles ordenaciones de esos elementos. El número de permutaciones se calcula utilizando la fórmula P(n) = n!.';
}

// Función para componer relaciones
function componerRelaciones() {
  var relacionR = JSON.parse("[" + document.getElementById('relacionR').value + "]");
  var relacionS = JSON.parse("[" + document.getElementById('relacionS').value + "]");

  var composicion = componerRelacionesDe(relacionR, relacionS);

  mostrarResultadoComposicion(composicion);
}

function componerRelacionesDe(relacionR, relacionS) {
  var composicion = [];

  for (var i = 0; i < relacionR.length; i++) {
      for (var j = 0; j < relacionS.length; j++) {
          if (relacionR[i][1] === relacionS[j][0]) {
              composicion.push([relacionR[i][0], relacionS[j][1]]);
          }
      }
  }

  return composicion;
}

function mostrarResultadoComposicion(composicion) {
  var resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = 'Composición de Relaciones: ' + JSON.stringify(composicion);

  var explicacionContainer = document.getElementById('explicacion');
  explicacionContainer.innerHTML = 'La composición de relaciones es el conjunto de pares ordenados (a,c) donde a está relacionado con c a través de un elemento intermedio b es decir (a,b).(b,c)=(a,c) .';
}

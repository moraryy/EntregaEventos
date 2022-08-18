// MSJ BIENVENIDA CON ARRAY

function WelcomeArray(time, content, indice_content) {
  this.time = time;
  this.content = content;
  this.indice_content = indice_content;
}

const greet = [
  "Hello welcome to your virtual to-do list v 1.0".fontcolor("black"),
  "Here you can save and plan your schedule".fontcolor("black"),
];

let greet1 = new WelcomeArray(3000, greet, 0);

function change_content() {
  if (greet1.indice_content >= greet1.content.length) greet1.indice_content = 0;
  document.getElementById("contenedorjs").innerHTML =
    greet1.content[greet1.indice_content];
  greet1.indice_content++;
  setTimeout("change_content()", greet1.time);
}

document.write('<div id="contenedorjs"></div>');

window.onload = change_content();

let contenedor = document.getElementById("lista");

// MSJ AGREGAR TAREAS AL HTML

// Objeto tareas con selectores
const tareas = {
  tareaInput: document.getElementById("tareaInput"),
  btnnewTask: document.getElementById("btn-agregar"),
  // AGREGUÉ EL BOTON PARA QUITAR
  btnQuitarTarea: document.getElementById("btn-quitar"),
  // AGREGUÉ EL BOTON PARA ELIMINAR EL HISTORIAL DE TAREAS
  btnEliminarHistorial: document.getElementById("btn-borrar-historial"),
};

// Funciones

const writeLocal = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const readLocal = (key) => JSON.parse(localStorage.getItem(key)) || false;

var taskList = readLocal("tareas") || [];

var CheckInput = function () {
  tareaInput.className = "";
  tareaInput.setAttribute("placeholder", "Add Task");
};

// AGREGAR TAREA TANTO EN ARRAY COMO EN LOCAL STORAGE
var AddTask = function () {
  var tarea = tareas.tareaInput.value;

  if (tarea === "") {
    tareas.tareaInput.setAttribute("placeholder", "Add a valid task");
    tareas.tareaInput.className = "error";
    return false;
  } else {
      }

  // PUSH 		//LOCAL STORAGE

  taskList.push({
    name: tarea,
  });

  writeLocal("tareas", taskList);

  $("#lista").innerHTML = "";
};

// QUITAR TAREA TANTO DEL ARRAY COMO DEL LOCAL STORAGE

var RemoveTask = function () {
  var tarea = tareas.tareaInput.value;

  if (tarea === "") {
    tareas.tareaInput.setAttribute("placeholder", "Add a valid task");
    tareas.tareaInput.className = "error";
    return false;
  }

  // FUNCION LOCAL PARA OBNTENER EL INDICE DE LA TAREA A ELIMINAR
  function getIndex(taskName) {
    var Indice = -1;
    taskList.filter(function (product, i) {
      if (product.name === taskName) {
        Indice = i;
      } else if (!product.name === taskName) {
      }
    });
    return Indice;
  }

  listadoTareas = taskList.splice(getIndex(tarea), 1);

  writeLocal("tareas", taskList);

  // SOBRE-ESCRIBIMOS EL ARRAY SIN EL ELEMENTO ELIMINADO
  return listadoTareas;
};

// Agregar Tarea
tareas.btnnewTask.addEventListener("click", AddTask);

// Quitar Tarea
tareas.btnQuitarTarea.addEventListener("click", RemoveTask);

// Comprobar Input
tareas.tareaInput.addEventListener("click", CheckInput);

// Limpiar el Array y el Local Storage
tareas.btnEliminarHistorial.addEventListener("click", function () {
  localStorage.clear();
  taskList.splice(0, taskList.length);

  console.log(taskList);
});

// CLASE Tareas
class Tareas {
  constructor(name, cantidad) {
    this.name = name;
    this.cantidad = cantidad;
  }
}

function crossOut() {
    return decision;
  }


// MOSTRADO DE TAREAS DESDE LOCAL STORAGE
$("#btn-ver-tareas").click(function () {

  taskList.forEach((item) => {
    let newTask = document.createElement("li");
    let link = document.createElement("a");
    let content = document.createTextNode(item.name);

    // Agrega content al link
    link.appendChild(content);
    // Establece atributo href
    link.setAttribute("href", "#");
    // Agrega el link (a) a la nueva tarea (li)
    newTask.appendChild(link);
    // Agrega la nueva tarea a la lista
    contenedor.appendChild(newTask);
  });
});


$(document).ready(function () {

  $("#btn-update").click(function () {

    $("#lista").fadeOut(2000, "linear", function () {

      location.reload();

    })
  })
});



$(document).ready(function () {

  $("#btn-quitar").click(function () {

    $("#lista").fadeOut(2000, "linear", function () {

      location.reload();

    })
  })
});





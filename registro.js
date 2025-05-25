import { productos } from "./variables.js";



// Este evento, DOMContentLoaded, garantiza que el código dentro de la función se ejecutará solo después de que la estructura HTML esté lista para ser manipulada
//Aqui cargo el array apenas carga la pagina al local storage
// Validamos que si ya existe el array en el local storage no lo suba de nuevo al cargar la pagina 
window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify(productos));
  }
});




let img = document.getElementById("img1");
//Aqui mostramos solo las 50 imagenes que tenemos en nustro 
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i].imagen);
  // el insertAdJacentHTML se usa para añadir texto al dom sin modificar nada,
  // ya que el valor que se pone es tipo value y no tipo string por eso debemos usar el insertAdjacentHTML
  //el primer parametre es el lugar y el 2 ya es lo que se quiere agregar
  img.insertAdjacentHTML("beforeend",
    `<option value="${productos[i].imagen}">Imagen ${i + 1}</option>`
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#form");

  formulario.addEventListener("submit", (e) => {//e son eventos y evita que al enviar el formulario se recargue la pagina
    e.preventDefault(); // Evita que el formulario se envíe por defecto


    const nombre = document.getElementById("nombre").value.trim();
    const categoria = document.getElementById("categoria").value;
    const imagen = document.getElementById("img1").value;
    const codigo = document.getElementById("codigo").value.trim();//solo se aplica el trim a los campos que escribe el usuario ya que se le puede ir algun espacio
    const precio = document.getElementById("precio").value;
    const cliente = document.getElementById("atributo1").value;
    const punto_venta = document.getElementById("atributo2").value;
    const cantidad = document.getElementById("atributo3").value.trim();//trim me elimina los campos vacios en el string

    // VALIDACIONES
    if (!nombre) {
      alert("El nombre no puede estar vacío.");
      return;
    }

    //regexMayusMinus verifica que haya combinacion de minusculas y mayusculas
    //!regexDosNumeros verifica que hayan almenos 2 numeros en el string
    if (!codigo || codigo.length < 8 || !regexMayusMinus.test(codigo) || !regexDosNumeros.test(codigo)) {
      alert("El código debe tener al menos 8 caracteres, una mayúscula, una minúscula y mínimo 2 números.");
      return;
    }

    if (isNaN(precio) || precio <= 0) {
      alert("El precio debe ser un número mayor que 0.");
      return;
    }
    // el isNaN nos valida que lo ingresado si sea un numero y no letras
    if (!cantidad || isNaN(parseInt(cantidad))) {
      alert("La cantidad debe ser un número válido.");
      return;
    }

    // Si pasa todo, creamos el objeto
    const productoNuevo = {
      nombre,
      categoria,
      imagen,
      codigo,
      precio,
      cliente,
      punto_venta,
      cantidad
    };


    let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    productosGuardados.push(productoNuevo);
    localStorage.setItem("productos", JSON.stringify(productosGuardados));
    formulario.reset();
    alert("Producto registrado correctamente.");
    window.location.href = "/pagina3/pagina3.html";
  });
});


















// const formulario = document.getElementById("myForm");

// formulario.addEventListener("submit", (evitarReset) => {
//   evitarReset.preventDefault(); //evita reseteo de campos al presionar el boton de registrar

//   const nombre = document.getElementById("nombre").value; //ese "nombre" es el ID del input
//   console.log(nombre);

//   const serial = document.getElementById("serial").value;
//   console.log(serial);

//   const modelo = document.getElementById("modelo").value;
//   console.log(modelo);

//   const categoria = document.getElementById("categoria").value;
//   console.log(categoria);

//   const imagen = "../img/IMAGENES DATA/Dell Latitude 7430.jpg";
//   console.log(imagen);

//   const codigo = document.getElementById("codigo").value;
//   console.log(codigo);

//   const precio = document.getElementById("precio").value;
//   console.log(precio);

//   const garantia = document.getElementById("garantia").value;
//   console.log(garantia);

//   const producto = {
//     nombre: nombre,
//     serial: serial,
//     modelo: modelo,
//     categoria: categoria,
//     imagen: imagen,
//     codigo: codigo,
//     precio: precio,
//     garantia: garantia
// };
//     saveInLocalStorage(producto);
//     // alert("Producto registrado exitosamente ✅");
//   }
// );
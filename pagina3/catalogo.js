import { productos } from "../variables.js";

// parse devuelve el json como objeto y no como string
// || [] lo que hace es validar si no hay nada entonces devolveria el json null y no se podria realizar nada con eso 
const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
//paginacion
let paginaActual = 1;
let productosPorPagina = 15;
let contenedorcard = document.getElementById("c1");
let btnAnterior =document.getElementById("btnS")
let btnSiguiente =document.getElementById("btnA")

function formatarPesoColombiano(valor) {
  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });
  return formatter.format(valor);
}

const mostrarPagina = (pagina) => {
  
  //calculo el indice del primer producto que quiero mostrar
  //(0 al 15)
  let inicio = (pagina - 1) * productosPorPagina;
  let fin = pagina * productosPorPagina;

  for(let i = inicio; i < fin && i < productosGuardados.length; i++){


    contenedorcard.innerHTML += 
    ` 
    <div class="card">
     <div class="image"><img src="${productosGuardados[i].imagen}" alt=""></div>
        <div class="content">
      <p class="desc">
      <strong>Nombre: </strong> ${productosGuardados[i].nombre} <br>
      <strong>Categoria: </strong> ${productosGuardados[i].categoria} <br>
      <strong>Codigo: </strong> ${productosGuardados[i].codigo} <br>
      <strong>Precio: </strong> ${formatarPesoColombiano(productosGuardados[i].precio)} <br>
      <strong>Cliente: </strong> ${productosGuardados[i].cliente} <br>
      
      </p>

    
    </div>
    </div>
    `;
  
  }
}

mostrarPagina(paginaActual);

btnAnterior.addEventListener ('click',()=>{
  if(paginaActual < (productosGuardados.length / productosPorPagina)){
    paginaActual++;    
    const columna1 = document.getElementById("c1");
    columna1.innerHTML = "";
    mostrarPagina(paginaActual);
  }
})

btnSiguiente.addEventListener('click',()=>{
  if(paginaActual>1){
    paginaActual--;
    const columna1 = document.getElementById("c1");
    columna1.innerHTML = "";
    mostrarPagina(paginaActual);
  }
})



















// for(let i=0;i<=productos.length;i++){
//     contenedorcard.innerHTML += 
//     ` 
//     <div class="card">
//      <div class="image"><img src="${productos[i].imagen}" alt=""></div>
//         <div class="content">
//       <p class="desc">
//       <strong>Nombre: </strong> ${productos[i].nombre} <br>
//       <strong>Categoria: </strong> ${productos[i].categoria} <br>
//       <strong>Codigo: </strong> ${productos[i].codigo} <br>
//       <strong>Precio: </strong> ${productos[i].precio} <br>
//       <strong>Cliente: </strong> ${productos[i].cliente} <br>
      
//       </p>

    
//     </div>
//     </div>
//     `;
// }
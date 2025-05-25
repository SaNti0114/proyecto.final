

for (let i = 0; i < productosMostrar.length; i++) {


    const producto = productosMostrar[i];
    // let tipoDeBusqueda;

    // if(productosEncontrados === 1){
    //   tipoDeBusqueda = producto.nombre.toLowerCase().includes(valorEntrada);      
    // } else if (){

    // }

    if (producto.nombre.toLowerCase().includes(valorEntrada)) {

        productosEncontrados++;
        //creo la card
        const card = document.createElement("div");
        card.classList.add("card");

        //creo el contenedor para el imga
        const cardImage = document.createElement("div");
        cardImage.classList.add("card-image");

        const img = document.createElement("img");
        img.src = producto.imagen;
        //Agrego la imagen registrada a la variable img ()
        cardImage.appendChild(img);

        //creo el titulo de la card
        const title = document.createElement("p");
        title.classList.add("card-title");
        title.textContent = producto.nombre;

        const body = document.createElement("p");
        body.classList.add("card-body");
        body.innerHTML =
            //esto es un template literals
            `<strong>Serial: </strong> ${producto.serial} <br>
            <strong>Modelo: </strong> ${producto.modelo} <br>
            <strong>Categoría: </strong> ${producto.categoria} <br>
            <strong>Código: </strong> ${producto.codigo} <br>
            <strong>Garantía: </strong> ${producto.garantia}`;

        const precioCard = document.createElement("p");
        precioCard.classList.add("footer_card");
        precioCard.textContent = convertirApeso(producto.precio, 'COP') + " $";

        //ahora aqui armo la card
        //el appendchild me sirve para agregar un nodo dentro de otro nodo
        card.appendChild(cardImage);
        card.appendChild(title);
        card.appendChild(body);
        card.appendChild(precioCard);

        columna1.appendChild(card);
    }
}
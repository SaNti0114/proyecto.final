SAB FERRETERIA: Proyecto final

#Descripcion del proyecto:

SAB FERRETERIA es una pagina web donde gestionamos productos para una ferretería, en esta puedes registrar productos, ver los productos registrados y buscar productos ( No funciona)y tiene una vista de indicaciones donde muestra como registrar un producto y también habla del quienes somos.

Importante: Este proyecto solo funciona correctamente si se ejecuta con la extensión Live Server en VS Code. Si se abre directamente desde el archivo index.html, es posible que algunas funcionalidades no trabajen como se espera debido a restricciones del navegador con el manejo de archivos locales.

Funcionalidades del proyecto:
-Registro de productos: Aquí es donde podemos registrar nuestro producto para poder verlo en la vista de productos.

Aquí se realizan varias validaciones antes de subir el objeto (En este caso el producto) como son:

-Se valida que todo los campos esten llenos
-El código debe tener mínimo 8 caracteres, 2 números, una mayuscula y una minúscula.
-El precio debe ser superior a 0
-La cantidad también debe ser superior a 0

- Indicaciones: es una vista informática donde se muestra el como se debe registrar un producto y se habla un poco de quienes somo como empresa.


- Vista de productos: Muestra todos los productos registrados en forma de tarjetas y tiene paginación que permite mostrar 15 productos por página.

- Búsqueda de productos: (No funciona)



#Tecnologias usadas

* HTML5: Para la estructura del contenido.

* CSS3: Para los estilos visuales.

* JavaScript (Vanilla): Para la lógica del sitio, interacciones y validaciones.

* localStorage: Para guardar y recuperar los productos registrados desde el navegador.

- Estructura del proyecto

|--- IMG/ 
|	|--(Aquí están todas las imágenes)
|
|
|---pagina2/
|	|---pagina2.html
|	|---style2.css
|
|
|---pagina3/
|	|---catalogo.js
|	|---pagina3.html
|	|---style3.css
|
|
|---pagina4/
|	|---buscarproductos.js
|	|---pagina4.html
|	|---style4.css
|
|
|---búsqueda.js
|---index.html
|---readme.md
|---registro.js
|---style.css
|---variables.js (Aquí esta el array de objetos)



- Instrucciones para Ejecutar el Proyecto

1. Clona este repositorio con el git bash o descárgalo en formato ZIP:

==> git clone https://github.com/SaNti0114/proyecto.final.git

2. Abre la carpeta del proyecto con Visual Studio Code.

3. Instala la extensión Live Server (si aún no la tienes).

4. Haz clic derecho sobre index.html y selecciona "Open with Live Server".

5. Navega entre las páginas para registrar, visualizar, buscar productos y consultar indicaciones.

Nota: No se requieren servidores externos ni librerías adicionales. Todo funciona de forma local en el navegador.

- Persistencia de Datos: Todos los productos que se registran se almacenan en localStorage, lo que permite que la información se conserve incluso si se cierra el navegador.

- Línea de Negocio: Este proyecto está orientado al área de ferreteria y materiales de construcción o para el hogar, facilitando la gestión de productos como:

1. Herramientas

2. Tubos PVC

3. Electricos

4. Pinturas


Autor:
Santiago Arias
Estudiante de Ingeniería de Sistemas - Cuarto semestre
SAB FERRETERIA=> Venta al por mayor y al detal de materiales de construcción o artículos para el hogar.

Licencia
Este proyecto es de uso libre con fines académicos.
## 🧑‍💻 Desafío Bsale - Tienda

- El desafío consta del desarrollo de una tienda que muestre productos obtenidos desde una base de datos experimental dispuesta por Bsale y que el desarrollador debe implementar de tal forma que pueda servir los recursos de esa base de datos dividiendo el proyecto en dos grandes partes: Front-end y Back-end.

#### Para instalar y ejecutar:

1. Ejecutar en la carpeta raiz el comando: `npm install`
2. Modificar las credenciales para conectarse a la Base de Datos en el archivo: `src/database/config_db.js`
3. Luego ejecutar el comando de node: `node src/` ó `node/src/index.js`

### 🤖 Back-end:

##### Tecnologías y lenguajes utilizados, principalmente son:

- **Node.js** (v. 18.x) [Source](https://nodejs.org/en/)
- **Express.js** (v. 4.x) para la generación de un servidor sobre la tecnología de Node.js [Source](https://expressjs.com/)
- **Sequelize (v. 6.x)** cómo ORM para interactuar con la Base de Datos que en este caso es con el gestor MySQL. [Source](https://sequelize.org/)

Con estas tecnologías se logró crear un servidor que independiente de que cliente lo solicite (web, mobile y otros), puede acceder a la lista de productos, lista de productos por categorías, lista de categorías y categorías con la lista de los productos que contiene.

#### 🤔 ¿Cómo funciona?

- El servidor back-end dispone varios Puntos de conexión (End-points) a los cuales una aplicación puede hacer llamadas HTTP usando el verbo GET. Los puntos de conexión de esta "API" son los siguientes:

| Punto de conexión (End Points)                              | Método | Opciones                                                                                                                                                                                                                          | Descripción                                                                                                                                                                                                                                   |
| ----------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `https://bsale.uncodigo.com/product`                        | GET    | Mediante URL puede solicitar la página y el tamaño del resultado, así: `?page=0&size=12` ejemplo: `Página 1 con 12 productos: https://bsale.uncodigo.com/product?page=0&size=12`                                                  | Devuelve una lista de productos en formato JSON paginados por defecto de 6 productos en total.                                                                                                                                                |
| `https://bsale.uncodigo.com/product/search`                 | GET    | Utilizando parámetros de URL puede solicitar buscar un producto por su nombre usando los parámetros de esta forma: `product/search?term=PALABRA` ejemplo: `Buscando "Papas" https://bsale.uncodigo.com/product/search?term=papas` | Muestra una lista de resultados en formato JSON que por defecto si no se incluye el parámetro en la URL devuelva la lista completa de productos. También se puede paginar, para eso siga el ejemplo del anterior punto de acceso (`/product`) |
| `https://bsale.uncodigo.com/category`                       | GET    | Para solicitar solo debe hacer una petición HTTP con el verbo GET.                                                                                                                                                                | Devuelve una lista completa de las categorías en formato JSON.                                                                                                                                                                                |
| `https://bsale.uncodigo.com/category/{idCategory}/products` | GET    | idCategory es el identificador de la categoría que está solicitando. Por ejemplo, `Obtenemos la lista de productos que tiene la categoría con identificador "1": https://bsale.uncodigo.com/category/1/products`                  | Devuelve un documento JSON que incluye información de la categoría solicitada y además un arreglo con todos los productos que esa categoría contiene.                                                                                         |

#### 📝 Otros detalles:

- Se utiliza la "Arquitectura" o "Patrón de diseño": Modelo Vista Controlador para que el código sea fácil de mejorar, mantener y agregar funcionalidades. También se aplican algunos conceptos SOLID como el de responsabilidad única.

#### 👷‍♂️ Observaciones

- Personalmente he aprendido un montón desarrollando este ejercicio, muchas cosas tuve que volver a investigarlas y también aplicarlas para lograr obtener un resultado que en lo personal me deja muy conforme.

[En este otro repositorio de GitHub](https://github.com/felipejoq/front-end-bsale-challenge) podemos encontrar la otra parte del proyecto, la parte "Front-End".

😉 Dev with ❤️

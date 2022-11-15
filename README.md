# Módulo 2: Ejercicio de evaluación final.

Trabajo realizado por la alumna María Elena Arocena López durante la evaluación final del Módulo 2: JS. 

En este repositorio podreis encontrar los ficheros generados en la realización de la **Evaluación final del Módulo 2 - Promo Radia**. 

> **NOTA:** Enlace directo al poyecto pulsando **[aquí](https://beta.adalab.es/modulo-2-evaluacion-final-marocena26/)**
 

## Materiales utilizados: 

Para llevar a cabo el desarrollo de este ejercicio se han empleado los siguientes materiales:
- Creación de un repositorio desde **GitHub Classroom.**
- Una **plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas: el [Adalab - Web starter kit](https://github.com/Adalab/Adalab-web-starter-kit)**.

### Pasos que se han seguido para arrancar el proyecto:

1. **Creación del repositorio desde GitHub Classroom.**
2. Descarga del **[Adalab - Web starter kit](https://github.com/Adalab/Adalab-web-starter-kit)**.
3. **Copia de todos los ficheros** del Starter kit en la carpeta raíz del repositorio.
4. Desde la carpeta raíz de tu repositorio **instalamos las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Pasos para arrancar el proyecto:

**El proyecto hay que arrancarlo cada vez que nos pongamoss a programar**, para ello ejecutaremos el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya podemos empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

## Enunciado del proyecto:

El ejercicio consiste en desarrollar una aplicación web de Breaking Bad, que nos permite des/marcar los personajes como favoritas y guardarlas en local storage.
El ejercicio también tiene una parte de maquetación con HTML y Sass, os recomendamos dedicar esfuerzo a la maquetación una vez terminada la parte de JavaScript, ya que los criterios de evaluación están relacionados con esta última.

## Hitos a seguir durante el ejercicio:
### 1. Estructura básica.
La aplicación de búsqueda de serie constará de dos partes:
1. Un campo de texto y un botón para buscar personajes por su título.
2. Un listado donde aparece la foto del personaje, el nombre del personaje y si está vivo o muerto.

![image](https://user-images.githubusercontent.com/113302094/201793524-dfaf392b-5a9c-4369-844f-dda7c0c28977.png)

### 2. Inicio.
- Al levantar la página debe mostrar todos los resultados de los personajes de la serie, la aplicación debe conectarse a **[The Breaking Bad API](https://breakingbadapi.com/)**. 
- Por cada personaje obtenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos la foto del personaje, el nombre del personaje y si está vivo o muerto.
- Para pintar la información en la página se puede elegir entre hacerlo de forma básica con ```innerHTML``` o manipulando de forma avanzada el **DOM**.

![image](https://user-images.githubusercontent.com/113302094/201793613-925d7a95-c9be-4a9e-8ea6-58ea5f9605ce.png)


### 3. Búsqueda.
La usuaria tiene la opción de buscar personajes por su nombre, al hacer clic sobre el botón de Buscar, la aplicación solo debe mostrar aquellos personajes que coinciden con la búsqueda realizada por la usuaria:
- Puedes hacer un filtro por nombre sobre el listado de personajes obtenido anteriormente.
- Puedes utilizarla siguiente url con el parámetro ```name``` para obtener del API solo los usuarios que coincidan con el nombre especificado por la usuaria: https://breakingbadapi.com/api/characters?name=Walter

![image](https://user-images.githubusercontent.com/113302094/201793683-aca463c7-2c5b-4fad-a092-be67cde3762e.png)


### 4. Favoritos.
La usuaria puede indicar cuáles son sus personajes favoritos. Para ello, al hacer clic sobre un personaje debe pasar lo siguiente:
- Cambiar los estilos de la tarjeta del personaje para indicar que es una personaje favorito.
- Mostrar un listado con los personajes favoritos. Os recomendamos crear un variable o constante de tipo array en JS para almacenar las personajes favoritos.
- Los personajes favoritos deben seguir apareciendo en la página aunque la usuaria realice otra búsqueda.

![image](https://user-images.githubusercontent.com/113302094/201793768-5d4af6f2-5118-453c-81ca-60b3ab9ea770.png)

### 5. Almacenamiento local
Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de favoritos debe mostrarse.

![image](https://user-images.githubusercontent.com/113302094/201793914-3e93d9e1-3da8-4c49-9210-08b5dcac5085.png)


### 6. BONUS: Borrar favoritos
Como bonus, os proponemos la opción de borrar favoritos. Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.

Para terminar de rematar nuestra aplicación de BreakingBad, nos gustaría poder añadir/quitar como favorito al hacer click sobre un personaje. Y que, si realizamos una nueva búsqueda y sale un personaje que ya es favorito, aparezca resaltado en los resultados de búsqueda (con algún estilo de CSS).

Y ya sería fantástico si al final de la lista de favoritos hay un botón para borrar todos los favoritos a la vez.


### 7. BONUS: Afinar la maquetación
Una vez terminada la parte de interacción, podemos centrarnos en la parte de maquetación donde tenéis libertad para decidir los estilo.

## Feedback

Cualquier aportación será bien recibida. 

¡Muchas gracias! 

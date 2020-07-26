# Publicación y Debate de Ideas
PyDI es una herramienta para generar conocimiento colectivo. Nos ayuda a escribir un artículo con fuentes y a publicarlo, tanto para difundirlo, como para mejorarlo a través de devoluciones, fundamentadas y moderadas por el autor.

Las devoluciones son articulos, así que cada idea puede ser origen de infinitos conocimientos, cada conocimiento generado a través de la herramienta tiene un historial de ideas que la componen y uno puede revisar como se fue formando. Esto permite retomar caminos abandonados y llegar nuevas concluciones.

PyDI surge de la necesidad de mejorar el nivel de información disponible en internet, por lo que pone el foco en acelerar el chequeo de la veracidad de los datos y en mejorar el intercambio entre personas.

# Capacidades de la herramienta

## Actuales
* Administrador de articulos
  * Lista articulos
  * Crea articulos con:
    * contenido
    * fecha
    * resumen
    * título
    * fuentes
    * temas
## Futuros
* Crear
  * Vinculo entre articulos a través de fuentes
* Listar
  * por temas
  * por palabras más usadas
  * fuentes

# Organización del proyecto

La finalidad de este proyecto es plantear una arquitectura de front-end, por eso mismo, puede que vean codigo duplicado o capas que estén de más. Las técnicas que generan estos estados temporales en la base de código son:

1) Hacer visible la duplicación de comportamiento copiando y pegando implementaciones hasta que se cumplan los "tres strikes", es decir que se utilice el mismo código en tres lugares distintos. Recién en ese momento se realiza una abstracción.
2) Crear capas temporales para ver como se distribuyen las responsabilidades a partir de estas, escribiendo muchas veces clases anémicas de pocos métodos.

Por otra parte van a ver clases o dependencias de clases que son creadas para implementar técnicas como IDD o que facilitan el testeo y nos dan ventajas al usar TDD. Estas son clases que, de quedar muy chicas, se podrían borrar y pasando las responsabilidades a otras clases para disminuir la burocracia del código.

Por burocracia me refiero a estar obligado a crear determinados archivos, sólo por la arquitectura que llevamos. Al pensar una arquitectura tenemos que pensar el trade-off de nuestras decisiones, el balance entre los pros y los contras de la mismas. Un primer paso es revisar si, para el contexto de lo que estamos resolviendo, cuanta solidez y escalabilidad necesitamos. Tanto la solidez como la escalabilidad suelen estar relacionadas a un aumento de la burocracia, pero nos sirven para saber exactamente dónde agregar qué cosa en proyectos con bases de código muy grandes.

Si estamos desarrollando un MVP no queremos burocracia, necesitamos sacar features como pan caliente, pero esto no implica desorden. Para evitar el caos en una base de código en la cual la calidad, legilibilidad y arquitectura son secundarias, es importante tener en claro las capas de nuestra aplicación, es decir, como repartimos las responsabilidades. Así cuando decidimos no perder tiempo en mejorar crear una variable nueva, o mover archivos a carpetas nuevas o cambios que impactan en como se comunican las distintas partes del código, sabemos a consciencia qué deuda técnica estamos dejando.

Este repositorio apunta a eso, a pensar qué responsabilidades tenemos en una aplicación web medianamente compleja a través de un ejemplo.

## Estructura de carpetas

Previamente establecimos el contexto en el cual identificamos las responsabilidades de lo codificado. Antes de detallar el cómo y el por qué de cada carpeta nos faltaría repasar cúales son las responsabilidades que vemos en una aplicación web, los cuales son los fundamentos para la división de carpetas realizada.

El nivel conceptual más "macro", el zoom más lejano, el continente conceptual del mapa que estamos analizando está dividido en tres:

* **Dominio**: lógica particular de nuestra aplicación, llamada también *de negocios*, por más que no sea de un comercio. Por ejemplo, en wikipedia sería la lógica referida a la creación de una articulo, en twitter la lógica referida a quien puede leer o no un tweet.
* **Aplicación**: lógica relacionada al tipo de aplicación a través de la cual vamos a entregar nuestras funcionalidades de dominio al usuario, está relacionado con el tipo de interfás, tales como lineas de comando, web, mobile, realidad aumentada, VR.
* **Infraestructura**: lógica relacionada a necesidades físicas de nuestra aplicación, tales como bases de datos, servidores web. No suelen ser vistas por el usuario, más que a través del dispositivo que las consumen. 

Esta es una estructura piramidal en la que el **dominio** rige por sobre la **aplicación** y, esta, sobre la **infraestructura**. Pero el acceso a la capa de **dominio** tiene un flujo inverso, se accede desde la capa de aplicación, a esta capa, los usuarios acceden a traves de la capa de **infraestructura**, como por ejemplo un browser.

La ley fundamental que rije toda la estructura es la de separar la implementación de una capa del acceso a la misma. Por lo que cada vez que tenemos que conectar esas regiones sabemos exactamente donde hacerlo.

### Actions
Las acciones o casos de uso son nuestros "interactors", servicios de la capa de aplicación que sirven de punto de acceso a nuestro dominio, las funcionalidades propias de nuestro negocio. Estas coordinan los servicios de dominio y de aplicación, 
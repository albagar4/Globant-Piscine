# Globant-Piscine

Proyectos realizados para el metapiloto de la piscina pedagógica de FullStack, proporcionados por Globant.
En este repositorio encontrarás 3 carpetas asociadas a cada proyecto, siendo:

## ex00: Image Gallery
Proyecto individual, sin uso de FrameWorks.

En él, hemos utilizado y aprendido a hacer un frontend básico, utilizando __HTML, CSS y TypeScript__.

Introduces una palabra clave y, desde el backend, realizado con __Node.js y Express__, realizas una petición a una API pública de Unsplash y enseñas por pantalla las fotos asociadas a esa palabra.


## ex01: ServiceDeskai
Proyecto en grupo, en este caso realizado en pareja.

El propósito de este es crear una aplicación web responsiva con la misma funcionalidad que Google Lens.

En este repositorio encontramos un frontend, realizado con __React y Redux__, que tiene una página de login no funcional, sólo se puede acceder introduciendo como nombre de usuario "admin" y contraseña "admin". Después muestra tres parámetros para la creación de un ticket: título, descripción e imagen, que puede ser exportada por el ordenador o sacada con la cámara del mismo.

Esta información es enviada al backend, desarrollado con __Node.js y Express__ y conectado con una base de datos de __MongoDB__, donde hemos conseguido que se alojen correctamente los datos.


## ex02: TripRecommendator
Proyecto en grupo, también realizado en pareja.

Centralizado en desarrollo de frontend, a partir de __React, HTML y CSS__ se ha realizado una aplicación web interactiva que tiene como propósito recomendarte actividades que hacer en los lugares que introduzcas por pantalla.

Muestra un mapa interactivo con el lugar en cuestión señalado, para el que se ha hecho uso de la librería __Leaflet__. 

Las respuestas son devueltas por la __inteligencia artificial Gemini__, que hemos podido utilizar gracias a su API gratuita, y se realizan dos llamadas consecutivas que devuelven, respectivamente, las coordenadas del sitio a visitar y la lista de actividades en formato HTML.

<h1> JUEGO DEL AMIGO SECRETO </h1>

Descripción

Un mini juego para el amigo secreto: ingresa al menos dos nombres de amigos y haz clic en "Sortear". Se elige un ganador aleatorio entre los nombres ingresados. Si se ingresa un solo nombre, se mostrará una alerta indicando que necesitas al menos dos amigos. Si no se ingresan datos, se mostrará una alerta pidiendo ingresar al menos un nombre. Al terminar el sorteo, el juego se limpia para poder empezar de nuevo ingresando nuevos nombres.


Validación de entrada:
Con al menos dos nombres: se realiza el sorteo.
Con un solo nombre: alerta "Necesitas al menos dos amigos para sortear".
Sin datos: alerta "Por favor, ingresa el nombre de un amigo".
Flujo de juego:
Después de sortear, el campos de entrada se limpia automáticamente.
Listo para comenzar un nuevo turno ingresando otros nombres.
Interfaz simple y rápida para usar en cualquier ocasión de amigo secreto.
Cómo ejecutar (instrucciones)

Requisitos
Navegador moderno (Chrome, Firefox, Edge, Safari).
Pasos
Abre el proyecto en tu navegador (archivo index.html o a través de un servidor local si aplica).
En la sección de entradas, escribe al menos dos nombres, separados por comas o pulsando "Enter" entre cada uno (según implementación).
Haz clic en "Sortear".
Verás el nombre sorteado. Luego, los campos se limpiarán para un nuevo juego.
Nota
Si ingresas un solo nombre y haces clic en "Sortear", verás la alerta correspondiente.
Si dejas los campos vacíos y haces clic en "Sortear", verás la alerta correspondiente.
Contribuciones

¿Quieres contribuir? Crea un issue o un pull request con:
Mejoras en la validación de entradas.
Soporte para múltiples rondas/palabras clave.
Mejores mensajes de alerta y UX.
Estructura del proyecto (ejemplo)

index.html -> Estructura de la página y elementos UI
scripts/main.js -> Lógica de entrada, validaciones y sorteos
styles/style.css -> Estilos de la interfaz
README.md -> Este archivo
Ejemplos de mensajes de alerta (texto sugerido)

"Necesitas al menos dos amigos para sortear"
"Por favor, ingresa el nombre de un amigo"
Notas de desarrollo

Mantener el estado de la lista de nombres hasta que se complete el sorteo.
Asegurar que al terminar cada sorteo, la lista se limpie para permitir un nuevo juego sin recargar la página.
Considerar añadir soporte para separar nombres por comas o por saltos de línea, según lo que ya implementaste.

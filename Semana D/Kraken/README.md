# Pruebas E2E Kraken

## Pre-requisitos y pasos previos:
- Node.js v14.18.0
- Tener *Ghost* corriendo.
- Tener un perfil creado en *Ghost* con permisos de administrador.
- En el archivo *properties.json* se debe especificar la url donde esté corriendo el administrador de *Ghost*, y el usuario y la contraseña del perfil con permisos de administrador, además se agrega el usuario genérico de Ghost que se crea por defecto este debe actualizar sí ha cambiado el correo genérico  por ejemplo:
~~~
{
  "URL": "http://localhost:2368/ghost/",
  "USERNAME": "pepito@uniandes.edu.co",
  "PASSWORD": "123456789.",
  "USERNAMEGHOST": "ghost-author@example.com"
}
~~~

## Pasos para ejecutar los scripts
1. Clonar o descargar el repositorio.
2. Ubicarse en la carpeta raíz y ejecutar el comando `npm i`.
3. Una vez finalizada la ejecución del comando anterior, correr el comando `npx kraken-node doctor` y verificar que se tienen instaladas todas las dependencias necesarias.
4. Si el anterior paso se cumple satisfactoriamente, correr el comando `npx kraken-node run`, esto correrá el escenario que se encuentre en el archivo featureFile.feature.
5. Si desea correr otro escenario, dirijase a la carpeta *features\web\scenarios* donde encontrará todos los escenarios disponibles. Seleccione el que desee, copie todo su contenido y péguelo en el archivo *featureFile.feature*

**Nota:** Los nombres de los scripts corresponden con el identificador de cada escenario de prueba. Para conocer qué identificador corresponde a cada escenario, por favor consulte el [siguiente enlace](https://github.com/Molvilada/Pruebas_E2E_Grupo_17/wiki/Escenarios-de-prueba).

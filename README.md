# Entrega Final Grupo 17
Este repositorio fue creado como parte de la entrega final correspondiente a la semana 8 de la asignatura de Pruebas Automatizadas de Software.

## Integrantes del grupo
- Santiago Alvarez Soto
- Camilo Ramírez Restrepo
- Laura Daniela Molina
- Wilmar Julian Puentes

# Semana 1
## Funcionalidades
[Descripción funcionalidades]()

## Inventario de pruebas
[Inventario de pruebas]()

# Semana 3
## Pros y Contras de Monkeys y Rippers
[Enlace a pagina de wiki](https://github.com/Molvilada/Entrega_Final_Grupo_17/wiki/Pros-Contras-Monkeys-y-Rippers)

# Semana 5
## Pre-requisitos y pasos previos:
- Node.js v14.18.0
- Tener *Ghost* corriendo, se puede ejecutar el archivo *docker-compose.yml* provisto en este repositorio para tal propósito.
- Tener un perfil creado en *Ghost* con permisos de administrador.
## Escenarios probados con Cypress
### Pre-requisitos y pasos previos:
- En el archivo *cypress.config.js* se debe especificar la url donde esté corriendo el administrador de *Ghost*, y el usuario y la contraseña del perfil con permisos de administrador, además se agrega el usuario genérico de Ghost que se crea por defecto, este debe actualizar sí ha cambiado el correo genérico, por ejemplo:

~~~
  const { defineConfig } = require("cypress");

  module.exports = defineConfig({
      e2e: {
          baseUrl: "http://localhost:2368/ghost/",
          env: {
              username: "user@onemail.con",
              password: "Pa55w0rd",
              userghost: "ghost-author@example.com",
           },
          ...
       },
  });
~~~

### Pasos para ejecutar los scripts
1. Clonar o descargar el repositorio.
2. Ubicarse en la carpeta raíz y ejecutar el comando `npm i`.
3. Una vez finalizada la ejecución del comando anterior, correr el comando `npx cypress open`.
4. Debe aparecer una ventana como la siguiente:
![image](https://user-images.githubusercontent.com/17149432/236364140-09b8c0e1-d937-4b30-a6cf-1ed9caf925f2.png)
5. Oprimir el botón **Start E2E Testing in Chrome**.
6. Aparecerá un navegador con los scripts disponibles para ejecutar:
![image](https://user-images.githubusercontent.com/17149432/236364324-ae425d21-29e6-4c9b-bf31-2ced190cc312.png)
7. Escoger el script de interés, esto empezará a correr la prueba.

## Escenarios probados con Kraken
### Pre-requisitos y pasos previos:
- En el archivo *properties.json* se debe especificar la url donde esté corriendo el administrador de *Ghost*, y el usuario y la contraseña del perfil con permisos de administrador, además se agrega el usuario genérico de Ghost que se crea por defecto este debe actualizar sí ha cambiado el correo genérico  por ejemplo:
~~~
{
  "URL": "http://localhost:2368/ghost/",
  "USERNAME": "pepito@uniandes.edu.co",
  "PASSWORD": "123456789.",
  "USERNAMEGHOST": "ghost-author@example.com"
}
~~~

### Pasos para ejecutar los scripts
1. Clonar o descargar el repositorio.
2. Ubicarse en la carpeta raíz y ejecutar el comando `npm i`.
3. Una vez finalizada la ejecución del comando anterior, correr el comando `npx kraken-node doctor` y verificar que se tienen instaladas todas las dependencias necesarias.
4. Si el anterior paso se cumple satisfactoriamente, correr el comando `npx kraken-node run`, esto correrá el escenario que se encuentre en el archivo featureFile.feature.
5. Si desea correr otro escenario, dirijase a la carpeta *features\web\scenarios* donde encontrará todos los escenarios disponibles. Seleccione el que desee, copie todo su contenido y péguelo en el archivo *featureFile.feature*

## Pros y Contras de Cypress y Kraken
[Enlace a pagina de wiki](https://github.com/Molvilada/Entrega_Final_Grupo_17/wiki/Pros-Contras-Cypress-y-Kraken)


# Incidencias
Las incidencias reportadas durante todas las semanas se encuentran en los [Issues de este repositorio](https://github.com/Molvilada/Entrega_Final_Grupo_17/issues)

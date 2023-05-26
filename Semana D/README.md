
## Pre-requisitos y pasos previos:
- Node.js v14.18.0
- Tener *Ghost* corriendo, se puede ejecutar el archivo *docker-compose.yml* provisto en este repositorio para tal propósito.
- Tener un perfil creado en *Ghost* con permisos de administrador.
---
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
1. Ubicarse en la carpeta Cypress y ejecutar el comando `npm i`.
2. Una vez finalizada la ejecución del comando anterior, correr el comando `npx cypress open`.
3. Debe aparecer una ventana como la siguiente:
   ![image](https://user-images.githubusercontent.com/17149432/236364140-09b8c0e1-d937-4b30-a6cf-1ed9caf925f2.png)
4. Oprimir el botón **Start E2E Testing in Chrome**.
5. Aparecerá un navegador con los scripts disponibles para ejecutar:
   ![image](https://user-images.githubusercontent.com/17149432/236364324-ae425d21-29e6-4c9b-bf31-2ced190cc312.png)
6. Escoger el script de interés, esto empezará a correr la prueba.
---
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
1. Ubicarse en la carpeta Kraken y ejecutar el comando `npm i`.
2. Una vez finalizada la ejecución del comando anterior, correr el comando `npx kraken-node doctor` y verificar que se tienen instaladas todas las dependencias necesarias.
3. Si el anterior paso se cumple satisfactoriamente, correr el comando `npx kraken-node run`, esto correrá el escenario que se encuentre en el archivo featureFile.feature.
4. Si desea correr otro escenario, dirijase a la carpeta *features\web\scenarios* donde encontrará todos los escenarios disponibles. Seleccione el que desee, copie todo su contenido y péguelo en el archivo *featureFile.feature*
---

## Resumen actividades

**1. Código de los escenarios de prueba que usan las tres estrategias de generación de datos y permiten generar 120 escenarios diferentes.**

Se decidió reutilizar 26 escenarios de los 40 escenarios creados anteriormente para la entrega de la semana 5, 13 en  Kraken y 13 Cypress, en los cuáles ya estabamos utilizando la estrategia de generación de datos aleatoria.

En cuanto a los 94 escenarios restantes, se optó por desarrollarlos exclusivamente en Cypress debido a nuestra familiaridad con esta herramienta. Dentro del repositorio de Cypress, se pueden encontrar tres carpetas: "a_priori", "dinámico" y "aleatorio". En cada una de estas carpetas se encuentran los escenarios correspondientes que fueron diseñados siguiendo la estrategia a priori, dinámica y aleatoria, respectivamente.

<hr/>

**2. Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas. Se debe evidenciar en la descripción que se usan las tres estrategias solicitadas: pool de datos a-priori, pool de datos (pseudo) aleatorio dinámico y escenario aleatorio.**

En el [siguiente link](https://github.com/Molvilada/Entrega_Final_Grupo_17/wiki/Estrategia-Pruebas-Automatizadas-Semana-D) se puede observar la descripción de las estrategias de utilizamos y como las implementamos.

**_Nota_**: Para saber que estrategia se utilizo especificamente en cada escenario, puede revisar la [hoja de cálculo](https://uniandes-my.sharepoint.com/:x:/g/personal/ld_molina11_uniandes_edu_co/EQLNOAClGmZPqHEsnikAkTwBQ5vvZPJeeqVltoQnUci4pw?e=LltiaR) que hicimos con la descripción cada escenario.

<hr/>

**3. Se reportan, en el sistema de registro de incidencias, por lo menos 10 defectos por manejo de datos inválidos.**

La incidencias observadas se reportaron en el [sistema de registro de incidencias](https://github.com/Molvilada/Entrega_Final_Grupo_17/issues).
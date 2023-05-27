
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
## Pruebas VRT Resemble

### Pasos para ejecutar el script
1. Ubicarse en la carpeta Resemble y ejecutar el comando `npm i`.
2. Una vez finalizada la ejecución del comando anterior, correr el comando `node index.js`.
3. Luego de que termine la ejecución, habra una nueva carpeta llamada _report_ con el reporte generado en html y css.

**Nota:** Las imagenes de comparacion de cada paso quedan guardadas en la carpeta _screenshots_10_scenarios_ terminando en _compare.png_

---

## Resumen actividades:

**1. Implementar la toma de screenshots al interior de las pruebas ya existentes. Tengan en cuenta que el objetivo final de esta fase es realizar comparación de dichos screenshots por lo tanto, los scrennshots se deben tomar después de cada paso ejecutado:**

Se hicieron las modificaciones correspondientes para los 40 escenarios de pruebas, de manera que se tome una captura de pantalla al finalizar cada paso.

Para el caso de Cypress, implementamos la funcionalidad `cy.screenshot()` para tomar screenshots después de cada paso.

Para el caso de Kraken, creamos un nuevo step para tomar screenshots:

```
When("I take screenshot with name {string}",
      async function (screenName){
  return await this.driver.saveScreenshot (\`screenshots/${screenName}.png\`);
});
```

y dicho step fue llamado luego de finalizar cada paso.

---

**2. Ejecutar los 40 escenarios modificados en la versión de Ghost actual y medir el impacto en terminos de pruebas fallidas y exitosas:**

Se corrieron las pruebas ya existentes con la implementación de screenshots para la versión Ghost 4.44.0 tanto en Cypress como en Kraken.

---
**3. Seleccionar 10 escenarios y ejecutelos en la nueva versión instalada preferiblemente pertenecientes a funcionalidades diferentes, para que sean ejecutados en modo de regresión visual a nivel de paso ejecutado.**

Como el equipo tiene mayor afinidad con la herramienta *Cypress* se decidió escoger todos los 10 escenarios en esta herramienta.

A dichos escenarios se les hicieron las correciones correspondientes para que pasaran tanto en *Ghost v3.41.1*, como en *Ghost v4.44.0*.

Se ejecutaron los scripts modificados y se generaron los screenshots por cada paso y por cada versión.


---

**4. Construir un reporte HTML mediante un script en el lenguaje de su preferencia, que de forma automática, dadas dos carpetas de ejecución de pruebas, analice los resultados de cada paso y presente: los pasos, los screenshots en ambas versiones y las diferencias visuales:**

Para la construcción del reporte se decidió utilizar la herramienta *Resemble.js*. Primero se ubica en la carpeta Resemble.
El reporte está en la carpeta *report* en el archivo *report.html*. Los pasos de ejecución de Resemble se encuentran [aquí](https://github.com/Molvilada/Entrega_Final_Grupo_17/blob/main/Semana%20C/README.md#pruebas-vrt-resemble).

---

**5. Si encuentran diferencias visuales, repórtenlas en el sistema de registro de incidencias (una incidencia por diferencia encontrada):**

Se encontraron 5 diferencias visuales que reportamos en el sistema de incidencias. Puede ver las incidencias reportadas en el [siguiente link](https://github.com/Molvilada/Entrega_Final_Grupo_17/issues)

---

**6. En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas. Los pros/contras deben ser coherentes con las características de las herramientas:**

[Pros/Contras Resemble y Backstop](https://github.com/Molvilada/Entrega_Final_Grupo_17/wiki/Pros-Contras-Resemble-y-Backstop)

---

**7. Link a video de explicación de procedimiento realizado en la semana para habilitar la toma de pantallazos, las decisiones tomadas respecto a la construcción del reporte y breve explicación de los resultados obtenidos en la semana**

[Link video](https://uniandes-my.sharepoint.com/:v:/g/personal/ld_molina11_uniandes_edu_co/EfqRkdFEmj1PoJczuY8G-BwBqMtWqKmC2BwnX59zVWhLkw?e=62QXkY)

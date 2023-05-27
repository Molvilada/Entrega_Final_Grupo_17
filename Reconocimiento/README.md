
# Resultados de la ejecución de Monkeys

El primer encuentro con los scripts resultó desafiante, debido a la presencia de múltiples errores y configuraciones de entornos que debieron abordarse. Si bien los scripts de ejemplo se ejecutaron sin incovenientes, al llevar a cabo su implementación en nuestro proyecto Ghost, se presentaron diversas dificultades adicionales. El primer obstaculo fue la correcta implementación del inicio de sesión, ya que sin está era imposible avanzar con las pruebas; no obstante, posteriormente se detectaron diversos errores del propio script, que debieron ser resueltos. Tras múltiples intentos no se consiguó la correcta ejecución del smart-monkey, por lo anterior, se tomó la decisión de ejecutar únicamente el monkey estándar. 

Una vez lograda la primera ejecución del monkey con éxito, el paso a seguir fue correrlo iterativamente con diferentes semillas (seed) hasta encontrar un error. El problema hallado en este punto fue que, en múltiples ocasiones, el monkey notificaba errores que realmente no eran errores.

Por ejemplo, aquí generó un error al tratar de darle doble click a un elemento al que no se le puede dar:

![image](https://user-images.githubusercontent.com/17149432/235278261-805dae03-9a1d-4482-bfcd-682094a9af3b.png)


Finalmente después de analizar cuidadosamente los resultados generados por el monkey, logramos identificar únicamente una incidencia válida.

# Resultados de la ejecución del Ripper

El inicio del trabajo con el script fue complicado debido a la existencia de varios errores y ajustes de configuración que tuvieron que ser resueltos. Una vez superados estos problemas iniciales, el siguiente desafío fue implementar correctamente el proceso de inicio de sesión, ya que sin ello, no era posible continuar con las pruebas. 

Una vez lograda la ejecución del Ripper nos presentó un error propio de Ghost. Tras repetir la ejecución en múltiples ocasiones, se ha concluido que el Ripper es menos personalizable y aletorio que el Monkey, pues siempre se obtuvo el mismo resultado.

Esta fue la gráfica generada en cada iteración:

![image](https://user-images.githubusercontent.com/17149432/235278124-728a4416-1e36-408f-93cb-d410ec118725.png)

Y ese el error respectivo:

![image](https://user-images.githubusercontent.com/17149432/235278154-274e3478-bc7b-4881-a08d-0a3c7ebbfb4e.png)



# Pros y Contras
## Pros de Monkeys:
* Encontrar errores raros es más sencillo con los Monkeys.
* Los logs generados pueden ser interpretados por bots de desarrollo para una identificación más rápida de errores.
* Tanto Rippers como Monkeys son de gran ayuda a la hora de probar aplicaciones de gran tamaño.

## Contras de Monkeys
* Al correr eventos de manera completamente aleatoria, pueden quedarse estancados en un mismo sitio.
* Al correr eventos de manera completamente aleatoria, detallan errores que no son realmente errores.
* Para ejecutar los scripts es necesario tener una buena capacidad computacional.
* Para encontrar un error en un monkey toca ejecutar muchas veces el script.
* El proceso de análisis de resultados tiende a complicarse bastante y terminar siendo tedioso, pues toca validar los logs y videos que se generan.

## Pros de Rippers
* Son más adecuados para probar funcionalidades específicas.
* Se puede tener una mayor cobertura en las pruebas con un menor tiempo invertido.
* El análisis de los Ripper es mucho más sencillo que el de los Monkeys, ya que los Rippers muestran de manera gráfica dónde se generaron los errores.
* Tanto Rippers como Monkeys son de gran ayuda a la hora de probar aplicaciones de gran tamaño.

## Contras de Rippers
* Encontrar errores raros es más complicado.
* Para ejecutar los scripts es necesario tener una buena capacidad computacional.
* La personalización es más complicada que en los Monkeys.

## Pasos para correr los scripts
### Cypress (Monkey)
In order to use the tester, you will have to follow these steps:
- Get the source code from this repository: Click on Download as Zip and unzip the folder in your machine or clone the repo
- Install the required modules: Using [Node Package Manager](https://www.npmjs.com/), run `npm install` on the root folder; this will install the cypress CLI module and other dependencies, which are the [faker](https://www.npmjs.com/package/faker) module and a cypress [plugin](https://github.com/Bkucera/cypress-plugin-tab) for pressing the tab key, along with [another plugin](https://github.com/flotwig/cypress-log-to-output) for capturing the browser console output. In case you already have cypress installed, it is better to avoid installing it again in this folder; for this, run the commands `npm install faker`, `npm install -D cypress-log-to-output` and `npm install -D cypress-plugin-tab` individually.
- Configure the desired parameters: The repository's root folder contains two JSON files which have the configuration parameters for each test. Open them and edit the parameters as needed. You can change the baseURL, the seed for the test, the percentage of events, the delay between events, and the number of events.
- Run the desired tester: The commands for running the tests must be executed from the root folder, so do not forget to change de directory again with the `cd` command. For the random tester, run `cypress run --config-file ./monkey-config.json`. For the slightly smarter random tester, run `cypress run --config-file ./smart-monkey-config.json`.

\* Note: The default browser is Electron 78 in headless mode. In order to test another browser, add the `--browser <browser-name-or-path>` option to the run command, indicating which of the [supported browsers](https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers) you want to use
### RIPuppet
A node js library for GUI Ripping on web applications

#### Executing
To execute the testing tool use the following command:

```
node index.js url headless

```

For example:

```
node index.js https://github.com true

```

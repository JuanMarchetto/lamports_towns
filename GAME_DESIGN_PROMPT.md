# Lamports Towns - Prompt de Diseno del Juego

## Objetivo del documento

Crear una especificacion viva, escrita como prompt de diseno, para un juego de estrategia en tiempo real persistente.

Este documento debe servir para conversar, iterar y luego poder transformar la idea en mecanicas, interfaz, economia, arquitectura y tareas de desarrollo.

---

## Prompt principal

Disenar un juego de estrategia con formato jugable igual al de Age of Empires, pero adaptado a un mundo persistente multijugador con cientos de usuarios conectados al mismo servidor.

El juego no debe sentirse como una partida cerrada con inicio, medio y final. Debe sentirse como un mundo vivo donde cada jugador construye, administra, expande y defiende su imperio a lo largo del tiempo.

La base debe tomar elementos de los RTS clasicos:

- Construccion directa de edificios.
- Recoleccion y administracion de recursos.
- Produccion de aldeanos, tropas y estructuras.
- Expansion territorial.
- Conflicto militar entre jugadores.
- Decisiones economicas y estrategicas constantes.

Debe tomar de juegos persistentes por servidor, como Ikariam, Game of Thrones o AoE Mobile, solamente la idea de mundo compartido, continuidad y convivencia entre muchos jugadores. No debe copiar su formato de celdas, regiones separadas, pantallas de gestion o timers.

La diferencia central es que el juego debe sentirse como un RTS completo, en una unica escala de mundo, pero sin final de partida.

---

## Pilares de diseno

### 1. Mundo persistente

El servidor representa un mundo continuo.

No hay partidas que terminen. Los jugadores ingresan, construyen, recolectan, exploran, atacan, defienden y hacen crecer su imperio dentro del mismo mapa compartido.

El objetivo no es "ganar una partida", sino aumentar poder, territorio, influencia economica y capacidad militar dentro del mundo.

### 2. Unica escala de juego estilo AoE

El mundo no se divide en una escala de ciudad y otra escala estrategica.

Todo ocurre en el mismo espacio jugable:

- La construccion de edificios.
- El movimiento de aldeanos.
- La recoleccion de recursos.
- La exploracion.
- La produccion y movimiento de tropas.
- El combate.
- La expansion territorial.

El jugador debe sentir que esta jugando un RTS como Age of Empires, no administrando una ciudad desde una pantalla y luego enviando ejercitos por un mapa separado.

### 3. Inspiracion RTS, no juego de espera

El juego debe usar como referencia jugable principal Age of Empires y otros RTS clasicos.

Por eso, como regla inicial:

- No debe haber tiempos largos de construccion.
- No debe depender de esperar horas para completar edificios.
- No debe sentirse como un juego donde el progreso principal ocurre por timers pasivos.
- La accion del jugador debe importar de forma directa.

Construir, asignar aldeanos, producir tropas o mover ejercitos deberia sentirse inmediato o semi-inmediato, con restricciones economicas, logisticas o territoriales en lugar de restricciones artificiales de espera.

### 4. Servidor con cientos de usuarios

El juego debe permitir que muchos usuarios convivan en el mismo mundo.

Cada jugador debe aparecer en una ubicacion inicial con distancia optima respecto de otros jugadores, para reducir riesgos tempranos y evitar que un jugador nuevo nazca demasiado cerca de imperios avanzados.

Cada jugador puede tener una base inicial dentro del mundo, expandirse hacia nuevas zonas, ocupar recursos, construir puestos avanzados, defender rutas o entrar en guerra.

El mapa debe poder soportar cientos de imperios activos sin que un jugador avanzado pueda dominar todo el servidor demasiado rapido.

### 5. Economia con profundidad

El crecimiento no debe ser trivial.

Si construir tropas o edificios fuera demasiado facil, el servidor tenderia a ser conquistado rapidamente por los jugadores mas activos o por alianzas dominantes.

La economia debe crear decisiones y costos reales:

- Construir tropas debe consumir recursos.
- Mantener tropas debe tener algun tipo de costo.
- Enviar tropas lejos debe requerir logistica.
- Expandirse debe aumentar la complejidad de administracion.
- El exceso militar debe competir contra el crecimiento economico.
- Atacar debe ser una decision estrategica, no siempre la opcion optima.

La economia tiene que hacer que crecer sea posible, pero no automatico.

---

## Mecanicas base propuestas

### Construccion

Los edificios se construyen directamente en el mundo, igual que en Age of Empires.

Regla inicial:

- La construccion no tiene tiempos largos.
- El costo principal es de recursos, espacio, requisitos y oportunidad.
- Debe requerir aldeanos visibles para construir, reparar o acelerar construcciones.
- La construccion puede ser rapida, pero debe necesitar presencia fisica, recursos y espacio.

Ejemplos de edificios iniciales:

- Centro urbano.
- Casa.
- Granja.
- Mina o fabrica de minerales.
- Cuartel.
- Almacen.
- Muralla o defensa.
- Mercado.

### Recursos

Recursos iniciales posibles:

- Comida.
- Mineral.
- Madera.
- Oro o moneda.
- Poblacion.
- Energia/logistica, si hace falta limitar expansion.

El proyecto actual ya contempla comida y mineral, por lo que pueden ser la base inicial.

Posible modelo:

- Comida: aldeanos, tropas vivas, mantenimiento militar.
- Mineral: edificios, armas, mejoras, estructuras defensivas.
- Madera: expansion fisica, casas, defensas, puestos.
- Oro/moneda: minas de oro, comercio entre centros propios, comercio con aliados futuros, mantenimiento avanzado, mercado.

El oro debe tener origen fisico en minas. Sin minas, no existe oro nuevo en la economia.

El comercio no crea oro desde la nada. El comercio mueve, distribuye y vuelve util el oro extraido, transformandolo en flujo economico entre centros.

Mas adelante, las minas podrian ser descubiertas por excavacion, exploracion o investigacion, pero para el inicio del juego deben existir minas disponibles como fuente basica de oro.

### Regeneracion y agotamiento de recursos

Los recursos del mundo deben ser limitados y tener origen fisico en el mapa.

La madera no debe producirse automaticamente desde un aserradero. El aserradero puede servir para recolectar, almacenar, procesar o mejorar la eficiencia de obtencion de madera, pero la madera debe venir de arboles existentes en el mundo.

Los bosques pueden regenerarse, pero no si fueron arrasados por completo.

Regla base para madera:

- Los arboles se talan como recurso fisico.
- Si un bosque conserva parte de su masa forestal, puede regenerarse con el tiempo.
- Si un bosque se destruye por completo, debe ser replantado para volver a producir.
- Los aldeanos pueden plantar arboles o restaurar zonas forestales.
- La expansion descuidada puede agotar la madera local.

La comida tambien debe venir de fuentes fisicas o productivas:

- Animales para cazar.
- Granjas construidas por el jugador, como en Age of Empires.
- Recoleccion de alimentos naturales si existen.
- Produccion agricola que requiere espacio, aldeanos y mantenimiento.

La comida puede volver a generarse, pero debe depender de sistemas visibles como granjas, animales, ciclos de produccion o reposicion natural. No debe aparecer de la nada.

Los minerales y el oro deben ser mas limitados.

Regla base para minas:

- Las minas existentes pueden agotarse.
- El oro nuevo requiere minas.
- Mas adelante se podran descubrir nuevas minas mediante excavacion, exploracion, investigacion o tecnologias.
- Encontrar nuevas minas debe ser un motor de expansion, conflicto y comercio.

Esto hace que el control territorial tenga peso real sin usar baldosas conquistadas. Un jugador controla recursos porque los encuentra, los explota, los protege y los conecta con su economia.

### Catastrofes naturales

Las catastrofes naturales pueden existir mas adelante como sistema avanzado del mundo.

No forman parte de la primera version del diseno.

### Aldeanos visibles

Los aldeanos son el motor economico.

Pueden asignarse a:

- Produccion de comida.
- Produccion de mineral.
- Construccion.
- Reparacion.
- Recoleccion.
- Transporte/logistica.

Los aldeanos existen como unidades fisicas visibles y movibles en el mundo.

No son trabajadores abstractos asignados desde una pantalla. El jugador debe poder seleccionarlos, moverlos, enviarlos a construir, mandarlos a recolectar o exponerlos al riesgo del mapa.

Esto es una decision tomada.

### Tropas

Las tropas deben ser utiles, pero costosas.

Costos posibles:

- Costo de creacion.
- Consumo de comida.
- Salario en moneda.
- Capacidad de poblacion.
- Capacidad logistica para moverse lejos.

Esto evita que un jugador pueda crear ejercitos infinitos sin consecuencias.

### Movimiento militar

Enviar tropas debe tener restricciones estrategicas.

Opciones posibles:

- El movimiento tiene tiempo de viaje segun distancia.
- El envio consume comida o suministros.
- Las tropas lejos de la ciudad consumen mas mantenimiento.
- Se necesitan rutas, campamentos o puestos avanzados para sostener campanas largas.

Este puede ser uno de los principales frenos contra la conquista rapida del servidor.

### Ataques, saqueo y destruccion

El ataque a otros jugadores debe ser posible, incluso para afectar bases y economias rivales, pero destruir completamente a un jugador debe ser mucho mas dificil que robarle recursos o danar su infraestructura.

Modelo base:

- Un atacante puede robar recursos almacenados.
- Un atacante puede matar aldeanos expuestos.
- Un atacante puede destruir edificios secundarios.
- Un atacante puede cortar rutas comerciales.
- Un atacante puede danar defensas, granjas, cuarteles, mercados, almacenes o puestos avanzados.
- Un atacante no deberia poder borrar por completo la existencia de otro jugador con facilidad.

El objetivo es que la guerra tenga consecuencias fuertes sin convertir cada derrota en abandono obligado del juego.

### Centro Urbano protegido

El Centro Urbano principal no debe ser destruible por ataques normales mientras su nucleo de resguardo este activo y mantenido.

Puede ser atacado, danado, saqueado o bloqueado parcialmente, pero no eliminado del mundo si conserva su muralla central funcional.

El Centro Urbano funciona como ancla persistente del jugador:

- Permite reconstruir despues de una derrota.
- Evita que un jugador pierda todo mientras esta offline.
- Conserva un minimo de identidad territorial.
- Sirve como punto de retorno economico y demografico.

Esto no significa que el jugador este a salvo de perder. Puede quedar sin recursos, sin ejercito, sin edificios secundarios y con la economia destruida. Pero conserva un nucleo desde el cual volver.

Esta proteccion no debe ser eterna para jugadores inactivos.

Si la muralla central se deteriora por falta de mantenimiento durante suficiente tiempo, empieza a romperse. Cuando el nucleo queda roto o abandonado, el Centro Urbano puede perder su proteccion especial y quedar habilitado para destruccion.

Esto permite que los jugadores inactivos desaparezcan del mundo con el tiempo, libera espacio y evita que sus ciudades funcionen como granjas permanentes de recursos.

### Resguardo offline y nucleo protegido

Cuando un jugador esta offline, debe existir un sistema de resguardo minimo.

La idea propuesta es que cada Centro Urbano pueda almacenar una cantidad maxima de poblacion y recursos de emergencia, pero solo dentro de ciertas condiciones defensivas.

Regla base:

- Cada Centro Urbano debe tener una muralla central que lo encierre para poder activar el resguardo.
- La muralla central es mas fuerte que las murallas comunes.
- La muralla central no deberia romperse por ataques normales, pero si puede deteriorarse con el paso del tiempo.
- El Centro Urbano puede proteger una cantidad limitada de poblacion.
- El Centro Urbano puede proteger una cantidad maxima de recursos.
- La proteccion solo funciona dentro del nucleo cerrado por murallas.
- Las murallas deben estar construidas, cerradas y mantenidas.
- Si las murallas estan rotas, incompletas o deterioradas, la proteccion baja o desaparece.
- Debe haber soldados guarnecidos o asignados a seguridad para sostener el orden interno.

Esto crea un "nucleo de recuperacion" sin volver invulnerable a todo el imperio.

El atacante puede saquear el exterior, destruir infraestructura secundaria y dejar al jugador muy debilitado, pero no deberia poder impedir por completo que vuelva a jugar.

Modelo recomendado para recursos:

- El Centro Urbano protege recursos hasta una capacidad maxima.
- No hace falta usar porcentaje y maximo al mismo tiempo; la capacidad maxima alcanza como limite claro.
- La capacidad maxima puede crecer con niveles, edades e investigaciones.
- El excedente queda expuesto a saqueo.

Ejemplo conceptual:

- Un Centro Urbano basico podria proteger una cantidad pequena de recursos.
- Un Centro Urbano mejorado podria proteger una cantidad mayor, pero siempre limitada.
- Una ciudad rica que no invierte en seguridad seguiria teniendo mucho excedente saqueable.

Esto mantiene dos ideas a la vez: el jugador conserva una base minima para volver, pero acumular riqueza sin defensa sigue siendo peligroso.

Modelo recomendado para poblacion:

- El Centro Urbano puede resguardar civiles y soldados.
- El jugador puede elegir que tipo de poblacion queda protegida dentro del limite.
- Debe existir al menos una guarnicion militar minima para activar el resguardo completo.
- Si no hay soldados suficientes, baja la seguridad, aumenta el riesgo de conflicto interno y puede fallar parte del resguardo.

### Murallas como condicion de seguridad

Las murallas no deben ser solo decoracion defensiva.

En el mundo persistente, las murallas pueden cumplir una funcion estructural:

- Definen el nucleo cerrado de resguardo alrededor de cada Centro Urbano.
- Reducen la eficiencia de saqueos dentro del nucleo.
- Protegen una parte de la poblacion cuando el jugador esta offline.
- Requieren mantenimiento para seguir siendo utiles.
- Pueden ser danadas, abiertas o deterioradas.
- En el caso de la muralla central del Centro Urbano, el deterioro por tiempo puede terminar habilitando la destruccion del Centro.

Esto hace que la defensa de la base sea una decision economica. Tener un nucleo seguro requiere invertir en murallas, repararlas y sostenerlas.

La muralla debe encerrar realmente al Centro Urbano. No alcanza con tener tramos sueltos o defensas parciales. Para activar el resguardo, el sistema deberia considerar si existe un perimetro cerrado, si ese perimetro esta conectado y si su estado de mantenimiento supera un minimo.

Dentro del radio entre el Centro Urbano y la muralla central pueden existir construcciones protegidas. Esas construcciones tampoco deberian ser tocadas facilmente mientras el nucleo este cerrado y mantenido.

Si el nucleo se deteriora y pierde proteccion, esas construcciones pasan a estar expuestas.

### Murallas comunes y asedio

No todas las murallas tienen la misma resistencia.

Las murallas deben escalar por material, edad, nivel e investigaciones.

Modelo base:

- Murallas de madera: pueden ser destruidas por cualquier unidad.
- Murallas de piedra o materiales avanzados: requieren mayor fuerza militar.
- Murallas mejoradas por edad, nivel o tecnologia: deberian requerir unidades de asedio.
- La muralla central del Centro Urbano es una categoria especial: es mas fuerte que las comunes y su destruccion depende principalmente del deterioro por falta de mantenimiento, no de ataques normales.

Esto permite que en edades tempranas el ataque sea mas directo y que en edades avanzadas aparezca la necesidad de asedio real.

### Seguridad interna, motines y desercion

La seguridad interna debe ser otro limite contra la expansion ilimitada.

Si un imperio crece demasiado sin suficiente seguridad, poblacion civil, alimentos, mantenimiento o presencia militar, pueden aparecer conflictos internos.

Riesgos posibles:

- Aldeanos que dejan de trabajar.
- Aldeanos que abandonan edificios lejanos.
- Motines en zonas mal protegidas.
- Perdida de eficiencia economica.
- Dano a edificios propios durante conflictos internos.
- Aumento de deterioro por abandono.
- Desercion de unidades o poblacion.

Factores que reducen seguridad:

- Pocos soldados respecto de la poblacion.
- Falta de comida.
- Falta de oro o pagos.
- Edificios deteriorados.
- Centros urbanos sin muralla cerrada.
- Rutas comerciales cortadas.
- Bases lejanas sin influencia suficiente.
- Sobreexpansion administrativa.
- Condiciones de vida malas para la poblacion.
- Impuestos altos cuando no estan acompanados por bienestar, comida, seguridad o prosperidad.

Factores que aumentan seguridad:

- Soldados guarnecidos.
- Murallas completas y mantenidas.
- Alimentos suficientes.
- Rutas comerciales activas.
- Centros urbanos conectados.
- Edificios en buen estado.
- Presencia de puestos avanzados o fortalezas.
- Buenas condiciones de vida.
- Impuestos sostenibles cuando la poblacion vive bien.

Esto hace que los soldados no sirvan solo para atacar o defender contra enemigos externos. Tambien son necesarios para sostener orden interno, proteger civiles y evitar que un imperio demasiado grande se vuelva inestable.

Los impuestos no deberian ser un problema por si solos. Pueden ser altos si la poblacion vive bien, tiene comida, seguridad, trabajo, edificios mantenidos y comercio funcionando.

El conflicto aparece cuando la presion fiscal se combina con malas condiciones de vida. Un imperio puede exigir mucho si tambien ofrece estabilidad y prosperidad; si exige mucho mientras hay hambre, inseguridad o abandono, aumenta el riesgo de motin.

### Moral militar y abuso de jugadores debiles

Atacar jugadores mucho mas pequenos o debilitados no debe estar prohibido, pero puede tener consecuencias internas para el atacante.

Si un imperio grande ataca repetidamente a jugadores muy inferiores, la moral de sus tropas y de su poblacion puede verse afectada.

Riesgos posibles:

- Perdida de moral militar.
- Desercion de tropas.
- Perdida probabilistica de unidades.
- Menor eficiencia de combate durante un tiempo.
- Aumento de conflictos civiles internos.
- Deterioro de reputacion o legitimidad.

La probabilidad de consecuencias puede aumentar segun:

- Diferencia de poder entre atacante y defensor.
- Repeticion de ataques contra el mismo jugador debil.
- Bajo valor real del botin.
- Nivel de destruccion causado.
- Condiciones internas del imperio atacante.

La idea no es impedir que un jugador grande ataque a uno chico. La idea es que hacerlo de forma abusiva pueda volverse moral, politica y militarmente costoso.

### Recuperacion de jugadores nuevos o saqueados

Este punto queda abierto.

Todavia no esta consolidado como debe funcionar el sistema para que un jugador nuevo, saqueado o asediado por jugadores mas grandes pueda seguir avanzando.

El problema a resolver es que el atacante podria destruir infraestructura exterior y robar almacenes sin atacar el Centro Urbano. Si el sistema de recuperacion dependiera solo del Centro Urbano, el atacante podria evitar activarlo.

La solucion definitiva queda pendiente de diseno.

### Comercio

El comercio debe ser una parte central de la economia.

Primero debe existir comercio interno entre los propios centros del jugador. Si un imperio tiene minas, centros urbanos, mercados o almacenes conectados, puede convertir el oro extraido en flujo economico mediante rutas comerciales internas.

Mas adelante, si se incorporan alianzas, tambien deberia poder existir comercio entre aliados.

Modelo base:

- Un centro urbano, mercado o almacen puede enviar caravanas o comerciantes hacia otro centro propio.
- La ruta transporta o activa oro segun distancia, seguridad y valor economico de los centros conectados.
- Una ruta mas larga puede mejorar el rendimiento comercial del oro, pero tambien es mas vulnerable.
- Las rutas necesitan caminos razonablemente seguros.
- Si una ruta atraviesa zonas sin influencia, puede sufrir penalizaciones o ataques.
- Las tropas pueden escoltar comerciantes.
- Los enemigos pueden cortar rutas comerciales atacando comerciantes, mercados, almacenes o caminos.

El comercio convierte la expansion en una red que debe mantenerse. No alcanza con encontrar una mina o construir una base lejana; esa base tiene que estar conectada con el resto del imperio para aportar riqueza.

Este sistema tambien ayuda a limitar la expansion infinita: un territorio aislado puede existir, pero si no se conecta, produce menos, se deteriora mas y cuesta mas sostenerlo.

### Expansion

La expansion ocurre dentro del mismo mundo, mediante:

- Levantar nuevos centros urbanos o bases secundarias.
- Construir puestos avanzados.
- Controlar zonas de recursos.
- Controlar recursos especiales.
- Crear defensas, rutas y presencia militar.

La expansion debe ser poderosa, pero aumentar la exposicion al ataque y el costo logistico.

La expansion no debe funcionar como conquista de baldosas o territorios cerrados. En lugar de eso, debe funcionar por presencia real en el mundo:

- Edificios construidos.
- Aldeanos trabajando.
- Tropas defendiendo.
- Rutas conectadas.
- Recursos explotados.
- Centros urbanos o puestos avanzados sosteniendo una zona.

Un jugador no "posee" una zona porque la pinto en el mapa. La controla porque puede mantenerla, defenderla y abastecerla.

### Expansion infinita y mantenimiento

La expansion infinita es uno de los problemas centrales del diseno.

Como el juego no usara un sistema de baldosas conquistadas, la limitacion debe surgir de costos organicos:

- Renta o mantenimiento de infraestructura.
- Deterioro progresivo de edificios.
- Costos logisticos por distancia.
- Necesidad de poblacion civil para sostener bases.
- Necesidad de rutas seguras entre centros.
- Mayor vulnerabilidad cuanto mas disperso es el imperio.
- Costos crecientes por cantidad de centros urbanos, puestos avanzados o edificios militares.

La idea base es que construir sea facil, pero sostener lo construido sea dificil.

Un imperio puede crecer mucho, pero cada nueva zona aumenta su carga economica y administrativa. Si el jugador expande sin una economia fuerte, sus edificios empiezan a deteriorarse, sus rutas se vuelven vulnerables y sus defensas se vuelven demasiado caras de mantener.

### Modelo propuesto: influencia sin baldosas

En vez de conquistar territorios como piezas cerradas, cada jugador proyecta influencia desde sus estructuras principales.

La influencia no es una frontera rigida. Es un radio funcional alrededor de edificios importantes como:

- Centro urbano.
- Fortaleza.
- Puesto avanzado.
- Mercado.
- Almacen.
- Campamento militar.

Dentro de una zona con buena influencia:

- Los edificios se deterioran menos.
- Las rutas logisticas funcionan mejor.
- Las tropas tienen menor costo de mantenimiento.
- Los aldeanos trabajan con menor penalizacion.
- Las defensas pueden recibir reparacion o suministro.

Fuera de una zona con buena influencia:

- Los edificios se deterioran mas rapido.
- Las tropas consumen mas recursos.
- Las reparaciones son mas caras.
- Los aldeanos quedan mas expuestos.
- La produccion puede tener penalizaciones.

Esto permite que el mundo siga siendo unico y estilo AoE, pero con una regla estrategica clara: no alcanza con construir lejos, hay que sostener presencia.

### Deterioro de infraestructura

Los edificios deberian tener estado de mantenimiento.

Un edificio puede estar:

- En buen estado.
- Deteriorado.
- Danado.
- Inactivo.
- En ruinas.

El deterioro puede aumentar por:

- Distancia respecto de un centro urbano o puesto logistico.
- Falta de aldeanos asignados a mantenimiento.
- Falta de recursos de mantenimiento.
- Ataques enemigos.
- Asedios y saqueos.
- Abandono prolongado.
- Exceso de edificios respecto de la capacidad administrativa del imperio.

Esto crea una presion economica natural contra la expansion descontrolada.

El deterioro debe ser una mecanica permanente del mundo, no un castigo excepcional.

Con el paso del tiempo, los edificios pueden ir perdiendo estado. Si no se refaccionan, reparan o mantienen, empiezan a perder eficiencia y eventualmente pueden romperse.

Efectos posibles del deterioro:

- Menor produccion.
- Menor capacidad de almacenamiento.
- Menor defensa.
- Menor velocidad de entrenamiento.
- Mayor costo de reparacion futura.
- Inactividad temporal.
- Conversion en ruinas si se abandona demasiado tiempo.
- Perdida parcial de proteccion offline si afecta murallas o edificios del nucleo.

Formas de resolverlo:

- Enviar aldeanos a reparar manualmente.
- Asignar aldeanos a mantenimiento permanente.
- Pagar recursos de mantenimiento periodico.
- Construir edificios de soporte que reduzcan deterioro cercano.
- Mantener rutas logisticas activas para abastecer estructuras alejadas.
- Refaccionar murallas y edificios clave del nucleo protegido.

Esto crea una diferencia importante entre construir y sostener. Un imperio grande no solo necesita recursos para expandirse, tambien necesita una economia capaz de conservar lo que ya tiene.

### Renta y costos recurrentes

Algunos edificios deberian tener costos recurrentes.

No como timer molesto, sino como costo estructural del imperio.

Ejemplos:

- Casas: bajo mantenimiento.
- Granjas: mantenimiento medio, pero producen comida.
- Cuarteles: mantenimiento medio-alto.
- Torres: mantenimiento alto.
- Murallas: bajo costo por tramo, pero caro si se abusa.
- Fortalezas: mantenimiento muy alto.
- Centros urbanos secundarios: alto costo administrativo.
- Guarniciones militares: costo recurrente, pero necesarias para seguridad interna.

Esto obliga a decidir que vale la pena conservar.

Un jugador puede llenar el mundo de torres, murallas o puestos, pero si no puede pagar su renta y mantenimiento, esas estructuras se degradan, pierden eficiencia o quedan inutilizadas.

### Capacidad administrativa

Ademas de recursos clasicos, puede existir una capacidad administrativa o de logistica.

No seria una moneda visible necesariamente, sino una regla de balance:

- Cada centro urbano aporta capacidad administrativa.
- Cada edificio consume parte de esa capacidad.
- Los edificios lejanos consumen mas.
- Los edificios militares y defensivos consumen mas que los economicos.
- Superar la capacidad no impide construir, pero aumenta costos y deterioro.
- Superar demasiado la capacidad tambien puede reducir seguridad interna y aumentar riesgo de motines.

Esto evita un limite duro y permite decisiones interesantes. El jugador puede sobreexpandirse, pero paga las consecuencias.

### Aparicion de nuevos jugadores

Los nuevos jugadores deben aparecer a distancias optimas de otros imperios.

La ubicacion inicial deberia considerar:

- Distancia minima respecto de bases enemigas.
- Acceso cercano a recursos basicos.
- Espacio suficiente para construir una primera economia.
- Baja probabilidad de ataque inmediato.
- Ausencia de estructuras militares hostiles cercanas.

El mundo puede reservar zonas de aparicion dinamicas. Si una zona queda demasiado poblada, el sistema busca otra region del mapa con mejores condiciones.

La aparicion no debe sentirse como una instancia separada: el jugador nace en el mismo mundo persistente, pero en una ubicacion razonablemente segura.

---

## Mundo unico persistente

El mundo debe ser un unico mapa continuo, compartido por todos los jugadores.

No debe haber dos escalas de juego. No hay "mapa de ciudad" separado del "mapa mundial". La ciudad, el campo, los recursos, las rutas, los ejercitos y los enemigos existen en el mismo espacio.

El desafio de jugabilidad es definir como puede existir un mundo estilo AoE con cientos de jugadores sin que se vuelva caotico, imposible de leer o demasiado facil de conquistar.

Puntos a resolver:

- Como aparecen los nuevos jugadores en el mundo.
- Cuanto espacio inicial necesita cada jugador.
- Como se evita que los jugadores antiguos bloqueen a los nuevos.
- Como se distribuyen recursos comunes y recursos raros.
- Como se maneja la distancia entre imperios.
- Como se protege una base cuando el jugador no esta conectado.
- Que cantidad maxima de poblacion y recursos puede resguardar el Centro Urbano.
- Que condiciones exactas debe cumplir el radio amurallado para activar proteccion offline.
- Que cantidad minima de soldados debe haber para sostener seguridad interna.
- Como se evita que una civilizacion muy grande se vuelva estable sin invertir en orden, comida y defensa.
- Como se evita que el mapa se llene de edificios sin control.
- Como se mantiene la sensacion de RTS sin convertir el mundo en una partida infinita ingobernable.
- Como se logra que la expansion sea posible sin convertirla en crecimiento infinito gratuito.

---

## Diplomacia, alianzas y facciones

Por ahora no se define un sistema de facciones ni alianzas.

El documento debe concentrarse primero en resolver la jugabilidad base del mundo persistente estilo Age of Empires.

Mas adelante se podra decidir si existen:

- Alianzas libres.
- Facciones predeterminadas.
- Diplomacia informal.
- Pactos comerciales.
- Sistema mixto.

Pero no se incorporan todavia como parte del nucleo del diseno.

---

## Problema central de balance

El mayor riesgo del juego es que un jugador o grupo crezca demasiado rapido y conquiste el servidor.

El diseno debe evitarlo con sistemas que se sientan naturales:

- Costos de mantenimiento.
- Renta de infraestructura.
- Deterioro progresivo de edificios abandonados o mal conectados.
- Logistica militar.
- Distancia y tiempo de viaje.
- Defensa territorial fuerte.
- Revueltas o penalizaciones por sobreexpansion.
- Motines, desercion o conflictos internos si falta seguridad.
- Penalizaciones de moral y riesgo de desercion si un jugador grande abusa de jugadores mucho mas debiles.
- Limites de administracion.
- Recursos locales que obliguen a tomar decisiones.
- Protecciones para jugadores desconectados o nuevos.
- Centro Urbano principal protegido como ancla de recuperacion mientras el nucleo amurallado este mantenido.
- Saqueo y destruccion parcial en lugar de eliminacion total.
- Desaparicion gradual de jugadores inactivos cuando el nucleo se deteriora y pierde proteccion.

La meta no es impedir la dominacion, sino hacer que dominar sea dificil, costoso y politicamente inestable.

---

## Tono de experiencia deseado

El juego debe sentirse como:

- Estrategia persistente.
- Mundo vivo.
- Construccion de imperio.
- Economia con decisiones reales.
- Guerra relevante, pero no gratuita.
- Progreso continuo.

No debe sentirse como:

- Un clon de juegos moviles con timers.
- Una partida cerrada de 20 o 40 minutos.
- Un juego donde solo gana quien mas tiempo esta conectado.
- Un simulador pasivo donde el jugador espera para hacer clic.

---

## Decisiones tomadas hasta ahora

- El juego sera de estrategia con inspiracion fuerte en Age of Empires.
- El formato jugable debe ser igual al de Age of Empires.
- El mundo sera una unica escala continua: construccion, aldeanos, tropas, recursos, exploracion y combate ocurren en el mismo mapa.
- El mundo sera persistente, sin limite de partida.
- El servidor debe permitir cientos de usuarios.
- Los nuevos jugadores deben aparecer a distancias optimas para no quedar expuestos a riesgos tempranos.
- No se quieren tiempos largos de construccion.
- Los aldeanos seran unidades visibles y movibles.
- La economia debe ser suficientemente compleja para evitar crecimiento demasiado simple.
- Los recursos deben ser limitados y tener origen fisico en el mapa.
- La madera viene de arboles; el aserradero no produce madera de la nada.
- Los bosques pueden regenerarse si no fueron arrasados por completo; si fueron destruidos, deben replantarse.
- La comida viene de fuentes fisicas o productivas como animales, recoleccion y granjas.
- Las minas pueden agotarse y nuevas minas podran descubrirse mas adelante por excavacion, exploracion o investigacion.
- Las catastrofes naturales quedan como idea futura, fuera de la primera version.
- La expansion no se resolvera por conquista de baldosas o territorios cerrados.
- La expansion debe limitarse con mantenimiento, renta, deterioro, logistica, distancia e influencia.
- Los ataques pueden robar recursos y destruir infraestructura secundaria.
- El Centro Urbano principal no debe ser destruible por ataques normales mientras su nucleo amurallado este activo.
- Si la muralla central se deteriora por inactividad y falta de mantenimiento, el Centro Urbano puede perder proteccion y volverse destruible.
- El Centro Urbano puede funcionar como nucleo de resguardo offline con limite de poblacion y recursos.
- Cada Centro Urbano necesita una muralla central cerrada que lo encierre para activar resguardo.
- La muralla central es mas fuerte que las murallas comunes y se deteriora con el tiempo, no por ataques normales.
- El resguardo offline de recursos debe tener una capacidad maxima, no una mezcla de porcentaje y maximo.
- La capacidad maxima del Centro Urbano aumenta con niveles, edades e investigaciones.
- El Centro Urbano puede guardar poblacion a eleccion del jugador dentro de un limite.
- Las murallas comunes escalan por material, edad, nivel e investigaciones.
- Las murallas de madera pueden ser destruidas por cualquier unidad.
- Las murallas avanzadas deberian requerir unidades de asedio.
- Debe haber soldados para sostener seguridad interna y evitar conflictos civiles.
- La falta de seguridad puede causar motines, desercion o perdida de eficiencia.
- Los conflictos civiles se disparan por falta de comida, pocos soldados, exceso de poblacion, edificios rotos, malas condiciones de vida o impuestos altos sin bienestar.
- Los impuestos altos no son necesariamente un problema si la poblacion vive bien y el imperio ofrece seguridad, comida y prosperidad.
- Atacar jugadores mucho mas chicos no esta prohibido, pero puede afectar la moral y generar riesgo probabilistico de desercion o perdida de tropas.
- Por ahora no se define sistema de facciones ni alianzas.
- No se usara una estructura de dos mapas, celdas o regiones separadas para la jugabilidad.

---

## Preguntas abiertas

1. Como entra un nuevo jugador a un mundo que ya existe y tiene jugadores avanzados?
2. Cuanto espacio inicial protegido deberia tener una base nueva?
3. Como se evita que los jugadores puedan llenar el mapa de edificios?
4. Cuanta poblacion maxima puede resguardar cada Centro Urbano cuando el jugador esta offline?
5. Cual es la capacidad maxima de recursos que puede proteger cada Centro Urbano?
6. Como se calcula si la muralla central esta completa y en buen estado?
7. Cuanto tiempo de inactividad o falta de mantenimiento hace falta para que la muralla central empiece a romperse?
8. Cuantos soldados minimos requiere un nucleo para sostener seguridad interna?
9. Que pasa si hay demasiados aldeanos y pocos soldados: motin, fuga, baja produccion o sabotaje?
10. Como se mide si la poblacion vive bien: comida, vivienda, seguridad, empleo, estabilidad o comercio?
11. Como se evita que un jugador nuevo o saqueado sea atacado repetidamente por jugadores grandes?
12. Como se evita que un atacante destruya periferia y robe almacenes sin activar ningun mecanismo de recuperacion?
13. El combate deberia poder ocurrir contra jugadores desconectados fuera del nucleo protegido?
14. Como se limita la expansion sin usar timers artificiales?
15. Como se evita que un jugador activo durante muchas horas tenga una ventaja imposible de alcanzar?
16. Que pasa cuando una base queda saqueada: reconstruccion, deuda de mantenimiento, ruina parcial o recuperacion protegida?
17. Debe existir comercio entre jugadores?
18. Debe existir blockchain, NFTs, tokens o economia real, considerando que el proyecto actual ya contiene referencias a balances como SOL, USDC y BONK?

---

## Sugerencia inicial de direccion

La direccion actual es un RTS persistente de mundo unico:

- Una unica escala de mapa.
- Aldeanos visibles.
- Construccion directa en el mundo.
- Tropas visibles y movibles como en AoE.
- Costos economicos y logisticos fuertes para sostener expansion.
- Protecciones de jugabilidad para que el mundo pueda sostener cientos de jugadores.

Esto obliga a resolver una pregunta de diseno central:

Como se hace que un mundo estilo Age of Empires sea persistente, justo y jugable cuando hay cientos de jugadores, distintos horarios de conexion y un mapa que no termina a los 40 minutos?

---

## Proximo bloque a definir

El siguiente paso deberia ser definir el nucleo jugable:

- Vista principal del jugador.
- Reglas del mundo unico.
- Aparicion de nuevos jugadores.
- Proteccion de bases.
- Reglas de saqueo.
- Resguardo offline.
- Funcion exacta del Centro Urbano protegido.
- Deterioro por inactividad y desaparicion de jugadores abandonados.
- Recuperacion de jugadores nuevos o saqueados, todavia sin solucion consolidada.
- Condiciones que disparan conflictos civiles.
- Limites de expansion.
- Como se construye.
- Como se producen recursos.
- Como se crean y mueven tropas.
- Como se evita que el servidor sea conquistado demasiado rapido.

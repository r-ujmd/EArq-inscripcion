# Sitio de Inscripción — Escuela de Arquitectura UJMD

Sitio estático (HTML/CSS/JS puro, sin compilación) con la paleta cromática complementaria de la UJMD: azules Navy/Oxford, amarillo UJMD y blanco. Publicado con GitHub Pages: https://r-ujmd.github.io/EArq-inscripcion/

## Archivos

| Archivo | Contenido |
|---|---|
| `ciclo.js` | **Datos que cambian cada ciclo**: número de ciclo, fechas clave, enlaces de Drive/Docs/formularios, avisos de asignaturas y fecha de “última actualización”. |
| `plantilla.js` | Encabezado (aviso superior + menú) y pie de página compartidos, y el código que coloca los datos de `ciclo.js` en las páginas. |
| `index.html` | Página principal |
| `recomendaciones.html` | Recomendaciones del ciclo |
| `instrucciones.html` | Instrucciones para inscripción en línea |
| `faq.html` | Preguntas frecuentes (acordeón con buscador) |
| `styles.css` | Todos los estilos (las páginas no llevan estilos en línea) |
| `script.js` | Menú móvil, buscador y acordeón de la FAQ |
| `logo-ujmd-earq.webp` | Logo UJMD — Escuela de Arquitectura |
| `img/foto-*.jpg` | Fotos que aparecen en transparencia sobre el cintillo azul (800 px de ancho, JPG). La lista está en `FOTOS` dentro de `plantilla.js`. |

## Actualizar para un nuevo ciclo

Normalmente solo hay que editar **`ciclo.js`**:

1. `numero` — p. ej. `'01'`. Se usa en “Fechas clave del ciclo…”, “Recomendaciones ciclo…”, la etiqueta de Recomendaciones, el pie y el título de la pestaña.
2. `ultimaActualizacion` — fecha que aparece bajo la hoja interactiva de horarios.
3. `fechaLimite3aMatricula` — fecha límite de la solicitud de 3.ª matrícula (aparece en la portada y en Recomendaciones).
4. `fechas` — tarjetas de “Fechas clave” de la portada. Puedes agregar o quitar elementos.
5. `enlaces` — todos los enlaces de Drive, Docs y el formulario de problemas.
6. `avisosAsignaturas` — alertas de “Consideraciones de asignaturas” en Recomendaciones (`tipo: 'gris'` o `'amarilla'`).
7. `textoBotonHorarios` — texto del botón amarillo de horarios en la portada.

Los textos que no dependen del ciclo (instrucciones, FAQ, aclaraciones) siguen en su página HTML.

## Encabezado y pie

Cada página solo incluye `<sitio-encabezado activo="…"></sitio-encabezado>` y `<sitio-pie></sitio-pie>`; el contenido real está en `plantilla.js`. Para cambiar el menú, el correo de contacto o los enlaces del pie, edita ese archivo una sola vez.

Una página nueva debe cargar en su `<head>`, en este orden:

```html
<link rel="stylesheet" href="styles.css">
<script src="ciclo.js"></script>
<script src="plantilla.js"></script>
```

y `<script src="script.js"></script>` al final del `<body>`.

## Probar localmente

Desde la carpeta del sitio:

```bash
python -m http.server 8000
```

y abre http://localhost:8000/. (También funciona abriendo `index.html` directamente, porque no se cargan archivos con `fetch`.)

## Publicar en GitHub Pages

Haz commit y push a `main`, o desde GitHub: Add file → Upload files → arrastra los archivos → Commit. El sitio se actualiza solo en ~1 minuto.

## Personalización

- **Colores:** variables al inicio de `styles.css`, con la paleta cromática complementaria del Manual de Marca UJMD: Amarillo UJMD `#FFB600`, Azul Neón `#0043FF`, Zafiro `#3164B2`, Persia `#2F4BA3`, Cobalto `#2A3B89`, Navy `#182255`, Oxford `#161834` y Negro. Debajo están los tonos derivados para texto y fondos.
- **Tipografía:** Montserrat en títulos y Red Hat Display en texto (Google Fonts), igual que ujmd.edu.sv.
- **Fotos del cintillo:** para cambiarlas, reemplaza los archivos en `img/` con el mismo nombre (o edita la lista `FOTOS` en `plantilla.js`). Se muestran en escala de grises mezcladas con el azul; la intensidad se ajusta con `opacity` en `.hero-fotos` (`styles.css`).
- **Logo:** `logo-ujmd-earq.webp`, recortado con la clase `.logo-cut` en `styles.css` (la imagen tiene márgenes transparentes; los porcentajes muestran solo el área visible, y en pantallas de 480 px o menos se reduce). Si cambias la imagen, ajusta esos valores y el nombre del archivo en `plantilla.js`.
- El enlace “Listado de asignaturas y grupos” del sitio original estaba roto, por eso no aparece aquí.

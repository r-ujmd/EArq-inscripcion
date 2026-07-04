# Sitio de Inscripción — Escuela de Arquitectura UJMD

Rediseño del sitio de Google Sites como sitio estático (HTML/CSS/JS puro, sin dependencias).

## Archivos

- `index.html` — Página principal
- `recomendaciones.html` — Recomendaciones ciclo 01
- `instrucciones.html` — Instrucciones para inscripción en línea
- `faq.html` — Preguntas frecuentes (acordeón)
- `styles.css` — Estilos compartidos
- `script.js` — Menú móvil + acordeón FAQ

## Cómo publicarlo

**GitHub Pages:** crea un repositorio, sube estos archivos a la raíz, luego Settings → Pages → Deploy from branch → `main` / root.

**Netlify:** arrastra esta carpeta completa a https://app.netlify.com/drop y listo.

## Cómo actualizarlo

- Colores: edita las variables al inicio de `styles.css` (`--rojo`, `--azul`, etc.).
- Enlaces a Drive/formularios: busca la URL en el HTML y reemplázala.
- El video instructivo original (mp4 en Drive) no se incluyó; puedes agregarlo con un `<iframe>` de Drive donde quieras.
- El enlace "Listado de asignaturas y grupos" del sitio original estaba roto, por eso no aparece aquí.

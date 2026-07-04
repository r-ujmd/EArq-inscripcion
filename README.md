# Sitio de Inscripción — Escuela de Arquitectura UJMD

Sitio estático (HTML/CSS/JS puro) con la paleta de la EArq: gris oscuro, blanco y amarillo.

## Archivos

- `index.html` — Página principal
- `recomendaciones.html` — Recomendaciones ciclo 01
- `instrucciones.html` — Instrucciones para inscripción en línea
- `faq.html` — Preguntas frecuentes (acordeón)
- `styles.css` — Estilos compartidos
- `script.js` — Menú móvil + acordeón FAQ

## Cómo actualizar en GitHub Pages

Reemplaza los archivos existentes en el repositorio (Add file → Upload files → arrastra → Commit). El sitio se actualiza solo en ~1 minuto.

## Personalización

- **Colores:** edita las variables al inicio de `styles.css` (`--gris`, `--amarillo`, etc.).
- **Logo:** recreado en HTML/CSS (clases `logo-earq`, `logo-e`, `logo-sep`, `logo-desc` en `styles.css`) con la fuente Poppins. No depende de ninguna imagen externa. Si prefieres usar el archivo oficial, sube `logo.png` al repo y reemplaza el bloque `<a class="logo">...` por `<img src="logo.png" style="height:46px">`.
- **Enlaces a Drive/formularios:** busca la URL en el HTML y reemplázala.
- El enlace "Listado de asignaturas y grupos" del sitio original estaba roto, por eso no aparece aquí.

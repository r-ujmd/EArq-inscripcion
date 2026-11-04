/* =====================================================================
   PLANTILLA COMPARTIDA — encabezado, pie y datos del ciclo
   ---------------------------------------------------------------------
   Se carga en el <head> de cada página, después de ciclo.js.

   · <sitio-encabezado activo="index"></sitio-encabezado>
       Se reemplaza por la barra de aviso + el header con el menú.
       "activo" marca la página actual: index | recomendaciones | instrucciones | faq
   · <sitio-pie></sitio-pie>
       Se reemplaza por el footer + el botón flotante de correo.

   Atributos para mostrar datos de ciclo.js en cualquier elemento:
   · data-ciclo="numero"                    → pone el texto
   · data-ciclo-href="enlaces.horarios"     → pone el href del enlace
   · data-ciclo-lista="fechas"              → genera las tarjetas de fechas clave
   · data-ciclo-lista="avisosAsignaturas"   → genera las alertas de avisos
   ===================================================================== */

(function () {
  var C = window.CICLO || {};
  var CORREO = 'arquitectura@ujmd.edu.sv';

  var PAGINAS = [
    { id: 'index',           url: 'index.html',           menu: 'Inicio',          pie: 'Inicio' },
    { id: 'recomendaciones', url: 'recomendaciones.html', menu: 'Recomendaciones', pie: 'Recomendaciones ciclo <span data-ciclo="numero">' + C.numero + '</span>' },
    { id: 'instrucciones',   url: 'instrucciones.html',   menu: 'Instrucciones',   pie: 'Instrucciones en línea' },
    { id: 'faq',             url: 'faq.html',             menu: 'FAQ',             pie: 'Preguntas frecuentes' }
  ];

  function externo(url, texto, clase) {
    return '<a href="' + url + '" target="_blank" rel="noopener"' + (clase ? ' class="' + clase + '"' : '') + '>' + texto + '</a>';
  }

  function encabezado(activo) {
    var menu = PAGINAS.map(function (p) {
      return '<li><a href="' + p.url + '"' + (p.id === activo ? ' class="activo"' : '') + '>' + p.menu + '</a></li>';
    }).join('');

    return '' +
      '<div class="aviso-superior">' +
        '¿Problemas con tu inscripción? Escribe a <a href="mailto:' + CORREO + '">' + CORREO + '</a>' +
      '</div>' +
      '<header class="header">' +
        '<nav class="nav">' +
          '<a href="index.html" class="logo" aria-label="Universidad Dr. José Matías Delgado — Escuela de Arquitectura">' +
            '<span class="logo-cut"><img src="logo-ujmd-earq.webp" alt="Universidad Dr. José Matías Delgado — Escuela de Arquitectura"></span>' +
          '</a>' +
          '<button class="btn-menu" aria-label="Abrir menú">☰</button>' +
          '<ul class="menu">' + menu +
            '<li>' + externo('https://www.ujmd.edu.sv/', 'UJMD ↗', 'externo') + '</li>' +
          '</ul>' +
        '</nav>' +
      '</header>';
  }

  function pie() {
    function lista(items) { return '<ul>' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>'; }

    return '' +
      '<footer class="footer">' +
        '<div class="contenedor">' +
          '<div class="footer-grid">' +
            '<div><h4>Inscripción · Escuela de Arquitectura</h4><p>Universidad Dr. José Matías Delgado</p></div>' +
            '<div><h4>Navegación</h4>' + lista(PAGINAS.map(function (p) { return '<a href="' + p.url + '">' + p.pie + '</a>'; })) + '</div>' +
            '<div><h4>UJMD</h4>' + lista([
              externo('https://www.ujmd.edu.sv/', 'Sitio institucional'),
              externo('https://www.ujmd.edu.sv/admisiones/', 'Admisiones'),
              externo('https://www.ujmd.edu.sv/aranceles/', 'Aranceles'),
              externo('https://www.ujmd.edu.sv/calendario/', 'Calendario'),
              externo('https://www.ujmd.edu.sv/avisos/', 'Avisos')
            ]) + '</div>' +
            '<div><h4>Contacto</h4>' + lista([
              '<a href="mailto:' + CORREO + '">' + CORREO + '</a>',
              '<a href="tel:+50322129400">2212-9400 ext. 124</a>',
              externo('https://www.ujmd.edu.sv/facultades/escuela-de-arquitectura/', 'Escuela de Arquitectura'),
              externo('https://uvirtual.ujmd.edu.sv/', 'UVirtual')
            ]) + '</div>' +
          '</div>' +
          '<div class="footer-legal">© Escuela de Arquitectura UJMD — Sitio informativo de inscripción</div>' +
        '</div>' +
      '</footer>' +
      '<a class="btn-flotante" href="mailto:' + CORREO + '" title="Escríbenos: ' + CORREO + '" aria-label="Contacto por correo">✉</a>';
  }

  // Elementos que se sustituyen a sí mismos por el HTML compartido en cuanto el
  // navegador los lee, así el resultado es idéntico a tenerlo escrito en la página.
  function definir(nombre, generar) {
    customElements.define(nombre, class extends HTMLElement {
      connectedCallback() {
        this.insertAdjacentHTML('beforebegin', generar(this.getAttribute('activo')));
        this.remove();
      }
    });
  }
  definir('sitio-encabezado', encabezado);
  definir('sitio-pie', pie);

  // ---------- Datos del ciclo dentro del contenido ----------
  function valor(ruta) {
    return ruta.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, C);
  }

  var LISTAS = {
    fechas: function (f) {
      return '<div class="fecha-item"><div class="fecha-dia">' + f.dia + '</div><p>' + f.texto + '</p></div>';
    },
    avisosAsignaturas: function (a) {
      return '<div class="alerta alerta-' + a.tipo + '"><strong>' + a.titulo + '</strong><p>' + a.texto + '</p></div>';
    }
  };

  function aplicarCiclo() {
    // Título y descripción de la pestaña: actualiza "ciclo NN" con el número de ciclo.js
    var desc = document.querySelector('meta[name="description"]');
    document.title = document.title.replace(/ciclo [\d-]+/i, 'ciclo ' + C.numero);
    if (desc) desc.content = desc.content.replace(/ciclo [\d-]+/i, 'ciclo ' + C.numero);

    document.querySelectorAll('[data-ciclo]').forEach(function (el) {
      var v = valor(el.dataset.ciclo);
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-ciclo-href]').forEach(function (el) {
      var v = valor(el.dataset.cicloHref);
      if (v !== undefined) el.href = v;
    });
    document.querySelectorAll('[data-ciclo-lista]').forEach(function (el) {
      var items = valor(el.dataset.cicloLista) || [];
      el.innerHTML = items.map(LISTAS[el.dataset.cicloLista]).join('');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarCiclo);
  } else {
    aplicarCiclo();
  }
})();

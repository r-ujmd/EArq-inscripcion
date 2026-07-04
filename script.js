// Menú móvil
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
if (btnMenu && menu) {
  btnMenu.addEventListener('click', () => menu.classList.toggle('abierto'));
}

// Buscador FAQ
const buscadorFaq = document.getElementById('buscador-faq');
if (buscadorFaq) {
  const items = document.querySelectorAll('.acordeon-item');
  const sinResultados = document.getElementById('sin-resultados');
  buscadorFaq.addEventListener('input', () => {
    const consulta = buscadorFaq.value.trim().toLowerCase();
    let visibles = 0;
    items.forEach((item) => {
      const coincide = item.textContent.toLowerCase().includes(consulta);
      item.style.display = coincide ? '' : 'none';
      if (coincide) visibles++;
    });
    if (sinResultados) sinResultados.style.display = visibles ? 'none' : 'block';
  });
}

// Acordeón FAQ
document.querySelectorAll('.acordeon-boton').forEach((boton) => {
  boton.addEventListener('click', () => {
    const item = boton.parentElement;
    const panel = item.querySelector('.acordeon-panel');
    const abierto = item.classList.contains('abierto');

    // Cierra los demás
    document.querySelectorAll('.acordeon-item.abierto').forEach((otro) => {
      otro.classList.remove('abierto');
      otro.querySelector('.acordeon-panel').style.maxHeight = null;
    });

    if (!abierto) {
      item.classList.add('abierto');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

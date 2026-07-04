// Menú móvil
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
if (btnMenu && menu) {
  btnMenu.addEventListener('click', () => menu.classList.toggle('abierto'));
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

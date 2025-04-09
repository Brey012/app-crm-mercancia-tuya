import Swal from "sweetalert2";

export function generarToken() {
    return "Token" + Math.random().toString(36).substring(2, 10)
}

export function alertaRedireccion(fn, title, mensaje, icono, url) {
  let timerInterval;
  Swal.fire({
    title: title,
    html: mensaje,
    icon: icono,
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      fn(url)
    },
  });
}

export function alertaGenerica(titulo, mensaje, icon) {
    Swal.fire({
        icon: icon,
        title: titulo,
        text: mensaje,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}

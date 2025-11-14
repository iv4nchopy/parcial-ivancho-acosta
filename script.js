// Botón cambiante: al hacer click agrega/clasifica la clase 'clicked' durante 1.2s
document.addEventListener("DOMContentLoaded", function(){
  const boton = document.getElementById("botonCambiante");
  if(boton){
    boton.addEventListener("click", function(e){
      e.preventDefault();
      boton.classList.add("clicked");
      setTimeout(()=> boton.classList.remove("clicked"), 1200);
    });
  }

  // Reveal on scroll (IntersectionObserver) para posts del blog
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.to-reveal').forEach(el => observer.observe(el));

  // Opcional: mostrar una bienvenida simple en index (sin prompt)
  if(location.pathname.endsWith("index.html") || location.pathname.endsWith("/")){
    // puedes habilitar alert si querés: alert("Bienvenido al sitio de Lewandowski");
    const el = document.querySelector('.intro p');
    if(el) el.innerHTML += " <strong>Bienvenido/a — explora las secciones usando los botones.</strong>";
  }
});

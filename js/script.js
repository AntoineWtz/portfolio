function contactAside() {
  const contact = document.querySelector('.contact');
  const aside = document.querySelector('.accueil-aside');
  let asideContent = false;

  contact.addEventListener('click', toggleAside);

  function toggleAside() {
    if (!asideContent) {
      aside.style.backgroundColor = "#827191";
      aside.innerHTML = `
          <p class="titre-aside">Bonjour</p>
           <a href="mailto:awtz.dev@gmail.com">awtz.dev@gmail.com</a>
          <p>
            <a href="https://www.linkedin.com/in/antoine-wurtz/" target="_blank">LinkedIn</a>
            <a href="https://github.com/AntoineWtz" target="_blank">GitHub</a>
            <a href="./img/CV-Antoine-Wurtz.pdf" target="_blank">CV</a>
          </p>`;
      asideContent = true;
    } else {
      aside.innerHTML = "";
      asideContent = false;
      aside.style.backgroundColor = "#13282B";
    }
  }
}
document.addEventListener("DOMContentLoaded", contactAside);
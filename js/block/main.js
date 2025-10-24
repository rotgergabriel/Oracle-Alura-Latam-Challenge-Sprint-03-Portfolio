import { data } from "../db.js"

const profile = document.querySelector('[data-main-profile]')

profile.innerHTML = data.profile.map(element =>
`   <div class="main__container--title">
    <p class="main__author">${element.fullName}</p>
        <h1 class="main__title">${element.title}</h1>
        <h2 class="main__subtitle">${element.subtitle}</h2>
        <ul class="main__links">
            <li><a class="main__link underline" href=${element.github} target="_blank">GitHub<span>&#9701</span></a></li>
            <li><a class="main__link underline" href=${element.linkedin} target="_blank">Linkedin<span>&#9701</span></a></li>
    </ul>
    <ul>
        <li class="main__link-select-container">
            <label for="cv-language-select" class="main__link-select-label">
                Select language for CV download
            </label>
            <select class="main__link-select-items" id="cv-language-select" onchange="handleCVDownload(this)">
                <option value="" disabled selected hidden>CV Download</option>
                <option value="/assets/file/CV_Rotger_Gabriel_Junior_Fronted_Developer_English.pdf">English</option>
                <option value="/assets/file/CV_Rotger_Gabriel_Junior_Fronted_Developer_Español.pdf">Spanish</option>
                <option value="/assets/file/CV_Rotger_Gabriel_Junior_Fronted_Developer_Italiano.pdf">Italian</option>
            </select>
        </li>
    </ul>
    </div>`
).join('')

// Función JavaScript para manejar la descarga cuando se selecciona una opción
function handleCVDownload(selectElement) {
    const filePath = selectElement.value;

    // Verifica que se haya seleccionado un valor real (no la opción "CURRICULUMS")
    if (filePath) {

        // 1. Crea un elemento de enlace temporal invisible
        const a = document.createElement('a');
        a.href = filePath;

        // 2. Extrae el nombre del archivo de la ruta para el atributo 'download'
        // Esto permite que el navegador use un nombre de archivo limpio (ej. CV_..._Español.pdf)
        const fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
        a.download = fileName;

        // 3. Simula un clic para forzar la descarga
        document.body.appendChild(a);
        a.click();

        // 4. Limpia el elemento temporal
        document.body.removeChild(a);

        // 5. Opcional: Resetea el select a la opción predeterminada ("CURRICULUMS")
        // Esto permite al usuario descargar otro idioma inmediatamente si lo desea.
        selectElement.value = "";
    }
}

window.handleCVDownload = handleCVDownload;
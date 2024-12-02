const contacte = document.getElementById("formulari");
contacte.addEventListener("submit", startCheck);
function startCheck(event)
{
    let errors = [];
    let valid = true;

    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let assumpte = document.getElementById("assumpte");
    let body = document.getElementById("body");

    if(name.value.length < 1){
        errors.push("El nom no té el format correcte.");
        valid = false;
    }

    if(mail.value.length < 1){
        errors.push("El email no té el format correcte.");
        valid = false;
    }

    if(assumpte.value.length < 2){
        errors.push("El títol no té el format correcte.");
        valid = false;
    }

    if(body.value.length < 4 || body.value.length > 250){
        errors.push("El cos del missatge no té el format correcte.");
        valid = false;
    }

    if(!valid) {
        let contenterror = document.getElementById("contenterror");
        if (contenterror != null) {
            contenterror.remove();
        }

        let diverrors = document.getElementById("errors");
        diverrors.innerHTML += "<div id='contenterror'></div>";
        let errorcontingut = document.getElementById("contenterror");
        for (let error of errors) {
            errorcontingut.append(error);
            errorcontingut.appendChild(document.createElement("br"));
        }
        event.preventDefault();
        let contacte = document.getElementById("contacte");
        contacte.classList.add("transit");
    }
}

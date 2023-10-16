const sendResponse = document.getElementById("send-btn");
const popup = document.getElementById("popup");
const questionSuivant = document.getElementById("pop-up-btn");
const popUpTitle = document.getElementById("pop-up-title");
const popUpText = document.getElementById("pop-up-text");
const titreEnigme = document.querySelector(".e-card-title");
const enigme1 = document.querySelector(".e-card-quest");
const enigme2 = document.querySelector(".e-card-quest-2");
const enigme3 = document.querySelector(".e-card-quest-3");
const closeP = document.getElementById('close');
const indice = document.querySelector(".e-card-indice div");
const alphabetContainer = document.getElementById("alphabet-container");
const body = document.body;


var reponse1 = `SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS`;
var resultat_1 = reponse1.toLowerCase();

var reponse2 = `Le film debute a Oackland en Californie. Il sagit de la ville dont est originaire Ryan Coogler et egalement la ville qui a vu naitre le mouvement politique des black panthers`;
var resultat_2 = reponse2.toLowerCase();

var reponse3 = `LE ROI LION`;
var resultat_3 = reponse3.toLowerCase();

function fermeturePopUp() {
    popup.style.display = "none";
    body.style.overflow = "auto";

    const reponseEnigme = document.getElementById("reponse-enigme");
    reponseEnigme.value = "";
}

function ouverturePopUp() {
    popup.style.display = "block";
    body.style.overflow = "hidden";

    const reponseEnigme = document.getElementById("reponse-enigme");
    reponseEnigme.value = "";
}

function popUpFinished() {
    const popup2 = document.getElementById("enigmaPopup");
    const countdownElement = document.getElementById("countdown");

    popup2.style.display = "block";

    const endTime = new Date().getTime() + 60000;

    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = endTime - now;
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `00 : 00 : ${seconds}`;

        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "Redirection vers la page d'accueil...";

            setTimeout(function() {
                window.location.href = "enigme.html";
            }, 1000);
        }
    }, 1000);
}

sendResponse.addEventListener("click", function() {
    const reponseEnigme = document.getElementById("reponse-enigme");
    const reponse = reponseEnigme.value.trim();
    const reponseFormat = reponse.toLowerCase();

    if (titreEnigme.textContent.trim() == "enigme numero 1" ) {
        if (reponseFormat == resultat_1){
            console.log("OK");
            popUpTitle.textContent = "Bravo !";
            popUpText.textContent = "Tu as trouvé la réponse. Es-tu prêt pour l'énigme suivantes ?";
            questionSuivant.textContent = "question suivante";
        }else {
            console.log("OHHHH");
            popUpTitle.textContent = "Dommage !";
            popUpText.textContent = "Tu n'as pas trouvé la réponse. Tente encore ta chance. Courage !";
            questionSuivant.textContent = "reesayer";

        }
        ouverturePopUp();
    }else if (titreEnigme.textContent.trim() == "enigme numero 2"){
        if (reponseFormat == resultat_2){
            console.log("OK");
            popUpTitle.textContent = "Bravo!";
            popUpText.textContent = "Tu as trouvé la réponse. Es-tu prêt pour l'énigme suivantes?";
            questionSuivant.textContent = "question suivante";
        }else {
            console.log("OHHHH");
            popUpTitle.textContent = "Dommage !";
            popUpText.textContent = "Tu n'as pas trouvé la réponse. Tente encore ta chance. Courage !";
            questionSuivant.textContent = "reesayer";

        }
        ouverturePopUp();
    }else {
        if (reponseFormat == resultat_3){
            console.log("OK");
            popUpFinished();
        }else {
            console.log("OHHHH");
            popUpTitle.textContent = "Dommage !";
            popUpText.textContent = "Tu n'as pas trouvé la réponse. Tente encore ta chance. Courage !";
            questionSuivant.textContent = "reesayer";
            ouverturePopUp();
        }
    }

    console.log(questionSuivant.textContent);
});

questionSuivant.addEventListener("click", function() {
    var textContent = questionSuivant.textContent.trim();

    if (textContent === "question suivante") {
        if(enigme2.classList.contains("hide") && enigme3.classList.contains("hide")) {
            enigme1.classList.add("hide");
            enigme2.classList.remove("hide");

            titreEnigme.innerHTML = "<h1>enigme numero <span>2</span></h1>";

            indice.innerHTML = `<div>
                                Le savait tu ?
                                    <div class="indice-text">
                                    Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français
                                    est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans
                                    une phrase. Et si tu regardais quel symbole revient le plus souvent pour en
                                    déduire son décalage dans l’alphabet ? 
                                    </div>
                                </div>`;

            fermeturePopUp();

        }else if (enigme1.classList.contains("hide") && enigme3.classList.contains("hide")) {
            enigme3.classList.remove("hide");
            enigme2.classList.add("hide");

            titreEnigme.innerHTML = "<h1>enigme numero <span>3</span></h1>";

            indice.innerHTML = `<div class="indice">
            Le savait tu ?
                <div class="indice-text">
                Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement
                composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système
                binaire des ordinateurs actuels car toute lettre pouvait être construite avec un
                enchainement précis de ces deux lettres, tandis que le système binaire
                informatique utilise 0 et 1.
                </div>
            </div>`;

            fermeturePopUp();

        }else{
            enigme1.classList.remove("hide");
            enigme3.classList.add("hide");

            titreEnigme.innerHTML = "<h1>enigme numero <span>1</span></h1>";

            fermeturePopUp();

        }
    }else {
        fermeturePopUp();
    }
});


closeP.addEventListener('click', () => {
    const popup2 = document.getElementById("enigmaPopup");
    popup2.style.display = "none";
    window.location.href = "enigme.html";
});

function generateAlphabet() {
    const alphabetContainer = document.getElementById("alphabet-container"); // Obtenez l'élément parent où vous souhaitez afficher l'alphabet

    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i); 
        const container = document.createElement("div"); 
        container.textContent = `${letter} = `; 
        const styledLetter = document.createElement("span");
        styledLetter.textContent = `${letter}; `; 
        styledLetter.classList.add("font");
        container.appendChild(styledLetter);
        alphabetContainer.appendChild(container);
    }
}

generateAlphabet();


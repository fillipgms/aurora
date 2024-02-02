const card = document.getElementById("card");
const slide = document.querySelectorAll(".slide");
const passar = document.getElementById("passar");
const voltar = document.getElementById("voltar");
const profiles = document.querySelectorAll(".profile");
const infoBasicas = document.getElementById("name");
const infoEtc = document.getElementById("info");
import about from "../data/about.js";

const NUM_SLIDES = slide.length;
let ativo = document.querySelector(".active");

passar.addEventListener("click", navigateSlide.bind(null, 1));
voltar.addEventListener("click", navigateSlide.bind(null, -1));

profiles.forEach((profile, index) => {
    profile.addEventListener("click", () => navigateTo(index));
});

function navigateSlide(direction) {
    const indiceAtivo = Array.from(slide).indexOf(ativo);
    let index = (indiceAtivo + direction + NUM_SLIDES) % NUM_SLIDES;

    ativo.classList.remove("active");
    ativo = slide[index];
    ativo.classList.add("active");

    card.style.transform = `translateX(-${300 * index}px)`;

    updateInfo(index);
    loadCompetencias(index);
}

function navigateTo(index) {
    ativo.classList.remove("active");
    ativo = slide[index];
    ativo.classList.add("active");

    card.style.transform = `translateX(-${300 * index}px)`;

    updateInfo(index);
    loadCompetencias(index);
}

function updateInfo(index = 0) {
    infoBasicas.children[0].innerHTML = about[index].nome;
    infoBasicas.children[1].innerHTML = about[index].posicao;
}

function loadCompetencias(i = 0) {
    const competenciasList = document.createElement("ul");

    about[i].competencias.forEach((comp) => {
        const listItem = document.createElement("li");
        listItem.textContent = comp;
        competenciasList.appendChild(listItem);
    });

    infoEtc.innerHTML = "";
    infoEtc.appendChild(competenciasList);
}

loadCompetencias();
updateInfo();

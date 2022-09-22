import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;

const crearChistesHtml = () => {
    const html = ` 
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group-numbered">
    </ol>
    `

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
};

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async () => {

        btnOtro.disabled = true;

        dibujarChiste(await obtenerChiste());

        btnOtro.disabled = false;
    });
};

const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');

    olItem.innerHTML = `${chiste.value} <div class="image-parent">
    <img src="${chiste.icon_url}" class="img-fluid" alt="chuck">
</div>`;
    olItem.classList.add('list-group-item');
    olItem.classList.add('d-flex');
    olItem.classList.add('justify-content-between');
    olItem.classList.add('align-items-center');

    olList.append(olItem);
};

export const init = () => {
    crearChistesHtml();
    eventos();
};
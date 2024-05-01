const urlEstado =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

window.addEventListener("load", async function () {
    const request = await fetch(urlEstado);
    const response = await request.json();

    const options = document.createElement("optgroup");
    options.setAttribute("label", "Estados");
    response.forEach(function (estado) {
        options.innerHTML += "<option>" + estado.sigla + "</option>";
    });
    estado.append(options);
});

estado.addEventListener("change", async function () {
    const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios?orderBy=nome`;
    const request = await fetch(urlCidades);
    const response = await request.json();

    let options = "";
    response.forEach(function (cidades) {
        options += "<option>" + cidades.nome + "</option>";
    });
    cidade.innerHTML = options;
});

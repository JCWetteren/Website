const setup = () => {
    $(`#bestuur`).on("click", openBestuur);
    $(`#trainingen`).on("click",openTrainingen);
}

const openBestuur = () => {
    $(`.index`).addClass("hidden");
    $(`.bestuur`).removeClass("hidden");
    $(`.trainingen`).addClass("hidden");

}

const openTrainingen = () => {
    $(`.index`).addClass("hidden");
    $(`.bestuur`).addClass("hidden");
    $(`.trainingen`).removeClass("hidden");

}

window.addEventListener("load", setup)
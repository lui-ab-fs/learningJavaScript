function recomendar(genero){
    let elementoTextoRecomendarComedia = document.getElementById("textoRecomendarComedia");
    let elementoTextoRecomendarCrimen = document.getElementById("textoRecomendarCrimen");
    let elementoTextoRecomendarDrama = document.getElementById("textoRecomendarDrama");
    let elementoTextoRecomendarMusical = document.getElementById("textoRecomendarMusical");

    let elementoTextoEdad = document.getElementById("textoEdad");
    let edad = elementoTextoEdad.value;

    switch(genero){
        case 'comedia':
            if (edad < 13) {
                elementoTextoRecomendarComedia.textContent = "Back to the Future";
            } else if (edad >= 13 && edad <= 16) {
                elementoTextoRecomendarComedia.textContent = "The Truman Show";
            } else if (edad > 16) {
                elementoTextoRecomendarComedia.textContent = "The Wolf of Wall Street";
            }
            break;
        case 'crimen':
            if (edad < 13) {
                elementoTextoRecomendarCrimen.textContent = "No hay películas";
            } else if (edad >= 13 && edad <= 16) {
                elementoTextoRecomendarCrimen.textContent = "El Secreto de sus Ojos";
            } else if (edad > 16) {
                elementoTextoRecomendarCrimen.textContent = "The Godfather";
            }
        break;
        case 'drama':
            if (edad < 13) {
                elementoTextoRecomendarDrama.textContent = "Casablanca";
            } else if (edad >= 13 && edad <= 16) {
                elementoTextoRecomendarDrama.textContent = "The Shawshank Redemption";
            } else if (edad > 16) {
                elementoTextoRecomendarDrama.textContent = "Taxi Driver";
            }
            break;
        case 'musical':
            if (edad < 13) {
                elementoTextoRecomendarMusical.textContent = "La La Land";
            } else if (edad >= 13 && edad <= 16) {
                elementoTextoRecomendarMusical.textContent = "Les Miserables";
            } else if (edad > 16) {
                elementoTextoRecomendarMusical.textContent = "The Rocky Horror Picture Show";
            }
            break;
}
}
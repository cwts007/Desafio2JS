function calcularStickers() {
    const sticker1 = parseInt(document.getElementById("sticker1Input").value);
    const sticker2 = parseInt(document.getElementById("sticker2Input").value);
    const sticker3 = parseInt(document.getElementById("sticker3Input").value);

    const totalStickers = sticker1 + sticker2 + sticker3;

    if (totalStickers <= 10) {
        document.getElementById("resultado").textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        document.getElementById("resultado").textContent = "Llevas demasiados stickers.";
    }
}

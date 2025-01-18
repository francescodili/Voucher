// app.js

// Cambia lo sfondo dopo 2 secondi
setTimeout(() => {
    document.body.classList.add('noidue');
}, 2000);

// Array di oggetti con i PDF e le immagini
const pdfs = [
    { name: "Il posto delle fragole", url: "Posto delle fragole.pdf", image: "fragole.jpeg" },
    { name: "Eyes Wide Shut", url: "default.pdf", image: "eyes.jpg" },
    { name: "Picnic a Hanging Rock", url: "default.pdf", image: "picnic.jpg" }
];

// Seleziona il div per la lista
const pdfList = document.getElementById("pdf-list");

// Genera i link ai PDF
pdfs.forEach(pdf => {
    const container = document.createElement("div");
    container.style.marginBottom = "20px";

    const link = document.createElement("a");
    link.href = pdf.url;
    link.textContent = pdf.name;
    link.target = "_blank"; // Apre il link in una nuova scheda

    const image = document.createElement("img");
    image.src = pdf.image;
    image.alt = pdf.name;
    image.style.width = "100px";
    image.style.borderRadius = "10px";
    image.style.marginTop = "10px";

    container.appendChild(link);
    container.appendChild(image);
    pdfList.appendChild(container);
});

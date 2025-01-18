// Array di oggetti con i PDF caricati
const pdfs = [
    { name: "Concerto XYZ", url: "biglietto1.pdf" },
    { name: "Teatro ABC", url: "biglietto2.pdf" }
];

// Seleziona il div per la lista
const pdfList = document.getElementById("pdf-list");

// Genera i link ai PDF
pdfs.forEach(pdf => {
    const link = document.createElement("a");
    link.href = pdf.url;
    link.textContent = pdf.name;
    link.target = "_blank"; // Apre il link in una nuova scheda
    pdfList.appendChild(link);
    pdfList.appendChild(document.createElement("br"));
});


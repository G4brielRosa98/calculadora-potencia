
// Dados do enlace
const potencialOLT = Number(process.argv[2]);    // potência de saida da OLT, em dBm
const distanciaKm = Number(process.argv[3]);   // tamanho da fribra, em km
if (process.argv.length < 4) {
    console.log("Uso: node potencia.js <potência da OLT em dBm> <distância em km>");
    console.log("Exemplo: node potencia.js 4 3");
    process.exit(1)
}
const perdaPorKm = 0.35;    // perda da fibra, em dB por km

// Cálculo
const perdaFibra = distanciaKm * perdaPorKm;

// Resultado
console.log("Perda na fibra:", perdaFibra.toFixed(2), "dB");

const quantidadeEmendas = 4;
const perdaPorEmenda = 0.1;  // dB por emenda
const perdaEmendas = quantidadeEmendas * perdaPorEmenda;

const quantidadeConector = 2;
const perdaPorConector = 0.5;  // dB por Conector
const perdaConector = quantidadeConector * perdaPorConector;

console.log("Perda nas emendas:", perdaEmendas.toFixed(2), "dB");
console.log("Perda nas conectores:", perdaConector.toFixed(2), "dB");

const perdaSplitter = 10.5;  // splitter 1:8, em dB
const perdaTotal = perdaFibra + perdaEmendas + perdaConector + perdaSplitter;
const potenciaONU = potencialOLT - perdaTotal;

console.log("Perda total:", perdaTotal.toFixed(2), "dB");
console.log("Potência na ONU:", potenciaONU.toFixed(2), "dBm");

if (potenciaONU > -27) {
    console.log("Enlace OK");
} else {
    console.log("Enlace reprovado");
}


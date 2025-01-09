const fs = require('fs');

// Lê o JSON
const data = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));
const faturamento = data.faturamento;

// Remove dias sem faturamento (0)
const diasValidos = faturamento.filter(valor => valor > 0);

// Calcula menor e maior faturamento
const menorFaturamento = Math.min(...diasValidos);
const maiorFaturamento = Math.max(...diasValidos);

// Calcula a média dos dias com faturamento
const mediaMensal = diasValidos.reduce((sum, val) => sum + val, 0) / diasValidos.length;

// Conta dias acima da média
const diasAcimaDaMedia = diasValidos.filter(valor => valor > mediaMensal).length;

// Exibe os resultados
console.log(`Menor faturamento diário: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento diário: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);

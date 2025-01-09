const fs = require('fs');

// Lendo e parseando o JSON
const dados = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

// Filtra os dias com faturamento maior que zero
const diasComFaturamento = dados.filter(dia => dia.valor > 0);

// Calcula menor e maior faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

// Calcula a média mensal (ignorando dias sem faturamento)
const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Conta os dias com faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

// Exibe os resultados formatados
console.log(`Menor faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Média mensal (excluindo dias sem faturamento): R$${mediaMensal.toFixed(2)}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);

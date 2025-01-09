const numero =10; //Coloquei apenas o 10 primeiros termos de Fibonacci
let num1 = 0, num2 = 1, proximoTermo;

console.log('Série dos números Fibonacci:');

for (let i = 1; i <= numero; i++) {
    console.log(num1);
    proximoTermo = num1 + num2;
    num1 = num2;
    num2 = proximoTermo;
}
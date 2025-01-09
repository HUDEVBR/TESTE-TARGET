// Adiciona um método reverso à String
String.prototype.reverse_string = function() {
    var s = "";
    var i = this.length;
    while (i > 0) {
        s += this.substring(i - 1, i);
        i--;
    }
    return s;
};

// Testando a função
const palavra = "Hudson"; //String que vai ser inserida invertendo o nome. No meu caso foi o meu nome, caso queira testar, só trocar
console.log(palavra.reverse_string()); // Saída esperada: "nosduH"

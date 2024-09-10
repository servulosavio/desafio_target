function buscarLetra(string, letra) {
  let contador = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index].toLowerCase() === letra.toLowerCase()) {
      contador++;
    }
  }
  return contador;
}

const string = 'Me seleciona, por favor';
const letra = 'o';

let repeticoes = buscarLetra(string, letra);
console.log(
  repeticoes > 0
    ? `A letra "${letra}" está presente na string e aparece ${repeticoes} vezes`
    : `A letra "${letra}" NÃO está presente na string`
);

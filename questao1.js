function isQuadradoPerfeito(valor) {
  let raiz = Math.sqrt(valor);
  return Number.isInteger(raiz);
}

function isFibonacci(num) {
  let x1 = 5 * num * num + 4;
  let x2 = 5 * num * num - 4;
  return isQuadradoPerfeito(x1) || isQuadradoPerfeito(x2);
}

// Teste com o valor 25

let num = 49;

console.log(
  isFibonacci(num)
    ? `O número ${num} pertence a sequência de Fibonacci`
    : `O número ${num} NÃO pertence a sequência de Fibonacci`
);

const calculadora = require('./calculadora');

describe('Testes para a calculadora', () => {
  test('Teste de soma', () => {
    expect(calculadora.somar(2, 3)).toBe(5);
  });

  test('Teste de subtração', () => {
    expect(calculadora.subtrair(5, 3)).toBe(2);
  });

  test('Teste de multiplicação', () => {
    expect(calculadora.multiplicar(2, 3)).toBe(6);
  });

  test('Teste de divisão', () => {
    expect(calculadora.dividir(6, 3)).toBe(2);
  });

  test('Teste de divisão por zero', () => {
    expect(() => calculadora.dividir(6, 0)).toThrowError('Não é possível dividir por zero');
  });
});

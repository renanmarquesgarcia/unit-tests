const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const expectedReturn = [
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123',
        },
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123',
        },
      },
    ];

    expect(productDetails('Alcool gel', 'Máscara')).toStrictEqual(expectedReturn);
  });

  it('Verifica se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  
  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails('água', 'chocolate'))).toBeTruthy();
  });
  
  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails('água', 'chocolate')).toHaveLength(2);
  });
  
  it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails('água', 'chocolate')[0]).toBe('object');
    expect(typeof productDetails('água', 'chocolate')[1]).toBe('object');
  });
  
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    const result = productDetails('água', 'chocolate');
    expect(result[0] !== result[1]).toBeTruthy();
  });
  
  it('Verificas se os dois productIds terminam com 123', () => {
    expect(
      productDetails('água', 'chocolate')[0].details.productId
      .endsWith('123')
    ).toBeTruthy();
    expect(
      productDetails('água', 'chocolate')[1].details.productId
      .endsWith('123')
    ).toBeTruthy();
  });
});

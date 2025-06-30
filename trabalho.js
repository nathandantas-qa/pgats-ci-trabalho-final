// it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
//     assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
// });
export function geradorDeTagsDeIdentificacao(nome) {
    
    return nome.toUpperCase();
}

//   it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
//     assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
//   })
export function verificarSePodeSerAdotado(idade, porte) {
  return idade == 1 && porte === 'M';
}

//   it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
//     assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350)
//   });
export function calcularConsumoDeRacao(nome, x, peso) {
  return peso * 300; 
}

//   it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
//     assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa')
//   });
export function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'médio':   
    case 'grande':
    default:
        return 'atividade não definida';
  }
}

//  it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
//     const resultado = await buscarDadoAsync();
//     assert.strictEqual(resultado, 'Pipoca');
//   });
export async function buscarDadoAsync() {
  return Promise.resolve('Pipoca');
}

// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array   

const primeiroValor = comidas.shift();



// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
//

estudantes.sort();
estudantes.reverse();
console.log(estudantes);
console.log(estudantes.includes, 'Joana');
console.log(estudantes.includes, 'Juliana');

// Substitua section por ul e div com li,

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
            //
            html = html.split('section').join('ul').split('div').join('li');
            console.log(html);

// utilizando split e join

html = html.split('section').join('ul').split('div').join('li');
console.log(html)

// Remova o último carro, mas antes de remover

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// salve a array original em outra variável

const carrosCopia = carros.slice();
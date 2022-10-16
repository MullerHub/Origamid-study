// aulas anteriores não foram feitas

// Aula sobre Function 02
const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function (velocidade, tempo) {
    return `${this.marca} acelerou ${velocidade}km/h em ${tempo} segundos`
  }
}

const fiat = {
  marca: 'Fiat'
}

const velocidadeFiat = carro.acelerar.bind(fiat)
console.log(velocidadeFiat(300, 20))

const velocidadeFiatWIthVelocidade = carro.acelerar.bind(fiat, 100)
console.log(velocidadeFiatWIthVelocidade(50))

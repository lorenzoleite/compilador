const analisadorLexico = CreateAnalisadorLexico()

const inputFile = document.getElementById('inputFile')
const saida = document.getElementById('output')
const button = document.getElementById('btn-compilar')
const tableBody = document.getElementById('tableBody')

let codigo
let lines

inputFile.addEventListener('change', function () {
  var file = inputFile.files[0]

  var reader = new FileReader()
  reader.onload = function (e) {
    saida.textContent = reader.result
    codigo = reader.result

    lines = reader.result.split('\n') //\r\n
  }
  reader.readAsText(file)
})

button.addEventListener('click', function () {
  while (true) {
    const tokenRetornado = analisadorLexico.scanner()
    console.log(tokenRetornado)
    let tdClasse = document.createElement('td')
    let tdLexema = document.createElement('td')
    let tdTipo = document.createElement('td')

    let responseClasse = document.createTextNode(tokenRetornado.classe)
    let responseLexema = document.createTextNode(tokenRetornado.lexema)
    let responseTipo = document.createTextNode(tokenRetornado.tipo)

    tdClasse.appendChild(responseClasse)
    tdLexema.appendChild(responseLexema)
    tdTipo.appendChild(responseTipo)

    tableBody.appendChild(tdClasse)
    tableBody.appendChild(tdLexema)
    tableBody.appendChild(tdTipo)
    if (tokenRetornado.lexema === '$') {
      break
    }
  }
  analisadorLexico.getTabelaSimbolos()
})

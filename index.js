const analisadorLexico = CreateAnalisadorLexico()

const inputFile = document.getElementById('inputFile')
const saida = document.getElementById('output')
const button = document.getElementById('btn-compilar')

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
    if (tokenRetornado.lexema === '$') {
      break
    }
  }
  analisadorLexico.getTabelaSimbolos()
})

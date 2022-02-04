// Inicializando a tabela de símbolos
let tabelaSimbolos = [
  { classe: 'inicio', lexema: 'inicio', tipo: 'inicio' },
  { classe: 'varincio', lexema: 'varincio', tipo: 'varincio' },
  { classe: 'varfim', lexema: 'varfim', tipo: 'varfim' },
  { classe: 'escreva', lexema: 'escreva', tipo: 'escreva' },
  { classe: 'leia', lexema: 'leia', tipo: 'leia' },
  { classe: 'se', lexema: 'se', tipo: 'se' },
  { classe: 'entao', lexema: 'entao', tipo: 'entao' },
  { classe: 'fimse', lexema: 'fimse', tipo: 'fimse' },
  { classe: 'repita', lexema: 'repita', tipo: 'repita' },
  { classe: 'fimrepita', lexema: 'fimrepita', tipo: 'fimrepita' },
  { classe: 'fim', lexema: 'fim', tipo: 'fim' },
  { classe: 'inteiro', lexema: 'inteiro', tipo: 'inteiro' },
  { classe: 'literal', lexema: 'literal', tipo: 'literal' },
  { classe: 'real', lexema: 'real', tipo: 'real' }
]

function comparaPalavrasReservadas(tokenID) {
  let boolean = false
  for (let m = 0; m < tabelaSimbolos.length; m++) {
    if (tabelaSimbolos[m].lexema === tokenID.lexema) {
      boolean = true
      return tabelaSimbolos[m]
    }
  }
  if (boolean === false) {
    tabelaSimbolos.push(tokenID)
    return tokenID
  }
}

function CreateAnalisadorLexico() {
  const comparador = CreateComparador()

  function getTabelaSimbolos() {
    return console.log(tabelaSimbolos)
  }

  let pos = 0
  let linha = 1
  let coluna = 0

  function scanner() {
    let token = {
      classe: '',
      lexema: '',
      tipo: ''
    }

    let lexema = ''

    while (comparador.isIgnorar(codigo[pos])) {
      if (codigo[pos] === '\n') {
        linha++
        coluna = pos
      }
      pos++
    }

    if (comparador.isDigito(codigo[pos])) {
      //Q01
      lexema = lexema + codigo[pos]
      pos++
      if (codigo[pos] === '.') {
        //Q02
        lexema = lexema + codigo[pos]
        pos++
        if (comparador.isDigito(codigo[pos])) {
          //Q03
          lexema = lexema + codigo[pos]
          pos++
          while (comparador.isDigito(codigo[pos])) {
            //Q03
            lexema = lexema + codigo[pos]
            pos++
          }
          if (codigo[pos] === 'E' || codigo[pos] === 'e') {
            //Q04
            lexema = lexema + codigo[pos]
            pos++
            if (codigo[pos] === '+' || codigo[pos] === '-') {
              //Q05
              lexema = lexema + codigo[pos]
              pos++
              if (comparador.isDigito(codigo[pos])) {
                //Q06
                lexema = lexema + codigo[pos]
                pos++
                while (comparador.isDigito(codigo[pos])) {
                  //Q06
                  lexema = lexema + codigo[pos]
                  pos++
                }
                token.lexema = lexema
                token.classe = 'NUM'
                token.tipo = 'Real'

                return token
              } else {
                token.lexema = lexema
                token.classe = 'ERRO'
                token.tipo = 'Nulo'
                console.log(
                  'ERRO Léxico - Número exponencial deve possuir apenas dígitos após o sinal (+/-).'
                )

                return token
              }
            } else if (comparador.isDigito(codigo[pos])) {
              //Q06
              lexema = lexema + codigo[pos]
              pos++
              while (comparador.isDigito(codigo[pos])) {
                //Q06
                lexema = lexema + codigo[pos]
                pos++
              }
              token.lexema = lexema
              token.classe = 'NUM'
              token.tipo = 'Real'

              return token
            } else {
              token.lexema = lexema
              token.classe = 'ERRO'
              token.tipo = 'Nulo'
              console.log(
                'ERRO Léxico - Número exponencial necessita de sinal (+/-) ou dígito após o (E/e).'
              )

              return token
            }
          }
          token.lexema = lexema
          token.classe = 'NUM'
          token.tipo = 'Real'

          return token
        } else {
          token.lexema = lexema
          token.classe = 'ERRO'
          token.tipo = 'Nulo'
          console.log(
            'ERRO Léxico - Número real necessita no minimo uma parte decimal e aceita apenas dígitos.'
          )

          return token
        }
      }
      if (codigo[pos] === 'E' || codigo[pos] === 'e') {
        //Q04
        lexema = lexema + codigo[pos]
        pos++
        if (codigo[pos] === '+' || codigo[pos] === '-') {
          //Q05
          lexema = lexema + codigo[pos]
          pos++
          if (comparador.isDigito(codigo[pos])) {
            //Q06
            lexema = lexema + codigo[pos]
            pos++
            while (comparador.isDigito(codigo[pos])) {
              //Q06
              lexema = lexema + codigo[pos]
              pos++
            }
            token.lexema = lexema
            token.classe = 'NUM'
            token.tipo = 'Real'

            return token
          } else {
            token.lexema = lexema
            token.classe = 'ERRO'
            token.tipo = 'Nulo'
            console.log(
              'ERRO Léxico - Número exponencial deve possuir apenas dígitos após o sinal (+/-).'
            )

            return token
          }
        } else if (comparador.isDigito(codigo[pos])) {
          //Q06
          lexema = lexema + codigo[pos]
          pos++
          while (comparador.isDigito(codigo[pos])) {
            //Q06
            lexema = lexema + codigo[pos]
            pos++
          }
          token.lexema = lexema
          token.classe = 'NUM'
          token.tipo = 'Real'

          return token
        } else {
          token.lexema = lexema
          token.classe = 'ERRO'
          token.tipo = 'Nulo'
          console.log(
            'ERRO Léxico - Número exponencial necessita de sinal (+/-) ou dígito após o (E/e).'
          )

          return token
        }
      }
      while (comparador.isDigito(codigo[pos])) {
        lexema = lexema + codigo[pos]
        pos++
      }
      token.lexema = lexema
      token.classe = 'NUM'
      token.tipo = 'Inteiro'

      return token
    }

    if (codigo[pos] === '"') {
      //Q07
      lexema = lexema + codigo[pos]
      pos++
      while (codigo[pos] !== '"') {
        if (comparador.isTodoAlfabeto(codigo[pos]) || codigo[pos] === ' ') {
          lexema = lexema + codigo[pos]
          pos++
        } else if (codigo[pos] === '\n' || codigo[pos] === '\r') {
          token.lexema = lexema
          token.classe = 'ERRO'
          token.tipo = 'Nulo'
          console.log(
            'ERRO Léxico - Constante literal sem fechamendo de aspas.'
          )
          pos++

          return token
        } else {
          lexema = lexema + codigo[pos]
          token.lexema = lexema
          token.classe = 'ERRO'
          token.tipo = 'Nulo'
          console.log(
            `ERRO Léxico - Constante literal com caractere fora do alfabeto da linguagem., linha ${linha}, coluna ${
              i - coluna
            }`
          )
          pos++

          return token
        }
      }
      if (codigo[pos] === '"') {
        //Q08
        lexema = lexema + codigo[pos]
        token.lexema = lexema
        token.classe = 'LIT'
        token.tipo = 'Literal'
        pos++

        return token
      } else {
      }
    }

    if (
      comparador.isLetraMaiuscula(codigo[pos]) ||
      comparador.isLetraMinuscula(codigo[pos])
    ) {
      //Q09
      lexema = lexema + codigo[pos]
      pos++
      while (
        comparador.isLetraMaiuscula(codigo[pos]) ||
        comparador.isLetraMinuscula(codigo[pos]) ||
        comparador.isDigito(codigo[pos]) ||
        comparador.isUnderline(codigo[pos])
      ) {
        lexema = lexema + codigo[pos]
        pos++
      }
      token.lexema = lexema
      token.classe = 'ID'
      token.tipo = 'Nulo'

      return comparaPalavrasReservadas(token)
    }

    if (codigo[pos] === '{') {
      //Q10
      lexema = lexema + codigo[pos]
      pos++
      while (codigo[pos] !== '}') {
        if (comparador.isTodoAlfabeto(codigo[pos]) || codigo[pos] === ' ') {
          lexema = lexema + codigo[pos]
          pos++
        } else if (codigo[pos] === '\n' || codigo[pos] === '\r') {
          token.lexema = lexema
          token.classe = 'ERRO'
          token.tipo = 'Nulo'
          console.log('ERRO Léxico - Comentário sem fechamendo de chaves.')
          pos++

          return token
        } else {
          lexema = lexema + codigo[pos]
          token.lexema = lexema
          token.classe = 'ERRO'
          token.tipo = 'Nulo'
          console.log(
            `ERRO Léxico - Comentário inválido, linha ${linha}, coluna ${
              i - coluna
            }`
          )
          pos++

          return token
        }
      }
      if (codigo[pos] === '}') {
        //Q11
        lexema = lexema + codigo[pos]
        token.lexema = lexema
        token.classe = 'COMENTARIO'
        token.tipo = 'Nulo'
        pos++

        return token
      }
    }

    if (codigo[pos] === '<') {
      //Q13
      lexema = lexema + codigo[pos]
      pos++
      if (codigo[pos] === '=' || codigo[pos] === '>') {
        //Q14
        lexema = lexema + codigo[pos]
        token.lexema = lexema
        token.classe = 'OPR'
        token.tipo = 'Nulo'
        pos++

        return token
      }
      if (codigo[pos] === '-') {
        //Q18
        lexema = lexema + codigo[pos]
        token.lexema = lexema
        token.classe = 'RCB'
        token.tipo = 'Nulo'
        pos++

        return token
      }
      token.lexema = lexema
      token.classe = 'OPR'
      token.tipo = 'Nulo'

      return token
    }

    if (codigo[pos] === '>') {
      //Q15
      lexema = lexema + codigo[pos]
      pos++
      if (codigo[pos] === '=') {
        //Q16
        lexema = lexema + codigo[pos]
        token.lexema = lexema
        token.classe = 'OPR'
        token.tipo = 'Nulo'
        pos++

        return token
      }
      token.lexema = lexema
      token.classe = 'OPR'
      token.tipo = 'Nulo'

      return token
    }

    if (codigo[pos] === '=') {
      //Q17
      lexema = lexema + codigo[pos]
      token.lexema = lexema
      token.classe = 'OPR'
      token.tipo = 'Nulo'
      pos++

      return token
    }

    if (
      codigo[pos] === '+' ||
      codigo[pos] === '-' ||
      codigo[pos] === '*' ||
      codigo[pos] === '/'
    ) {
      //Q19
      lexema = lexema + codigo[pos]
      token.lexema = lexema
      token.classe = 'OPM'
      token.tipo = 'Nulo'
      pos++

      return token
    }

    if (codigo[pos] === '(') {
      //Q20
      lexema = lexema + codigo[pos]
      token.lexema = lexema
      token.classe = 'AB_P'
      token.tipo = 'Nulo'
      pos++

      return token
    }

    if (codigo[pos] === ')') {
      //Q21
      lexema = lexema + codigo[pos]
      token.lexema = lexema
      token.classe = 'FC_P'
      token.tipo = 'Nulo'
      pos++

      return token
    }

    if (codigo[pos] === ';') {
      //Q22
      lexema = lexema + codigo[pos]
      token.lexema = lexema
      token.classe = 'PT_V'
      token.tipo = 'Nulo'
      pos++

      return token
    }

    if (codigo[pos] === '.' || codigo[pos] === '_' || codigo[pos] === '}') {
      token.lexema = lexema + codigo[pos]
      token.classe = 'ERRO'
      token.tipo = 'Nulo'
      console.log(
        `ERRO Léxico - Não é possível iniciar uma sentença com este caractere, linha ${linha}, coluna ${
          pos - coluna
        }`
      )
      pos++

      return token
    }

    if (codigo[pos] === '$') {
      //Q12
      lexema = lexema + codigo[pos]
      token.lexema = lexema
      token.classe = 'EOF'
      token.tipo = 'Nulo'
      pos++

      return token
    }

    if (comparador.isTodoAlfabeto(codigo[pos]) === false) {
      lexema = lexema + codigo[pos]
      token.lexema = lexema
      token.classe = 'ERRO'
      token.tipo = 'Nulo'
      console.log(
        `ERRO Léxico - Caractere inválido na linguagem, linha ${linha}, coluna ${
          pos - coluna
        }`
      )
      pos++

      return token
    }
  }

  return { scanner, getTabelaSimbolos }
}

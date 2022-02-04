function CreateComparador() {
  function isTodoAlfabeto(caractere) {
    for (let i = 0; i < todoAlfabeto.length; i++) {
      if (caractere === todoAlfabeto[i]) {
        return true
      }
    }
    return false
  }

  function isDigito(caractere) {
    for (let i = 0; i < digitos.length; i++) {
      if (caractere === digitos[i]) {
        return true
      }
    }
    return false
  }

  function isUnderline(caractere) {
    if (caractere === underline) {
      return true
    }
    return false
  }

  function isLetraMaiuscula(caractere) {
    for (let i = 0; i < letrasMaiusculas.length; i++) {
      if (caractere === letrasMaiusculas[i]) {
        return true
      }
    }
    return false
  }

  function isLetraMinuscula(caractere) {
    for (let i = 0; i < letrasMinusculas.length; i++) {
      if (caractere === letrasMinusculas[i]) {
        return true
      }
    }
    return false
  }

  function isSinal(caractere) {
    for (let i = 0; i < sinais.length; i++) {
      if (caractere === sinais[i]) {
        return true
      }
    }
    return false
  }

  function isIgnorar(caractere) {
    for (let i = 0; i < ignorar.length; i++) {
      if (caractere === ignorar[i]) {
        return true
      }
    }
    return false
  }

  function isEOF(caractere) {
    if (caractere === '$') {
      return true
    }
    return false
  }

  return {
    isTodoAlfabeto,
    isLetraMinuscula,
    isLetraMaiuscula,
    isDigito,
    isUnderline,
    isSinal,
    isIgnorar,
    isEOF
  }
}

const estadosFinais = [
  { estado: 1, tokenId: 'Num' },
  { estado: 3, tokenId: 'Num' },
  { estado: 6, tokenId: 'Num' },
  { estado: 8, tokenId: 'Lit' },
  { estado: 9, tokenId: 'id' },
  { estado: 11, tokenId: 'Comentario' },
  { estado: 12, tokenId: 'EOF' },
  { estado: 13, tokenId: 'OPR' },
  { estado: 14, tokenId: 'OPR' },
  { estado: 15, tokenId: 'OPR' },
  { estado: 16, tokenId: 'OPR' },
  { estado: 17, tokenId: 'OPR' },
  { estado: 18, tokenId: 'RCB' },
  { estado: 19, tokenId: 'OPM' },
  { estado: 20, tokenId: 'AB_P' },
  { estado: 21, tokenId: 'FC_P' },
  { estado: 22, tokenId: 'PT_V' }
]

const estadosNaoFinais = [
  { estado: 0, msg: 'Procurando próximo token.' },
  { estado: 2, msg: 'Número real inválido.' },
  {
    estado: 4,
    msg: 'Número exponencial inválido.'
  },
  {
    estado: 5,
    msg: 'Número exponencial inválido'
  },
  {
    estado: 7,
    msg: 'Número literal inválido.'
  },
  { estado: 10, msg: 'Comentário inválido.' },
  { estado: 23, msg: 'Caractere fora do alfabeto da linguagem.' }
]

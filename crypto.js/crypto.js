let crypto = require('crypto')
let algo = 'aes-256-ctr'
let pass = '12341234'


let text = 'Criptografia de Dados!'
let cipher = crypto.createCipher(algo, pass)
let crypted = cipher.update(text, 'utf8', 'hex')
console.log('Criptografado: '+crypted)


let decipher = crypto.createDecipher(algo, pass)
let plain = decipher.update(crypted, 'hex', 'utf8')
console.log('Descriptografado: '+plain)
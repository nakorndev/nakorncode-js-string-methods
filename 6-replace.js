let message = 'Hello you shit, shit' // *****

// message = message.replace('shit', '*****')
message = message.replaceAll('shit', '*****')
console.log(message)

let id1 = 158 // 00000 = 00158
let id2 = 9860 // 00000 = 09860

id1 = String(id1).padStart(5, '0')
id2 = String(id2).padStart(5, '0')

console.log(id1)
console.log(id2)

console.log(id1.padEnd(10, '*'))
console.log(id2.padEnd(10, '*'))

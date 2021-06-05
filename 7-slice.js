const say = 'Hello world'

// H = 0
// e = 1
// l = 2
// l = 3
// o = 4
//   = 5
// w = 6
// o = 7
// r = 8
// l = 9
// d = 10

// w = -5
// o = -4
// r = -3
// l = -2
// d = -1

console.log(say)
console.log('say.slice(0, 4):', say.slice(0, 4))
console.log('say.slice(6):', say.slice(6))
console.log('say.slice(-5):', say.slice(-5))

// ไม่แนะนำให้ใช้ .substring()
console.log('say.substring(0, 4):', say.substring(0, 4))
console.log('say.substring(6):', say.substring(6))
console.log('say.substring(-5):', say.substring(-5))

console.log('say.substr(6, 2):', say.substr(6, 2))

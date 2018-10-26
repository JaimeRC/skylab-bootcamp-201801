/*
let [node, path, oper, a, b] = process.argv

a = parseFloat(a)
b = parseFloat(b)

switch (oper) {
    case 'sum':
        res = a + b
        break
    case 'rest':
        res = a - b
        break
    case 'mult':
        res = a * b
        break
    case 'div':
        res = a / b
        break
}*/

let res = parseFloat(process.argv[2]) + parseFloat(process.argv[3])

console.log(res)
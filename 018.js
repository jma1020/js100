
const a =prompt("입력")
const b =prompt("2입력")
const c = prompt("3입력")

console.log(a)
const score = [parseInt(a,10),parseInt(b,10),parseInt(c,10)]

let sum = 0;

score.forEach(e=> sum+=e)

sum/score.length
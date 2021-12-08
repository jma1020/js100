
let num = prompt("숫자 말해 3의 배수 걸리면 싸대기");

if(num%3==0 && num!=0) {
    console.log("짝")
} else if(num==0) {
    console.log("뒤진다?")
} else  {
    console.log(num)
}
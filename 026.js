// 행성문제2  : 힌글을 입력하면 영어로 반환하게

const planet = {
    수성: "Mercury",
    금성: "Venus",
    자구: "Earth",
    화성: "Mars"
}

const inp = prompt("입력해봐")

console.log(planet[inp])
// 나는 planet.inp으로 접근했는데 안되었다.. 왜그럴까??
//마침표 연산자를 사용할 경우에는 연산자 우측에 반드시!!! 프로퍼티에 이름이 식별자로 들어가야하기 때문이다. 

const 
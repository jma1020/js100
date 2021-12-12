// 객체생성하기
const key = prompt().split(" ");
const value = prompt().split(" ");
let obj = {};

for(let i = 0 ;i< key.length;i++){
    obj[key[i]] = value[i]
}

//나는 생성자 함수로 해보려했는데 잘안되었다
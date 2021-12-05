let step = 5;
// let star = "";
//여기두면 star가 계속 누적되서 배로 많아짐

for (let i = 1; i<step ; i++){
    let star = "";
    // 여기로 오면 나오면 다시 star가 0으로 초기화되는거다
    for(let j =1; j<=i ; j++){
        star += star + "*";
    }

    console.log(star)
}

// 공백맞추기 실패

for (let i = 1; i<step ; i++){
    let star = "";
    
    // 공백 증가 for문   ((k<=step-i 는 i를 안빼주면 같은 공백을 가지기 때문에 넣어주게 된거다))
    for(let k =1; k<=step-i; k++){
        star =star +" ";
    }

    // 별 증가 포문
    for(let j =1; j<=i ; j++){
        star += star + "*";
    }

    console.log(star)
}
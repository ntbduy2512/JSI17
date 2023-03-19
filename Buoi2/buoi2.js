// : Cho array sau arr1 = [1,2,3,5]. Hãy duplicate array cho bên trên bằng ít nhất 2 cách; trong đó có 1 cách dùng Spread Operator.
arr1 = [1,2,3,5]
const arr2 = [...arr1, arr1]
console.log(arr2)
// Cau 2
arrA = ["hello", " Xin chào"]
arrB = ["Bonjour", "Olá"]
const waystosayhello = [...arrA, ...arrB]
// Cau 3
arrX = [0,1,2,3,4,5,6,7,8]

const arrSquare = arrX 
for(i=0; i<arrSquare.length; i++){
    console.log(arrSquare[i]**2)
}

const arrOdds = arrX 
for(i=0; i<arrOdds.length; i++){
    if( arrOdds[i]%2 !=0){
        console.log(arrOdds[i])
    }
}
// const arrSquare = arrX.map((num) => {
//     return num*num;
// })
// console.log(arrSquare);

// const arrOdds = arrX.filter((num) => {
//     return (num %2 == 1);
// })

// console.log(arrOdds);
// https://docs.google.com/document/d/1fASkBnSu4QrvgfnROstlksPFqkS-X9S91cGz0MQQuF8/edit#
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function kata1() {
    let num = []
    for (let i = 1; i <= 25 ;i++) {
        num.push(i)
    }
    return num
}
console.log(kata1())

function kata2() {
    let num1 = []
    for (let i = 25; i >= 1; i--) {
        num1.push(i) 
    }      
    return num1
}
console.log(kata2())
function kata3() {
    let num2 = []
    for (let i = -1; i >= -25; i --) {
       num2.push(i)
    }    
    return num2
}
console.log(kata3())
function kata4() {
    let num3 = []
    for (let i = -25; i <= -1; i++) {
        num3.push(i)
    }
    return num3
}
console.log(kata4())
function kata5() {
    let num4 = []
    for (let i= 25; i >= -25; i--) {
       if ( i % 2 == 1){
        num4.push(i)
       }
       else if (i % 2 == -1){
        num4.push(i)
       }
    } 
    return num4     
}
console.log(kata5())
function kata6() {
  let num6 = []
  for(let i = 1; i <= 100; i++){
    if ( i % 3 == 0){
        num6.push(i)
    }
  }
  return num6
}
console.log(kata6())
function kata7() {
    let num7 = []
    for(let i = 1; i <= 100; i++){
      if ( i % 7 == 0){
          num7.push(i)
      }
    }
    return num7
}
console.log(kata7())
function kata8() {
    let num8 = []
    for (let i = 100; i >= 3; i--) {  
        if (i % 3 == 0){
            num8.push(i)
          }
        if ( i % 7 == 0){
            num8.push(i)
        }  
    }
    return num8
}
console.log(kata8())
function kata9() {
    let num9 = [] 
    for (let i = 5; i <= 100; i++){
        if(i % 2 == 1){
            num9.push(i)
        }
        else if (i % 5 == 0){
            num9.push(i)
        } 
    }
    return num9
}
console.log(kata9())
function kata10() {  
    return sampleArray
}
console.log(kata10())
function kata11(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {     
        if (arr[i] % 2 == 0){
            pares.push(arr[i])
        } 
    }
    return pares
}
console.log(kata11(sampleArray))
function kata12(odd) {
    let impar = [];
    for (let i = 0; i < odd.length; i++) {     
        if (odd[i] % 2 == 1){
            impar.push(odd[i])
        } 
    }
    return impar    
}
console.log(kata12(sampleArray))
function kata13(arr) {
    let por8 = [];
    for (let i = 0; i < arr.length; i++) {     
        if (arr[i] % 8 == 0){
            por8.push(arr[i])
        } 
    }
    return por8
}
console.log(kata13(sampleArray))
function kata14() {
    let quadrado = [];
    for (let i = 0; i < sampleArray.length; i++) {
        quadrado.push(sampleArray[i] ** 2)
    }
return quadrado
}
console.log(kata14())
function kata15(soma) {
     let result = 0
    for(let i = 0; i < soma.length; i++){
        if(soma[i] > 1){
        result += soma[i]
        }    
    }    
return result
}
console.log(kata15([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))
function kata16(soma2) {
    let result2 = 0
    for(let i = 0; i < soma2.length; i++){
        if(soma2[i] > 1){
        result2 += soma2[i]
        }    
    }    
    return result2
}   
console.log(kata16(sampleArray))
function kata17() {
let menor = Math.min(469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472);
return menor
}
console.log(kata17())
function kata18() {
    let maior = Math.max(469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472);
    return maior
}
console.log(kata18())







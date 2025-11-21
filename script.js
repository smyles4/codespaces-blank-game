let genderBtn=document.querySelector('.gender');
let boy = document.getElementById('boy');
let girl = document.getElementById('girl');
let other = document.getElementById('other');
let aries= document.getElementById('aries');
let tuarus=document.getElementById('taurus');
let pisces=document.getElementById('pisces');
let capricorn=document.getElementById('capricorn');
 let aquarius=document.getElementById('aquarius');
  let libra=document.getElementById('libra');
let leo=document.getElementById('leo');
 let scorpio=document.getElementById('scorpio');
 let cancer=document.getElementById('cancer'); 
 let sagittarius=document.getElementById('sagittarius');
let gimini=document.getElementById('gimini');
let seven=0;
let three= 0;
let one= 0;
let trueX =document.getElementById('true'); 
let falseX =document.getElementById('false'); 



genderBtn.addEventListener('click', function() { 
//  gebder
    if(boy.checked){seven= seven + 1}
else if(girl.checked){three = three + 1}
else if(other.checked){one = one + 1}


// sign
 if(aries.checked){seven= seven +1}
else if(tuarus.checked){three= three +1}
else if(pisces.checked){one= one +1}
else if(capricorn.checked){seven= seven +1}
else if(aquarius.checked){three= three +1}
else if(libra.checked){one= one +1}
else if(leo.checked){seven= seven +1}
else if(scorpio.checked){three= three +1}
else if(cancer.checked){one= one +1}
else if(sagittarius.checked){seven= seven +1}
else if(aquarius.checked){three= three +1}
else if(gimini.checked){one= one +1}
else if(true.checked){seven=seven +1}
else if (false.checked){three=three+1}




// check
alert("seven" + seven + "three" + three + "one" + one);
  
});












// alert("seven" + seven + "three" + three + "one" + one);
//   });










// }else if (girl.checked){
// three=three +1;
// }else if(other.checked){
//     one=one +1;
// }else {
//     console.log("no selection made")
// }


// if(aries.checked){
// seven=seven +1;
// console.log(seven);
// }else if (tuarus.checked){
// three=three +1;
// }else if(pisces.checked){
//     one=one +1;
// }else if (capricorn.checked){
//     seven=seven +1;
// }else if (aquarius.checked){
//     three=three +1;
// }else if (libra.checked){
// seven=seven +1;
// }else if(leo.checked){
//     one=one +1;
// }else if (scorpio.checked){
//     seven=seven +1;
// }else if (cancer.checked){
//     three=three +1;
// }else if(gemini.checked){
//     one=one +1;
// }else if (sagittarius.checked){
//     seven=seven +1;
// }else {
//     console.log("no selection made")
// }



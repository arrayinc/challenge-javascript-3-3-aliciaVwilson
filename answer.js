// *** YOUR ANSWER BELOW ***

function divisibleBy6Or7(){
  let divBy6 = "";
  let divBy7 = "";
  for(let i = 1; i <= 100; i++){
    if(i % 6 === 0 && !(i % 7 === 0)){
      divBy6 += `${i}, `;
    }
    if(i % 7 === 0 && !(i % 6 === 0)){
      divBy7 += `${i}, `
    }
  }
  return divBy6 + divBy7;
}

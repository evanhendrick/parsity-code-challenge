const findSum= function (array){
    let total=0;
    for (let i in array){

        total+=array[i];
    }
    return total;
}

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};


const isPalindrome = function(str) {
   
    let newString = str.split("").reverse().join("");
    if(str===newString){
        return true;
    }else {
        return false;
    }
};

const largestPair = function(array) {
    let max = array[0];
    for (let i=0;i<array.length;i++){
        let next = array[i+1];
        arrayProd=array[i]*next;
        if(arrayProd>max){
            max=arrayProd;
        }
    }
    return max;
};

const removeParenth = function(str) {
    while (str.match(/ *\([^)]*\) */)){
    str= str.replace(/ *\([^)]*\) */, "");
    }return str;
  };
  
  const scoreScrabble = function(str) {
    let newString = str.split("");
    console.log(newString);
       function arrayConverter(x){
            if(x.match(/[aeioulnrst|AEIOULNRST]/)){
                x=1;
            }else if(x.match(/[dg|DG]/)){
                x=2;
            }else if(x.match(/[bcmp|BCMP]/)){
                x=3;
            }else if(x.match(/[fhvwy|FHVWY]/)){
                x=4;
            }else if(x.match(/[k|K]/)){
                x=5;
            } else if(x.match(/[jx|JX]/)){
                x=8;
            }else if(x.match(/[qz|QZ]/)){
                x=10;
            }else {
                return false;
            }
            
            return x;
        }
        console.log(newString.map(arrayConverter));
        let score = newString.map(arrayConverter);
        let total =0;
      for (let i in score){
        total += score[i];
        }
      console.log(total);
      return total;
    
};

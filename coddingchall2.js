// Answer 1

function countWord(text){
    var words=text.split(' ');
    var wordcount={}

    for (let index = 0; index < words.length; index++) {
        var word = words[index];

        if (wordcount[word]){
            wordcount[word]++;
        }else{
            wordcount[word]=1
        }
        
    }
    return wordcount
}
var text = "the quick brown fox jumps over the lazy dog";
var result = countWord(text);
console.log(result);





// // Answer 2

// function countWord(numarr){
    
//     var n=[]

//     for (let index = 0; index < numarr.length; index++) {
//         var num = numarr[index];

//         if (numarr[index] in n){
            
//             continue
//         }else{
//             n.push(numarr[index])
//         }
        
//     }
//     return n
// }
// a=[1,3,6,7,3,1]
// var result = countWord(a);
// console.log(result);


// function removeDuplicates(numbers) {
//     var uniqueSet = new Set(numbers);
//     return uniqueSet;
// }
// var numbers = [1, 2, 3, 4, 2, 3, 5];
// var uniqueNumbers = removeDuplicates(numbers);
// console.log([...uniqueNumbers]);
// console.log(Array.from(uniqueNumbers));


// // Answer 3
// function swap(a,b){
    
//     [b,a]=[a,b]
//     return [a,b]
// }

// console.log(swap(1,2))


// // Answer 4
// function rand(nums){
    
//     const var1=  nums[0]
//     const var2=nums[1]
//     const var3=nums[nums.length-1]

//     var a=[var1,var2,var3]
//     return a
// }


// function rand(array) {
//     var [first, second, ...rest] = array;
//     var last = rest.pop();
//     return [first, second, last];
//   }
  
 
// console.log(rand([1,3,3,32,2,23,4]))

// // Answer 5

// function findMinMax(array) {
//     var max = Math.max(...array);
//     var min = Math.min(...array);
//     return { max: max, min: min };
//   }

  
// //   Answer 6
// function extractProperties(person) {
//     var { name, address: { street } } = person;
//     return { name, street };
// }
  

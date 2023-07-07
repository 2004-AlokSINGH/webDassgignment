// Answer 1

// var input="Alokito"
// function reverse(input){
//     var ans= input.split('').reverse().join('')
//     return ans
// }
// function delR(){
//     var rev=reverse(input)
//     console.log(rev)
// }
// setTimeout(delR, 2000);


//Answer 2

// var delay=3000

// function genRandomNum(){
//     var randomNum=Math.floor(Math.random()*10)+1
//     console.log('Genreted Number: '+ randomNum);
// }
// function displaySec(sec){
//     console.log("time remaining: "+sec)
// }
// function delayy(){
//     var sec=Math.ceil(delay/1000)
//     var intveral=setInterval(function(){
//         displaySec(sec);
//         sec--;

//         if (sec===0){
//             clearInterval(intveral);
//             genRandomNum()
//         }
//     },1000)
// }
// setTimeout(delayy,delay)

  
//Answer 3

// var inventory = {
//     item1: 10,
//     item2: 25,
//     item3: 15,
//     item4: 30,
// };
// var exchangeRate=80
// var inventoryINR = (
//     Object.entries(inventory).map(([item, priceUSD]) => [item, priceUSD * exchangeRate])
//   );
//   console.log(inventoryINR);

// //   Answer 4
// // List of books with authors and publication years
// var books = [
//     { title: "Book 1", author: "author 1", year: 2005 },
//     { title: "Book 2", author: "author 2", year: 2012 },
//     { title: "Book 3", author: "author 3", year: 2008 },
//     { title: "Book 4", author: "author 4", year: 2015 },
//   ];
  
//   // Function to capitalize author names
//   function capitalizeAuthorName(author) {
//     return author.toUpperCase();
//   }
  
//   // Filter books published after 2010 and capitalize author names
//   var filteredBooks = books
//     .filter((book) => book.year > 2010).map((book) => ({
//       title: book.title,
//       author: capitalizeAuthorName(book.author),
//     }));
  
//   // Output the filtered books with capitalized author names
//   console.log(filteredBooks);
  

// //   Answer 5
// // Function to validate URL
// function validateURL(url) {
//     // Regular expression pattern for URL validation
//     var regex = /^(http:\/\/|https:\/\/)[\w\d\S]+\.[\w]+$/;
  
//     // Test if the input matches the regex pattern
//     if (regex.test(url)) {
//       console.log("Valid URL");
//     } else {
//       console.log("Invalid URL");
//     }
//   }
  

// // Answer 6
// // Function to validate LinkedIn profile URL
// function validateLinkedInURL(url) {
//     // Regular expression pattern for LinkedIn URL validation
//     var regex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z0-9]$/;
  
//     // Test if the input matches the regex pattern
//     if (regex.test(url)) {
//       console.log("Valid LinkedIn profile URL");
//     } else {
//       console.log("Invalid LinkedIn profile URL");
//     }
//   }
  
//   // Test the function with example LinkedIn profile URLs
  
//   validateLinkedInURL("https://www.linkedin.com/profile");
  
  

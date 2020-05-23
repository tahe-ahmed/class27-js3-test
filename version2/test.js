// VERSION 2

/*
1. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
*/
// //Get the element 
// let ctx = document.getElementById('myChart');
// // create an instance of the Chart class
// let myBarChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
    
//     labels: ['Data-1', 'Data-2', 'Data-3', 'Data-4'],
//     datasets: [{
//         barPercentage: 0.5,
//         barThickness: 30,
//         maxBarThickness: 40,
//         data: [60, 10, 30, 90],
//         borderColor: [
//           "transparant"
          
//       ],
//       borderWidth: 1,
//       backgroundColor:"blue",
//       hoverBackgroundColor: "red"
//     }]
//   },
  
//   options: {
//     cales: {
//       xAxes: [{
//         ticks: {
//             stacked: true
//         }
//       }],
//       yAxes: [{
//           ticks: {
//               stacked: true
//           }
//       }]
//     }
//   }
// });
// my stratgy was to read the documentation of the library and see samples and then try to implement and
// wheneven i get stack or want to add something i check the documentation 
/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM 
- Creates an unordered list for each book

Use the following array of objects:
*/
const books = [
  {
    bookName: 'The Nature of Software Development',
    author: 'Ron Jeffries',
    coverURL:
      'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
    bookName: 'Clean Code',
    author: 'Robert Cecil Martin',
    coverURL:
      'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
  },
  {
    bookName: 'Refactoring',
    author: 'Kent Beck & Martin Fowler',
    coverUrl:
      'https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg',
  },
];
// function renderBooks(arrayOfBooks){
//   let output = '';
//   arrayOfBooks.forEach(book => {
//       output += `<ul> <li> ${book.bookName} </li> 
//                       <li> ${book.author} </li>
//                       <li> ${book.coverURL} </li>
//                   </ul>`;
//   });
//   document.body.innerHTML = output;
// };
// document.onload = renderBooks(books);

/* 
3. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less. 
*/
// API is stands for Application Programming Interface . It can simply definded as a piece of software
// that set rules on how computer or different softwares communicate and interact with each other for example 
// how the data format are tranfered and requested between them ..etc 
// In HackYourRepo project we used an external API (Github public API) to fetch data from and then insert them in
// a certain way to the DOM page . the data we received were in JSON format 
/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://jsonplaceholder.typicode.com/users
- Make use of async/await syntax
- Displays the "name", "email" and "city" of the first person inside an unordered list
- Makes use of async/await
*/
// async function fetchJSON(url){
//   let output;
//   try {
//     let response = await fetch(url);
//     let user = await response.json();
//     console.log(user);
//     output = `<ul> <li> ${user[0].name} </li>
//                   <li> ${user[0].email} </li>
//                     <li> ${user[0].city} </li>
//                 </ul>`;
    
//   } catch(err) {
//     output =  `Something went wrong ${err}`;
//   }

//   document.body.innerHTML = output;
    
// }
// const url = 'https://jsonplaceholder.typicode.com/users';
// document.onload = fetchJSON(url);

/*
5.
a) Create a class, called Animal, that includes:
- A constructor method
- "type", "color", "size" properties
- 1 additional method, called "getType", which returns the type

b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/
// class Animal {
//   constructor(type, color, size) {
//     this.type = type;
//     this.color = color;
//     this.size = size;
//   }

//   getType() {
//     return this.type;
//   }
// }

// let animal = new Animal("Lion", "Yellow", "Big");
// let animalType = animal.getType();
// console.log(animalType);
/*
6.
Write a JavaScript function that:
- Accepts a string of 4 words (all lowercase letters) as an argument
- Converts the first letter of each word of the string in upper case.
  
  Example: 'the quick brown fox'
  Expected Output: 'The Quick Brown Fox '
*/
// function capitalize(string) {
//   // slipt the string based on the spaces between the words and store them inside an array of strings
//   const splitString = string.toLowerCase().split(" ");
  
//   // use map to iterate and capitalize each word in the array
//   let capitalizedString = splitString.map((word) => {
//      return word.charAt(0).toUpperCase() + word.slice(1);
//   });
  
//   return capitalizedString.join(" "); 
// }

// console.log(capitalize("the quick brown fox"));
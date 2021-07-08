// console.log("1. Write a JavaScript program to list the properties of a JavaScript object.");
// function listObj(obj){
//     console.log(Object.keys(obj).join(","));
// }

// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// listObj(student);

// console.log(" 2. Write a JavaScript program to delete the rollno property from the following object.Also print the object before or after deleting the property.");
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// console.log(student);
// delete student['rollno'];
// console.log(student);

// console.log("3. Write a JavaScript program to get the length of a JavaScript object. ");
// function len(obj){
//     console.log(Object.keys(obj).length);
// }
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// len(student);

// console.log("4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.");

// var library = [
//   { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
//   { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (x of library){
//     console.log("Book name:", x.title , "==> Author name:",x.author ,"==> Reading status:", x.readingStatus);
// }

// console.log("5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.");

// class Cylinder {
//     constructor(r , h){
//         this.h=h;
//         this.r=r;
//     }
    
//     volume(){
//         let vol= 2*3.14*this.r*this.h;
//         console.log("Volume of Cylinder is:", vol.toFixed(4));
//     }
// }
// var cyl = new Cylinder(5,8);
// cyl.volume();



console.log("6. Write a JavaScript program to sort an array of JavaScript objects.");
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];




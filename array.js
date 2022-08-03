////১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 

var findOut=[20 , 430 , 40 , 50, 60 , 70 ];
console.log(findOut);
console.log(findOut.length);

//১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
var findOut=[20 , 430 , 40 , 50, 60 , 70 ];
findOut[0]=100;
console.log(findOut);

//১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
// finding an element index number
var myArray = ['ASif', 2, 4, 65, 76, 'Nahid'];

myArray = myArray.indexOf(65);
console.log(myArray);

var findOut=[20 , 430 , 40 , 50, 60 , 70 ];
var findOut =findOut.indexOf(20);
console.log(findOut);


// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
var findOut=[20 , 430 , 40 , 50, 60 , 70 ];
findOut[3]=300;
console.log(findOut);


//১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
var findOut=[20 , 430 , 40 , 50, 60 , 70 ];
console.log(findOut.indexOf(40));

//২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
var findOut=[20 , 430 , 40 , 50, 60 , 70 ];
findOut.push(4);
findOut.pop();
console.log(findOut);

//২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
var findOut=[20 , 430 , 40 , 50, 60 , 70 ];
findOut.unshift(2);
findOut.shift();
console.log(findOut);
//24 তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।
// var money = 30000;
// if (money > 800000){
//     console.log("I will by a Mackbook");
// }else if (money > 60000){
//     console.log("I will by a Gaming Laptop");
// }else if (money > 40000){
//     console.log("I will by a Lenovo Yoga");
// }else if (money > 20000){
//     console.log("I will by a used laptop");
// }else{
//     console.log("I will use Mobile Phone");
// }
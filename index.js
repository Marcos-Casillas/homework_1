
let ages = [3,9,23,64,2,8,28,93];
//Question 1 = lines 2   Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
ages.push(4);
//Question 1b = lines 3 added ontop or else wont add to array when console log is done later down in the lines.     Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
let agesFirst = ages[ages.length - ages.length];
let agesLast = ages[ages.length - 1];
let agesFirstMinusLast = (agesLast - agesFirst);
console.log("last element minus first element is " + agesFirstMinusLast);// messed up earlier and read question wrong thinking age0 - age7. flipped line 8 to fix so age7 - age0.
//Question 1a = lines 5-8   programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
let sum = 0;
let average = 0;
for(let i = 0; i < ages.length ; i++){
    sum += ages[i];
    average = sum / ages.length; 
}
console.log("average of ages is " + average);
//Question 1c = Lines 11-18    Use a loop to iterate through the array and calculate the average age. Print the result to the console.  
let names = ["Sam","Tommy","Tim","Sally","Buck","Bob"];
//Question 2 = lines 20         Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let total = 0;
for(let i = 0; i < names.length; i++){
    total += names[i].length; // some reason .length is needed or else wont work.  
}
let avg = total / names.length;
console.log("average of names is " + avg);
//Question 2a = lines 21-26         Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let addedNames = "";
for(let i = 0; i <names.length; i++){
    addedNames += names[i] + " ";
}
console.log(addedNames);
//Question 2b = lines 28-32         Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
//Question 3 Answer = names[names.length - 1]           How do you access the last element of any array        
//Question 4 Answer = names[0]          How do you access the first element of any array
let nameLengths = [];
for(let i = 0; i <names.length; i++){
    nameLengths.push(names[i].length); 
}
console.log(nameLengths);
//Question 5 = lines 36-40          Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
//example below for question
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
let sum2 = 0
for(let i = 0; i < nameLengths.length; i++){
    sum2 += nameLengths[i];
}
console.log("sum of namedLengths is " + sum2);
//Question 6 = lines 45-49          Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let func1 = "";
function function1 (word,n){
    for(let i = 0; i < n; i++){
        func1 += word;
    }console.log(func1);
return func1;
}
function1("Hello",3);
//Question 7 = Lines 51-58          Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)
let func2 = "";
function function2 (firstName,lastName){
    func2 = firstName + " " + lastName;
    console.log(func2);
}
function2("Tony","Stark");
//Question 8 = lines 60-64          Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space)
let func3 = 0;
function function3 (a,b,c){
    func3 = a + b + c;
    if (func3 > 100){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
function3(12,90,3);
//Question 9 = lines 67-77          Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
let func4 = 0;
function function4 (j,k,v){
    func4 = (j + k + v) / function4.length;
}
function4 (3,3,3);
//question 10 = lines 79-83         Write a function that takes an array of numbers and returns the average of all the elements in the array.
let sum3 = 0;
let sum4 = 0;
function function5 (number1,number2,number3,number4){
    sum3 = (number1 + number2) / 2;
    sum4 = (number3 + number4) / 2;
    if(sum3 > sum4){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
function5(5,5,2,2);
//question 11 = lines 85- 97            Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function willBuyDrink (isHotOutside,moneyInPocket){
    if(isHotOutside == true, moneyInPocket > 10.50){
        console.log("I will go buy a drink");
    }
}
willBuyDrink("True",11);
//question 12 = lines 99-104            Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
let result2 = 0;
function function6 (numbers1,numbers2,numbers3){
    result2 = (numbers1 * numbers2 * numbers3);
    console.log(result2);
}
function6(3,5,5);
//question 13 = lines 106-111   this is a calculator to multiple 3 elements by just inputing numbers into the function      Create a function of your own that solves a problem. In comments, write what the function does and why you created it    
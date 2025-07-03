
// So we have to print this string in reverse order so what we will do we will first convert this string in an array using split method . what split does it converts the string into an array and each char of an string becomes an element .  

// So here is our string  
let str = "Codewithxain"

// now first we will convert this string into an array using split method 

// lets create an array

let Arr = str.split('')  // here ' '  is used to sperate each element 

// console.log(Arr)

// now we know that we can use .Reverse( ) method to reverse the array . lets use that to reverse the array 

let RevArr = Arr.reverse();

// console.log(RevArr);

//till here it is an array but we have to reverse the string , so we will make it back to string using the join method what join does it takes the array and converts that to string 

let RevStr = RevArr.join('')  //here we give the separator to join 

// let check the output

// console.log(RevStr);


// we can do this all in one go  lets do that 

let ReverseString = (string)=>{
   let rvrStr =  string.split('').reverse().join('');
    console.log(rvrStr)
}

ReverseString("Zain");









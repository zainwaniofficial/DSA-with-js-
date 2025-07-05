// the question is we have a string 

// a man , a plan , a canal : panama 

// we have to check the palendrome and before that we need to remove all the special characters


// what we gonna do we gonna using regular expression to remove the special characters 


// lets get started 


let s = "a man , a plan , a canal : panama"

// let make first the filterfunction that will filter the string and give us string without special characters

// let make the regular expression 

const nonAlphaNumeric = /[^a-z0-9]/gi  ;  //here we use ^ to say not equalto


function filterAlphaNumeric(str){
   return  str.toLowerCase().replace(nonAlphaNumeric, '')

    //now what we here done we converted the string into lowercase and the replaces the specialcharacters into empty strng
}

// lets make function to chack the palendrome 


const isPalindrome = (s)=>{

    const clearedStr = filterAlphaNumeric(s);

    let i = 0;
    let j = clearedStr.length - 1;

    while(i < j){
        if(clearedStr[i] !== clearedStr[j] ){

            return   console.log("no palindrome");

        }

        i++;
        j--;
    
    }

    return console.log("palindrome");
}
isPalindrome(s);
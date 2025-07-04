// so the question is to toggle the string means if the character in a string is capital , we have to make that small , if the character is in small we have to make that capital 
// example the string "ABcdEFg"  should be converted to "abCDefG"

let toggleString = (string)=>{

    let toggle = "";

    
    for(let i= 0; i<string.length;i++){

        let char = string.charCodeAt(i)

        //here what concept comes that the charcode of capital letters is between 65 and 90 that is why we are using here this stytex to find the code 

        // like if a value of capital A is 65 
        // small a value is 97


// So, the ASCII difference between 'a' and 'A' is 32.

        // value of Capital B is 66 

        if(char>65 && char<= 90){

            // now what we will do here here we will use the askali value of the character and add that 32 which will make them capital to small similarly vise versa 

            toggle = toggle +   String.fromCharCode(char + 32);
           

            
            
        }
            else if(char>= 97 && char <= 122){
                
                toggle = toggle + String.fromCharCode(char - 32);
            }
        


     
        
    }
   console.log(toggle);
   
}

toggleString('HarRY')
const palendromeCheck = (string)=>{
    let revArr = string.split('').reverse().join('');
    if(string === revArr){
        console.log("its Palendrome");
        
        
    }else{
        console.log("its not palendrome")
    }

}

// palendromeCheck("hahah")

//another way to make pallindrome check without less space is 


let str = "zaza";

let isPallendrome = true;

let i = 0;
let j = str.length-1;

while(i<j){
    if(str.charAt(i) != str.charAt(j)){
        isPallendrome = false;
    }
    i++;
    j--;
}

if(isPallendrome){
    console.log("it is pallendrome");
    
}else{
    console.log("it is not pallendrome");
    
}


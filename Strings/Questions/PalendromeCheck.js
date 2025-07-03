const palendromeCheck = (string)=>{
    let revArr = string.split('').reverse().join('');
    if(string === revArr){
        console.log("its Palendrome");
        
        
    }else{
        console.log("its not palendrome")
    }

}

palendromeCheck("hahah")


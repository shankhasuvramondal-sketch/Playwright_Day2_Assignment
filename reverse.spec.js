let reversedString="";
function reverseString(value)
{
 for(let i=value.length-1;i>=0;i--)  
    {
           
            reversedString=reversedString.concat(value.charAt(i));
    } 
 console.log(reversedString)   
}
let value="Iswarya";

reverseString(value)



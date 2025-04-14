//pattern hill  
//1 2 *
//1 *   *
//*  *   *
let num=3,star="";
for(let i=1;i<=num;i++){
    for(let j=i;j<=num;j++){
       star += " ";
    }
    for(let j=1;j<=i;j++){
        star += "* ";
    }
    star += "\n";
}
console.log(star);
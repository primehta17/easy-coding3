// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1
let num=5,star="";
 for(let i=1;i<=num;i++){
    let k=1;
    for(let j=i;j<=num;j++){
       star +=k++ +" ";
    }
    star += "\n";
 }
 console.log(star);
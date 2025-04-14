let num=5;star="";
let ch='65'
for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
     star+= String.fromCharCode(ch++);
    }
star+="\n";
}
console.log(star)
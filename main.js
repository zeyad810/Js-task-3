let str = "hello from caDEmy YoU welcome ";
let newStr =str.slice(11, 17);
let start =newStr.padStart(newStr.length+5 ,"#");
let end =newStr.padEnd(newStr.length+5,"#");
let result = start + end.replace("caDEmy","");
console.log(result.replace("caDEmy","Cademy"))
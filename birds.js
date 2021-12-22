let arr=[1,1,2,2,4,4,4,4,5];
// let arr=[2,2,2,2,4,4,4,4,5];
// let arr=[1,2,2,4,4,4,4,5];
let c=[];
let lengths=[];
let type=[];

arr.forEach((i, index)=>{
    if(i === arr[index+1] || i=== arr[index-1]){
        c.push(i);
        if(i!==arr[index+1]){
            lengths.push(c.length)
            type.push(i);
            c=[];
        }
    }  
    else{
        lengths.push(1);
        type.push(i);
    }
})

let min=Math.min(...lengths);
let max=Math.max(...lengths);
console.log(type[lengths.indexOf(max)])
console.log(type[lengths.indexOf(min)])

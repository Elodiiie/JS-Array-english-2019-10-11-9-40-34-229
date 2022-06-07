// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a))
console.log(Array.isArray(b))

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
const res = [];
for (let i = 0; i < a.length; i++) {
    res.push(a[i]*2);
}
console.log(res)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
// TODO
// case 1 output: 'Red Green White Black'
console.log(colors.join(' '));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join());


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((a, b) => b - a);
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var res = {};
for(let i in a){
    if(a[i] in res){
        res[a[i]] ++;
    }else{
        res[a[i]] = 1;
    }
}
console.log(res)
var max,maxNum=0
for(let i in res){
    if(maxNum<res[i]){
        max = i;
        maxNum = res[i];
    }
}
console.log(max)


















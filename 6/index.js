console.log("1. Write a JavaScript function to check whether an `input` is an array or not");

function isArray(arr){
    return Array.isArray(arr);
}

console.log(isArray("Ankit"));
console.log(isArray([1,2,4,0]));

console.log("2. Write a JavaScript function to clone an array");

function array_Clone(arr){
    return arr.splice(0);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log("3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.");

function first(arr,n){
    if(!n){
        return arr[0];
    } 
    else if(n>=0){
        return arr.slice(0,n);
    }
    else{
        return [];
    }
}

console.log(first([7,9,0,-2]));
console.log(first([],3));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],6));
console.log(first([7,9,0,-2],-3));

console.log("4. Write a simple JavaScript program to join all elements of the following array into a string.");

function joiner(arr){
    console.log('"',arr.join(","),'"');
    console.log('"',arr.join("+"),'"');
}
myColor = ["Red", "Green", "White", "Black"];
joiner(myColor);


console.log("5. Write a JavaScript program to find the most frequent item of an array");

function cmp(arr){
    var maxf = 1;
    var f = 0;
    var item;
    for (let i =0;i<arr.length;i++) {
        for(let j=i;j<arr.length;j++){
            if (arr[i] === arr[j]){
                f+=1;
            }
            if(maxf<f){
                maxf = f;
                item = arr[i];
            }
        }
        f=0;
    }
    console.log(item , "(",maxf,"times)");
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
cmp(arr1);
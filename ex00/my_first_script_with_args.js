//this declares and initializes variabls args to size of 3
var args = process.argv.slice(2);

//used ot control while loop
index = 0;

//runs thourhg the whole length of args variable
//also prints out what was input 
while(index < args.length){
    console.log(args[index]);
    index++;
} 
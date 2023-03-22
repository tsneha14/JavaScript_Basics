//For loop
for(let m=0; m<=10; m++){
    console.log(`Loop Number - ${m}`)
}

//While loop
let j=0;
while(j<=10){
    console.log(`Loop Number - ${j}`)
    j++;
}

//Do-while loop
let k=0;
do{
    console.log(`Loop Number - ${k}`)
    k+=11;
}while(k<=10)

//Arrays of object
const lang = [
    {id: 1, name: 'Pascal', year: 1970},
    {id: 2, name: 'C', year: 1972},
    {id: 3, name: 'C++', year: 1985},
    {id: 4, name: 'Java', year: 1995},
    {id: 5, name: 'JavaScript', year: 1996},
    {id: 6, name: 'Kotlin', year: 2011}
];

//Traditional for loop
for(let i=0; i<lang.length; i++){
    console.log(lang[i].id)
}

//for..of loop
for(let item of lang){
    console.log(item.name)
}

//forEach loop
lang.forEach(item => console.log(item.year))
let user = {
    firstName:"Rishika",
    lastName:"Singh",
    campus:"Sushant University",
    email:"abc@gmail.com",
    age:19,
    mobile:1234578906,
    hobbies:["reading","sports","music"],
    isAdult:true
}
console.log("obj",user);
console.log("firstName",user.firstName);
console.log("lastName",user.lastName);
console.log("age",user.age);
console.log("second hobby",user.hobbies[1]);

for(let key in user){
    console.log("key:",key,"||value:",user[key])
}

//object function

let cap={
    lastName:"Rogers",
    isAvenger:false,
    address:{
    country:"US",
    state:"New York",
    city:"Manhatten",

},
enemies:["Hydra","Iron Man","Thanos","Ultron"],
greet:function(){
console.log("cap say's Hi")
}
}
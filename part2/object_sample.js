var person={name:'darvin',age:20,place:'mankulam'}

console.log(person.name)


person.dob="4-11-2000"

for (x in person){
    console.log(person[x])
}
var person={name:'darvin',age:20,place:'mankulam',display: function () {
    console.log(this.age)
    
}}

person.display()
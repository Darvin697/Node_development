function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display = function(){
        console.log("Name: "+name +" Age: "+age +" Place :"+place)
    }
}

var thomas=new person("Thomas",20,"Mankulam")
var jibu=new person("Gibu",30,"Anakulam")


thomas.display()
jibu.display()
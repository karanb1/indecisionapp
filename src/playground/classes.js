class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi I am ${this.name}, I am ${this.age} old.` 
    }

}

class Traveller extends Person{
    constructor(name,age,homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
    }
    hasLocation(){
      return !!this.homeLocation;
    }
    getGreeting(){
        let location = super.getGreeting(); 
        if(this.hasLocation()){
           location += `I live in ${this.homeLocation}`;
        return location;
        }
    }
}
const me = new Traveller("Karan Balodi",21,"New Delhi");
console.log(me.getGreeting());
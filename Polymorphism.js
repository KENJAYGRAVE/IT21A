class Human{
    constructor(name){
         this.name = name;
     }

     sayName(){
         console.log(this.name);
       }
}

class istodyante extends Human{
   constructor(name, rollNumber){
      super(name);
      this.rollNumber = rollNumber;
  }

      logDetails(){
      console.log(`Name: ${this.name}, Roll
      number: ${this.rollNumber}`)
      }

      sayName(){
      console.log("From Student");
      super.sayName();
      }

}
      var man = new istodyante("Ken jay", 1);
      man.logDetails();
      man.sayName();
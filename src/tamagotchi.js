class Tamagotchi {
  constructor(name){
    this.name = name;
    this.hunger = 100;
    this.rest = 100;
    this.happiness = 100;
  }
  setHunger(){
    setInterval(()=>{
      this.hunger -= 10;
    }, 1000);
  }
  setRest(){
    setInterval(()=>{
      this.rest -= 10;
    }, 1000);
  }
  setHappiness(){
    setInterval(()=>{
      if(this.hunger < 50 || this.rest <50){
        this.happiness -= 15;
      } else {
        this.happiness -= 10;
      }
      // this.happiness -=10;
      // //idea: happiness decreases faster if rest and hunger are lower
    }, 1000);
  }
  setNeeds(){
    this.setRest();
    this.setHunger();
    this.setHappiness();
  }
  setReset(){
    this.hunger = 100;
    this.rest = 100;
    this.happiness = 100;
  }
  giveFood(snacks){
    this.hunger += 5 * snacks;
  }
  giveSleep(night){
    this.rest += 5 * night;
  }
  giveHappiness(smile){
    this.happiness += 5 * smile;
  }
}

export { Tamagotchi };

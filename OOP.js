// Q2. OOP general programming


class Man {
  constructor(){
    this.mouthOpen = false;
    this.self = this;
  }
  
  demandMouthOpen(patient){
    patient.openMouth(this);
  }
  
  demandMouthClose(patient){
    patient.closeMouth(this);
  }
  
  openMouth(caller){
    if(caller && caller.doctor){
      this.mouthOpen = true;
      console.log("The man opens his mouth.");
    } else if(caller && !caller.doctor) {
      console.log("Sorry, I only open my mouth for doctors.");
    }else {
      this.mouthOpen = true;
      console.log("I've opened my mouth.");
    }
  }
  
  closeMouth(caller){
    if(caller && caller.doctor){
      this.mouthOpen = false;
      console.log("The man closes his mouth.");
    } else if(caller && !caller.doctor) {
      console.log("Sorry, I only close my mouth for doctors.");
    }else {
      this.mouthOpen = false;
      console.log("I've closed my mouth.");
    }
  }
}

class Doctor extends Man{
  constructor(){
    super();
    this.doctor = true;
  }
}


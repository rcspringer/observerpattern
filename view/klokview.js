class KlokView extends Observer {
  constructor(model) {
    super(model);
    console.log(this);
    this.model.addObserver(this)
    
  }

  update() {
    super.update();
    this.tekenTime();
  }
  
  tekenTime() {
    document.getElementById("digitalTime").innerHTML = 
      this.zeroify(this.model.getHours()) + 
      ":" + this.zeroify(this.model.getMinutes()) + 
      ":" + this.zeroify(this.model.getSeconds());
  }

  zeroify(getal) {
    if(getal < 10) {
      getal = "0" + getal;
    }
    return getal;
  }

}
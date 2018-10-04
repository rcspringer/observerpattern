class KlokView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this)
    
  }

  update() {
    super.update();
    this.drawClock(this.model.getDays(), this.model.getHours(), this.model.getMinutes(), this.model.getSeconds());
  }
  
  drawClock(days, hours, minutes, seconds) {
    document.getElementById("digitalTime").innerHTML = 
      this.zeroify(days) + "dagen " +
      this.zeroify(hours) + 
      ":" + this.zeroify(minutes) + 
      ":" + this.zeroify(seconds);
  }

  zeroify(getal) {
    if(getal < 10) {
      getal = "0" + getal;
    }
    return getal;
  }

}
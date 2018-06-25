class KlokView {
  
  constructor() {
  
  }
  
  drawClock(hours, minutes, seconds) {
    document.getElementById("digitalTime").innerHTML = 
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
class KlokView extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this)
  }

  update() {
    super.update();
    if(this.model.visibility == true) {
      this.show();  
    }
    else {
      this.hide();
    }
    this.drawClock(this.model.getDays(), this.model.getHours(), this.model.getMinutes(), this.model.getSeconds());
  }
  
  hide() {
    this.getElement().style.opacity = 0;
    this.getElement().style.transform = 'translateY(-100%) scaleY(0)';
  }
  
  show() {
    this.getElement().style.opacity = 1;
    this.getElement().style.transform = 'translateY(-100%) scaleY(1)';
  }

  drawClock(days, hours, minutes, seconds) {
    this.getElement().innerHTML = 
      days + " dagen " +
      hours + 
      " uur " + minutes + 
      " minuten " + seconds + " seconden";
  }

  getElement() {
    return document.getElementById("digitalTime");
  }

  zeroify(getal) {
    if(getal < 10) {
      getal = "0" + getal;
    }
    return getal;
  }
}
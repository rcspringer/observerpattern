class Controller {
  constructor() {
    this.klokModel = new KlokModel();
    this.klokView = new KlokView(this.klokModel);
    this.klokViewAnalog = new AnalogClockView(this.klokModel);
    this.timerID = -1;

    document.getElementById("start").addEventListener("click", (e) => {
      console.log("Start");
      this.startKlok();
    })
    document.getElementById("stop").addEventListener("click", (e) => {
      console.log("Stop");
      this.stopKlok();
    })
  }

  startKlok() {
    this.timerID = setInterval(this.updateKlok.bind(this), 1000);
  }

  stopKlok() {
    clearInterval(this.timerID);
  }

  updateKlok() {
    console.log("Update clock");
    this.klokModel.updateTime();
  }
  
}
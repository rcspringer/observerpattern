class Controller {
  constructor() {
    this.klokModel = new KlokModel();
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

  saveKlok() {
    this.klokModel.saveTime();
  }

  updateKlok() {
    this.klokModel.updateTime();
    console.log(this.klokModel.getHours(), this.klokModel.getMinutes(), this.klokModel.getSeconds());
  }
  
}
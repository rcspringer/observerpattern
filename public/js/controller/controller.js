class Controller {
  constructor() {
    this.countDown = new KlokCountDownModel("01-01-2030");
    this.klokView = new KlokView(this.countDown);
    this.timerID = -1;
    this.startKlok();
    this.socket = io();
    this.socket.on('visibility', (msg) => {
      this.updateKlokVisibility(msg);
    });
  }

  updateKlokVisibility(msg) {
    console.log(msg);
    this.countDown.updateTime();
    if(msg == true) {
      this.countDown.setVisibility(true);
    }
    else {
      this.countDown.setVisibility(false);
    }
  }

  startKlok() {
    this.timerID = setInterval(this.updateKlok.bind(this), 500);
  }

  stopKlok() {
    clearInterval(this.timerID);
  }

  updateKlok() {
    this.countDown.updateTime();
  }
}
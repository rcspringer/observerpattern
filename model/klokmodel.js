class KlokModel extends Observable {
  constructor() {
    super();
    this.time = new Date();
    this.id = "stopWatchKlok"
  }

  updateTime() {
    this.time = new Date();
    this.notify();
  }

  saveTime() {
    let saveObject = {
      time: this.time
    }
    let timeArray = JSON.parse(localStorage.getItem(this.id)) || [];
    timeArray.push(saveObject);
    localStorage.setItem(this.id, JSON.stringify(timeArray));
    this.notify();
  }
  
  getTimeTable() {
    let timeArray = JSON.parse(localStorage.getItem(this.id)) || [];
    return timeArray;
  }

  getHours() {
    return this.time.getHours();
  }

  getMinutes() {
    return this.time.getMinutes();
  }

  getSeconds() {
    return this.time.getSeconds();
  }
}
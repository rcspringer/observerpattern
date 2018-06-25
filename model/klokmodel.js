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
    // Save in de localstorage here ...
    
    // ...
    this.notify();
  }
  
  getTimeTable() {
    // Return een array vanuit de local storage
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
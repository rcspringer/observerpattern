class KlokModel extends Observable {
  constructor() {
    super();
    this.time = new Date();
  }

  updateTime() {
    this.time = new Date();
    this.notify();
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
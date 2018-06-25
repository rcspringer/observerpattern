class KlokModel {
  constructor() {
    this.time = new Date();
  }

  updateTime() {
    this.time = new Date();
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
class KlokCountDownModel extends Observable {
  constructor(stringDate) {
    super();
    this.time = new Date();
    this.countDownDate = new Date(stringDate);
    this.id = "countDownKlok";
    this.visibility = false;
  }

  setVisibility(value) {
    this.visibility = value;
    this.notify();
  }

  updateTime() {
    let now = new Date();
    this.distance = this.countDownDate - now;
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

  getDays() {
    let days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    return days;
  }

  getHours() {
    let hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return hours;
  }

  getMinutes() {
    let minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
    return seconds;
  }
}
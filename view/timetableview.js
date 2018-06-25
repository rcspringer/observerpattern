class TimeTableView extends Observer {

  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
    this.drawTimeTable();
  }

  drawTimeTable() {
    let timeTable = this.model.getTimeTable();
    let element = document.getElementById("timeTable"); 
    element.innerHTML = "";
    for (let i = 0; i < timeTable.length; i++) {
      const current = timeTable[i];
      let currentTime = new Date(current.time);
      element.innerHTML += "Ronde "+ (i + 1) +" Time: " + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + "<br>";
    } 
  }
  
}
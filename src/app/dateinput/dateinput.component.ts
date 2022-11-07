import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dateinput',
  templateUrl: './dateinput.component.html',
  styleUrls: ['./dateinput.component.css']
})
export class DateinputComponent implements OnInit {
startDate: any;
maxDate: any;
endDate: any;
selectedDate: any;
storedDate: any;
start_date:any;
End_date:any;
  constructor() { }

  ngOnInit(): void {
    // this.getLocal();
    this.todayDate();
  }
todayDate(){
  this.startDate = new Date();
  console.log(this.startDate);
  this.startDate = this.startDate.toISOString().substr(0,10);
  console.log(this.startDate);

}
nextDate(){
  console.log(this.selectedDate);
  // console.log(this.startDate.getDate()+1);
  let getDate = new Date(this.selectedDate);
  this.maxDate = getDate.setDate(getDate.getDate()+1);
  this.maxDate = new Date(this.maxDate);
  // console.log(this.maxDate); 
  this.maxDate = this.maxDate.toISOString().substr(0,10);
  console.log(this.maxDate); 

  // this.endDate = this.selectedDate.setDate(this.selectedDate.getDate()+parseInt('1'));
  // this.endDate = new Date();
  // this.endDate.setDate(this.endDate.getDate()+1);
  // console.log(this.endDate);
}

saveLocal(){
  let dateRange = {
    'StartDate': this.selectedDate,
    'EndDate': this.endDate
  }
  localStorage.setItem('Date', JSON.stringify(dateRange));
  // this.getLocal();
}

getLocal(){
  this.storedDate = localStorage.getItem('Date');
  this.storedDate = JSON.parse(this.storedDate);
  this.selectedDate = this.storedDate['StartDate'];
  this.start_date = this.selectedDate;
  this.endDate = this.storedDate['EndDate'];
  this.End_date = this.endDate
  console.log(this.selectedDate);
}

}

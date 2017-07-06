import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Mission = 
  [
    "Win people to Christ",
    "Integrate new believers into the church life",
    "Develop church memebers to Christ-likeness",
    "Empower church leaders to serve",
    "Rejoice together in worship"
  ];
  constructor() { }

  ngOnInit() {
  }

}

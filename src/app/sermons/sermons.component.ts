import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})
export class SermonsComponent implements OnInit {
  public sermonList = ["Test Me1", "Test Me2", "Test Me3","Test Me3" ,"Test Me4"];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    header = 'Header';
    home = 'Home';
    master = 'MasterData';
    
  constructor() { }

  ngOnInit() {
  }

}

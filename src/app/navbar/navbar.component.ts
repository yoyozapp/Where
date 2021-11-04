import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public share:ShareService) { }

  ngOnInit(): void {
  }

}

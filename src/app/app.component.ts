import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/shared/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'git-status';
  constructor(private auth: AuthService) {

  }
  ngOnInit() {
    this.auth.localAuthSetup();
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.handleAuthCallback();
    console.log('callback ', this.auth.loggedIn);
  }

}

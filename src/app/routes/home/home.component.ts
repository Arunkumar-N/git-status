import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/shared/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any;
  username='Arunkumar-N';
  constructor(private githubService: GithubService) {

  }
  search(){
    this.githubService.updateUsername(this.username);
    
    this.githubService.getUser().subscribe((user:any) => {
      console.log('user ', user);
      this.user = user;
    });

}

  ngOnInit() {
  }
}

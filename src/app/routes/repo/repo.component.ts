import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/shared/github.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos:any;
  constructor(private githubService: GithubService) {
    this.githubService.getRepos().subscribe((data:any) => {
      console.log('Response', data);
      this.repos = data;
  });
  }

  ngOnInit() {
  }

}

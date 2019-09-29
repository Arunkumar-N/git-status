import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/shared/github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.css']
})
export class FolderViewComponent implements OnInit {

  public repoName:string;
  private sub: any;
  public repoList: string[];
  public contentList: any;
  public isContent: boolean;

  constructor(private route: ActivatedRoute, private githubService: GithubService) {
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.repoName = params['repoName']; // (+) converts string 'id' to a number
      console.log('Repo Name: ' + this.repoName);
      this.repoList = [];
      this.isContent = true;
      this.getRepo();
      // In a real app: dispatch action to load the details here.
   });
  }

  getRepo() {
    console.log('getReposFiles');
    this.githubService.getReposFiles(this.repoName).subscribe((data:any) => {
      console.log('Response asd', data);
      this.contentList = data;
  });
  }
  pushRepoList(localRepoName: string) {
    this.repoList.push(localRepoName);
    let path = '';
    this.repoList.forEach((value, index) => {
      path = path + '/' +value;
    });
    this.process(path);
  }
  back(index: number) {
    this.repoList = this.repoList.slice(0,index+1);
    let path = '';
    this.repoList.forEach((value, index) => {
      path = path + '/' +value;
    });
    this.process(path);
  }
  process(path: string) {
    this.githubService.getReposContent(this.repoName, path).subscribe((data:any) => {
      console.log('Response asd', data);
      if (typeof data === 'object') {
        console.log('Object');
        this.isContent = false;
      }
      if (Array.isArray(data)) {
        console.log('Array');
        this.isContent = true;
      }
      this.contentList = data;
  });
  }

}

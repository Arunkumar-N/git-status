import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class GithubService{
    private username = 'Arunkumar-N';
    private client_id = 'a772b6c958cc4423a3c2';
    private client_secret='0f6ab70f36a8c3bca501cfa978e9fdb092262940';
    
    constructor(private _http:Http){
        console.log('Github Service Init...');
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).pipe(map((response: any) => response.json()));;
    }
    
    getRepos() {
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).pipe(map((response: any) => response.json()));
    }

    getReposFiles(repoName: string) {
        console.log('Called: '+ repoName);
        return this._http.get('https://api.github.com/repos/'+this.username+'/' + repoName + '/contents?client_id='+this.client_id+'&client_secret='+this.client_secret).pipe(map((response: any) => response.json()));
    }
    getReposContent(repoName: string, path: string) {
        console.log('Called: '+ repoName);
        return this._http.get('https://api.github.com/repos/'+this.username+'/' + repoName + '/contents' + path +'?client_id='+this.client_id+'&client_secret='+this.client_secret).pipe(map((response: any) => response.json()));
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}
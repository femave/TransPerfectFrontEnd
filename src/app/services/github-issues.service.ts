
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IssueService {

   constructor(private http: HttpClient){}

   getIssues(){
    return this.http.get('https://api.github.com/repos/angular/angular/issues')
    .map(res => res);
   }

   getIssuesPage(number){
     return this.http.get(`https://api.github.com/repos/angular/angular/issues/${number}`)
     .map(res => res);
   }
}
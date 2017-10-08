
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IssueService {

   constructor(private http: HttpClient){}

   getIssues(){
    return this.http.get('https://api.github.com/repos/angular/angular/issues')
    .map(res => res);
   }

   getIssuesPage(number) {
     return this.http.get(`https://api.github.com/repos/angular/angular/issues/${number}`,{
       headers: new HttpHeaders().set('Accept', 'application/vnd.github.VERSION.html+json')
     })
     .map(res => res);
   }
}
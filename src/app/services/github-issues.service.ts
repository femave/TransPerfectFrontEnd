
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Injectable()
export class IssueService {

   constructor(private http: HttpClient){}

   getIssues(){
        // petición por get a esa url de un api rest de pruebas
    return this.http.get("https://api.github.com/repos/angular/angular/issues").map(res => res);
   }
}
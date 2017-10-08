import { Component } from '@angular/core';
import { IssueService } from './services/github-issues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public issues;

  title = 'app';

  constructor(private issueService: IssueService){
    this.issueService.getIssues().subscribe(response => {
      this.issues = response;
      console.log(this.issues);
    })
  }
}

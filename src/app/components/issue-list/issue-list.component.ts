import { Component } from '@angular/core';
import { IssueService } from '../../services/github-issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent {
  public issues;

  title = 'Issues list';

  constructor(private issueService: IssueService){
    this.issueService.getIssues()
    .subscribe(response => {
      this.issues = response;
    })
  }
  
}

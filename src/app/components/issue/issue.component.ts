import { Component } from '@angular/core';
import { IssueService } from '../../services/github-issues.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent{
  public issue;
  public body;

  constructor(private issueService: IssueService, private route: ActivatedRoute){
    this.route.params.subscribe(params => {    
      this.issueService.getIssuesPage(params['id'])
      .subscribe(response => {
        this.issue = response;
        this.body = JSON.stringify(this.issue.body_html);
        console.log(response)
      })
    })
    
  }

}

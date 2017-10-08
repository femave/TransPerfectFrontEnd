import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueComponent } from './components/issue/issue.component';
import { IssueService } from './services/github-issues.service'

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IssueListComponent
      },
      {
        path: 'issue/:id',
        component: IssueComponent
      }
    ])
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

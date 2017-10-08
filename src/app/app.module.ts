import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// ---------> angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule, MatGridListModule} from '@angular/material';

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
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
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
  schemas: [NO_ERRORS_SCHEMA],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

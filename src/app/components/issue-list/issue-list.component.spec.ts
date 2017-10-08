// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatListModule } from '@angular/material';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { By }              from '@angular/platform-browser';
// import { DebugElement }    from '@angular/core';

// import { IssueService } from '../../services/github-issues.service';
// import { IssueListComponent } from './issue-list.component';

// describe('IssueListComponent', () => {
//   let component: IssueListComponent;
//   let fixture: ComponentFixture<IssueListComponent>;
//   let de:      DebugElement;
//   let el:      HTMLElement;
//   let userServiceStub = "Test use";

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ MatListModule ],
//       providers:    [ {provide: IssueService, useValue: userServiceStub } ],
//       declarations: [ IssueListComponent ], // declare the test component
//     });

//     fixture = TestBed.createComponent(IssueListComponent);

//     component = fixture.componentInstance; // BannerComponent test instance

//     // query for the title <h1> by CSS element selector
//     de = fixture.debugElement.query(By.css('h1'));
//     el = de.nativeElement;
//   });

//   it('should display original title', () => {
//     fixture.detectChanges();
//     expect(el.textContent).toContain(component.title);
//   });
  
//   it('should display a different test title', () => {
//     component.title = 'Test Title';
//     fixture.detectChanges();
//     expect(el.textContent).toContain('Test Title');
//   });
// });

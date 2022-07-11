import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AngularMaterialModule } from './angular-material-module';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProposalListComponent } from './components/proposals/proposal-list/proposal-list.component';
import { ProposalCreateComponent } from './components/proposals/proposal-create/proposal-create.component';
import { TeamCreateComponent } from './components/students/teams/team-create/team-create.component';
import { TeamListComponent } from './components/students/teams/team-list/team-list.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorComponent } from './components/shared/error/error.component';
import { ErrorInterceptor } from './error.interceptor';
import { QnaCreateComponent } from './components/qna/qna-create/qna-create.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { QnaListComponent } from './components/qna/qna-list/qna-list.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { StatusComponent } from './components/students/teams/team-create/board/status/status.component';
import { PopupChoiceComponent } from './components/shared/popups/popup-choice/popup-choice.component';
import { PopupConfirmComponent } from './components/shared/popups/popup-confirm/popup-confirm.component';
import { PendingComponent } from './components/students/teams/team-create/board/pending/pending.component';
import { BoardComponent } from './components/students/teams/team-create/board/board.component';
import { MainComponent } from './components/main/main.component';
import { BeforeLoginComponent } from './components/main/before-login/before-login.component';
import { AfterLoginComponent } from './components/main/after-login/after-login.component';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProposalListComponent,
    ProposalCreateComponent,
    TeamCreateComponent,
    TeamListComponent,
    ProjectListComponent,
    ErrorComponent,
    QnaCreateComponent,
    QnaListComponent,
    SideNavComponent,
    SpinnerComponent,
    StudentListComponent,
    StatusComponent,
    PopupChoiceComponent,
    PopupConfirmComponent,
    PendingComponent,
    BoardComponent,
    MainComponent,
    BeforeLoginComponent,
    AfterLoginComponent,
    AdminMainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

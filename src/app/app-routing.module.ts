import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { ProjectApplyComponent } from './components/projects/project-apply/project-apply.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProposalCreateComponent } from './components/proposals/proposal-create/proposal-create.component';
import { ProposalListComponent } from './components/proposals/proposal-list/proposal-list.component';
import { QnaCreateComponent } from './components/qna/qna-create/qna-create.component';
import { QnaListComponent } from './components/qna/qna-list/qna-list.component';
import { TeamCreateComponent } from './components/students/teams/team-create/team-create.component';
import { TeamListComponent } from './components/students/teams/team-list/team-list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'proposal/create', component: ProposalCreateComponent },
  { path: 'proposal/list', component: ProposalListComponent },
  { path: 'student-team/add', component: TeamCreateComponent },
  { path: 'student-team/list', component: TeamListComponent },
  { path: 'project/list', component: ProjectListComponent },
  { path: 'project/apply', component: ProjectApplyComponent },
  { path: 'qna/create', component: QnaCreateComponent },
  { path: 'qna/edit/:id', component: QnaCreateComponent },
  { path: 'qna/list', component: QnaListComponent },
  { path: 'admin', component: AdminMainComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

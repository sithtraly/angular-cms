import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { ReportComponent } from './components/report/report.component';
import { ConfigComponent } from './components/config/config.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'student', component: StudentComponent },
      { path: 'reports', component: ReportComponent },
      { path: 'config', component: ConfigComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { AuthGuard } from './guards/auth.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { RoleGuardAdmin } from './guards/role.guard';
import { QrCodeComponent } from './components/qr-code/qr-code.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard /*, RoleGuardAdmin */],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'student', component: StudentComponent },
      { path: 'reports', component: ReportComponent },
      { path: 'qrCode', component: QrCodeComponent },
      { path: 'config', component: ConfigComponent },
    ]
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatSliderModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListComponent } from './list/list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { OnboardingParentComponent } from './onboarding-parent/onboarding-parent.component';

const appRoutes: Routes = [
  { path: 'onboard', component: OnboardingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view/:id', component: ViewStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'list', component: ListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OnboardingComponent,
    PageNotFoundComponent, ListComponent,
    StudentDetailComponent,
    EditStudentComponent,
    ViewStudentComponent,
    OnboardingParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MatTabsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule, MatNativeDateModule, MatSliderModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

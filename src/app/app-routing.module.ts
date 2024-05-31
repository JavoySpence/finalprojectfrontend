import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './partials/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component';
import { CreateDoctorsComponent } from './pages/create-doctors/create-doctors.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { EditDoctorsComponent } from './pages/edit-doctors/edit-doctors.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { SeeDoctorsComponent } from './pages/see-doctors/see-doctors.component'; 
import { RescheduleAppointmentComponent } from './pages/reschedule-appointment/reschedule-appointment.component';
import { CreateRescheduleComponent } from './pages/create-reschedule/create-reschedule.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackListComponent } from './pages/feedback-list/feedback-list.component';
import { ViewFeedbacksComponent } from './pages/view-feedbacks-page/view-feedbacks-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'add-appointment', component: AddAppointmentComponent },
  { path: 'edit-page/:id', component: EditPageComponent },
  { path: 'edit-doctors/:id', component: EditDoctorsComponent }, 
  { path: 'view-page/:id', component: ViewPageComponent }, 
  { path: 'appointment-list', component: AppointmentListComponent },
  { path: 'doctors-page', component: DoctorPageComponent },
  { path: 'see-doctors', component: SeeDoctorsComponent }, 
  { path: 'create-doctors', component: CreateDoctorsComponent }, 
  { path: 'create-reschedule', component: CreateRescheduleComponent }, 
  { path: 'reschedule-appointment', component: RescheduleAppointmentComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'feedback-list', component: FeedbackListComponent },
  { path: 'view-feedbacks-page', component: ViewFeedbacksComponent } 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

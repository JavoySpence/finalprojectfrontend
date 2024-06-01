import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {EditDoctorsComponent } from './pages/edit-doctors/edit-doctors.component';
import {ViewPageComponent } from './pages/view-page/view-page.component';
import { CreateDoctorsComponent } from './pages/create-doctors/create-doctors.component';
import { ViewDoctorComponent } from './pages/view-doctor/view-doctor.component';
import { SeeDoctorsComponent } from './pages/see-doctors/see-doctors.component';
import { RescheduleAppointmentComponent } from './pages/reschedule-appointment/reschedule-appointment.component';
import { CreateRescheduleComponent } from './pages/create-reschedule/create-reschedule.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackListComponent } from './pages/feedback-list/feedback-list.component';
import { ViewFeedbacksComponent } from './pages/view-feedbacks-page/view-feedbacks-page.component';
import { DoctorsDropdownComponent } from './pages/doctors-dropdown/doctors-dropdown.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AddAppointmentComponent,
    AppointmentListComponent,
    ContactUsComponent,
    DoctorPageComponent,
    EditPageComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    ViewPageComponent,
    CreateDoctorsComponent,
    EditDoctorsComponent,
    ViewDoctorComponent,
    SeeDoctorsComponent,
    RescheduleAppointmentComponent,
    CreateRescheduleComponent,
    FeedbackComponent,
    FeedbackListComponent,
    ViewFeedbacksComponent,
    DoctorsDropdownComponent
   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

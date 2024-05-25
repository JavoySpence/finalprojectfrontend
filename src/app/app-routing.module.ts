import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './partials/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component'; // Correct import
import { CreateDoctorsComponent } from './pages/create-doctors/create-doctors.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { EditDoctorsComponent } from './pages/edit-doctors/edit-doctors.component'; // Corrected to EditDoctorsComponent
import { ViewPageComponent } from './pages/view-page/view-page.component'; // Make sure this component exists and is correctly imported

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', title: 'Home page', component: HomepageComponent },
  { path: 'header', title: 'Header page', component: HeaderComponent },
  { path: 'about-us', title: 'About page', component: AboutUsComponent },
  { path: 'contact', title: 'Contact page', component: ContactUsComponent },
  { path: 'footer', title: 'Footer page', component: FooterComponent },
  { path: 'add-appointment', title: 'Add Appointment', component: AddAppointmentComponent },
  { path: 'edit-page/:id', title: 'Edit Page', component: EditPageComponent },
  { path: 'edit-doctors/:id', title: 'Edit Doctor', component: EditDoctorsComponent }, 
  { path: 'view-page/:id', title: 'View Page', component: ViewPageComponent }, 
  { path: 'appointment-list', title: 'Appointment Page', component: AppointmentListComponent },
  { path: 'doctors-page', title: 'Doctors Page', component: DoctorPageComponent },
  { path: 'create-doctors', title: 'Create Doctors', component: CreateDoctorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

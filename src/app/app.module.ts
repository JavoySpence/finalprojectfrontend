import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './partials/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component';
// import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    AddAppointmentComponent,
    AppointmentListComponent,
    EditPageComponent,
    ViewPageComponent,
    DoctorPageComponent,
    // AppointmentListComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './partials/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';



const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', title: 'Home page', component: HomepageComponent },
  { path: 'header', title: 'header page', component: HeaderComponent},
  { path: 'about-us', title: 'about page', component: AboutUsComponent},
  { path: 'contact', title: 'contact page', component: ContactUsComponent},
  { path: 'footer', title: 'footer page', component: FooterComponent},
  { path: 'add-appointment', title: 'Add Appointment', component: AddAppointmentComponent } 
];
 

 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

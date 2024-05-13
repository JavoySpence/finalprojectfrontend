import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './partials/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


const routes: Routes = [
  { path: 'homepage', title: 'Home page', component: HomepageComponent },
  { path: 'header', title: 'header page', component: HeaderComponent},
  { path: 'about', title: 'about page', component: AboutUsComponent},
  { path: 'contact', title: 'contact page', component: ContactUsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

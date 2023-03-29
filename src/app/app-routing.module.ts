import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Portofolio', component: PortofolioComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact-Us', component: ContactUsComponent },

  { path: '**', component: HomeComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

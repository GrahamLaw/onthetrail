import { Routes } from '@angular/router';

import { MainComponent } from '../main/main.component';
import { PagedetailsComponent } from '../pagedetails/pagedetails.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'main',     component: MainComponent },
  { path: 'about',     component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
          { path: '', component: MainComponent },
          { path: 'about', component: AboutComponent },
          { path: 'blog', component: BlogComponent },
          { path: '**', component: MainComponent }
      ]
  },
  {   path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

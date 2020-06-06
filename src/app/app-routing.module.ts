import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrariesComponent } from './libraries/libraries.component';


const routes: Routes = [
  {path: '', component:LibrariesComponent},
  {path: '*', component:LibrariesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

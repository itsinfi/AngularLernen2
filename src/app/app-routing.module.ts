import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { CarListComponent } from './pages/car-list/car-list.component';

const routes: Routes = [
  { path: '', component: CarListComponent},
  { path: 'car-details/:id', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSeatsComponent } from './book-seats/book-seats.component';
import { ShowSeatsComponent } from './show-seats/show-seats.component';

const routes: Routes = [
  { path:'', redirectTo:'',pathMatch:'full'},
  { path:'bookSeats',component:BookSeatsComponent},
  { path:'showSeats',component:ShowSeatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

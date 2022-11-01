import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoesComponent } from './admin/shoes/shoes.component';
import { UsersComponent } from './admin/users/users.component';
import { ShopshoesComponent } from './shopshoes/shopshoes.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/shoes', component: ShoesComponent },
  { path: 'shop', component: ShopshoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

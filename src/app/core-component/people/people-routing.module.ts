import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';

const routes: Routes = [
  { path: '', redirectTo: 'customerlist', pathMatch: 'full' },
  {
    path: '',
    children: [
 
      {
        path: 'user-list',
        loadChildren: () =>
          import('./userlist/userlist.module').then((m) => m.UserlistModule),
      },
      {
        path: 'add-user',
        loadChildren: () =>
          import('./adduser/adduser.module').then((m) => m.AdduserModule),
      },
   
      {
        path: 'edit-supplier',
        loadChildren: () =>
          import('./editsupplier/editsupplier.module').then(
            (m) => m.EditsupplierModule
          ),
      },
      {
        path: 'edit-user',
        loadChildren: () =>
          import('./edituser/edituser.module').then((m) => m.EdituserModule),
      },
  
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}

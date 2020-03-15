import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './front-office/component/welcome/welcome.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { ListUsersComponent } from './front-office/component/list-users/list-users.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, },
  { path: 'user-list', component: ListUsersComponent, },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

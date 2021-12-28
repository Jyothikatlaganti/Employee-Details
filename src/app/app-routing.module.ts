import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashBoardComponent } from './Component/employee-dash-board/employee-dash-board.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { SignupPageComponent } from './Component/signup-page/signup-page.component';

const routes: Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginPageComponent},
  {path:'signup',component:SignupPageComponent},
  {path:'employeedetails',component:EmployeeDashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

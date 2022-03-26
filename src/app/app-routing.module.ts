import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingcompComponent } from './landingcomp/landingcomp.component';

const routes: Routes = [
  {path :'',component: LandingcompComponent},
  {path:'clone',loadChildren: ()=>import("./clone/clone.module").then((m)=>m.CloneModule)},
  {path:'login',loadChildren: ()=>import("./login/login.module").then((m)=>m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

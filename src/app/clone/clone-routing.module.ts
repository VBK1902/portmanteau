import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactcompComponent } from './contactcomp/contactcomp.component';
import { DownloadcompComponent } from './downloadcomp/downloadcomp.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import { PricingcompComponent } from './pricingcomp/pricingcomp.component';

const routes: Routes = [
  { path:'',component: HomecompComponent},
  { path:'pricing',component: PricingcompComponent},
  { path:'contact',component: ContactcompComponent},
  { path:'download',component: DownloadcompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloneRoutingModule { }

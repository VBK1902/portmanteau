import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloneRoutingModule } from './clone-routing.module';
import { HomecompComponent } from './homecomp/homecomp.component';
import { ContactcompComponent } from './contactcomp/contactcomp.component';
import { PricingcompComponent } from './pricingcomp/pricingcomp.component';
import { DownloadcompComponent } from './downloadcomp/downloadcomp.component';


@NgModule({
  declarations: [
    HomecompComponent,
    ContactcompComponent,
    PricingcompComponent,
    DownloadcompComponent
  ],
  imports: [
    CommonModule,
    CloneRoutingModule
  ]
})
export class CloneModule { }

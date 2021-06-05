import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { ComponentsModule } from './components/components.module';
import { AboutComponent } from './sections/about/about.component';


@NgModule({
  declarations: [
    PublicComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule
  ]
})
export class PublicModule { }

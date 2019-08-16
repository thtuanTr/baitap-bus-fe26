import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataBindingModule} from './data-binding/data-binding.module';
import {StructuralDirectiveModule} from './structural-directive/structural-directive.module';
import {AttributeDirectiveModule} from './attribute-directive/attribute-directive.module';
import {BaitapThemsanphamModule} from './baitap-themsanpham/baitap-themsanpham.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ItemCardComponent } from './ng-content/item-card/item-card.component';
import { InteractionModule } from './interaction/interaction.module';
import { BaitapBusModule } from './baitap-bus/baitap-bus.module';
@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    DataBindingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    BaitapThemsanphamModule,
    InteractionModule,
    BaitapBusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

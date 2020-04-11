import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './tools/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { PublicationcardComponent } from './tools/publicationcard/publicationcard.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import { PostdetailComponent } from './components/home/subcomponents/postdetail/postdetail.component';
import { PostlistComponent } from './components/home/subcomponents/postlist/postlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PublicationcardComponent,
    PostdetailComponent,
    PostlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    MenuModule,
    BrowserAnimationsModule,
    PanelMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

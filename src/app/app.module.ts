import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SetupComponent } from './main-content/setup/setup.component';
import { YoutubeApiService } from './services/youtubeapi.service';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    SetupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DragulaModule
  ],
  providers: [YoutubeApiService, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatGridListModule,
  MatButtonToggleModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { IconComponent } from './icon/icon.component';
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  imports:      [   
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule, 
    ScrollDispatchModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatButtonToggleModule
  ],
  
  declarations: [ 
    AppComponent,
    HomeComponent,
    IconComponent,
    AnimateComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }

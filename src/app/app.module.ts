import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IconComponent } from './icon/icon.component';
import { AnimateModule } from './animate/animate.module';

@NgModule({
  imports:      [   
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule, 
    ScrollingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatCheckboxModule,
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
    MatButtonToggleModule,
    AnimateModule
  ],
  
  declarations: [ 
    AppComponent,
    HomeComponent,
    IconComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }

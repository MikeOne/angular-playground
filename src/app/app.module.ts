import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';

@NgModule({
    declarations: [AppComponent, Comp1Component, Comp2Component],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule, MatMenuModule, MatIconModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlanComponent } from './plan/plan.component';
import { HistorialComponent } from './historial/historial.component';
import { CrearComponent } from './crear/crear.component';
import { ComprarComponent } from './comprar/comprar.component';
import { LimpiaComponent } from './limpia/limpia.component';
import { ComidasComponent } from './comidas/comidas.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PlanComponent,
    HistorialComponent,
    CrearComponent,
    ComprarComponent,
    LimpiaComponent,
    ComidasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
FullCalendarModule.registerPlugins([
  dayGridPlugin
])



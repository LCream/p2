import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { AppComponent } from './app.component';
import { PlanComponent } from './plan/plan.component';
import { HistorialComponent } from './historial/historial.component';
import { CrearComponent } from './crear/crear.component';
import { ComprarComponent } from './comprar/comprar.component';
import {LimpiaComponent} from './limpia/limpia.component';
import { ComidasComponent} from './comidas/comidas.component';
import { MenuComponent} from './menu/menu.component';


const routes: Routes = [{ path: 'perfil de usuario', component: PerfilComponent },
                        { path: 'plan actual', component: PlanComponent },  
                        { path: 'lista de la compra', component: ComprarComponent },
                        { path: 'crear menu', component: CrearComponent },
                        { path: 'historial menus', component: HistorialComponent },
                        { path: 'principal', component: AppComponent },
                        { path: 'limpia', component: LimpiaComponent },
                        { path: 'comidas', component: ComidasComponent},
                        { path: 'menu creado', component: MenuComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

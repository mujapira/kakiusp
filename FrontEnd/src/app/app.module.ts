import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HighchartsChartModule } from 'highcharts-angular';
import { ResumoComponent } from './pages/financial/resumo/resumo.component';
import { EntradasComponent } from './pages/financial/entradas/entradas.component';
import { SaidasComponent } from './pages/financial/saidas/saidas.component';
import { PendenciasComponent } from './pages/financial/pendencias/pendencias.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FinancialComponent,
    NotfoundComponent,
    ResumoComponent,
    EntradasComponent,
    SaidasComponent,
    PendenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatTabsModule,
    HighchartsChartModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HighchartsChartModule } from 'highcharts-angular';
import { ResumoComponent } from './pages/financial/resumo/resumo.component';
import { EntradasComponent } from './pages/financial/entradas/entradas.component';
import { SaidasComponent } from './pages/financial/saidas/saidas.component';
import { PendenciasComponent } from './pages/financial/pendencias/pendencias.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PizzaChartComponent } from './components/pizza-chart/pizza-chart.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';
import { AllTransactionsComponent } from './pages/financial/all-transactions/all-transactions.component';
import { TransactionDetailsComponent } from './pages/financial/transaction-details/transaction-details.component';

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
    PendenciasComponent,
    LoginComponent,
    PizzaChartComponent,
    ColumnChartComponent,
    AllTransactionsComponent,
    TransactionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatTabsModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}

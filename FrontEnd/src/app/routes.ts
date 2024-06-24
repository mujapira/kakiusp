import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ResumoComponent } from './pages/financial/resumo/resumo.component';
import { EntradasComponent } from './pages/financial/entradas/entradas.component';
import { SaidasComponent } from './pages/financial/saidas/saidas.component';
import { PendenciasComponent } from './pages/financial/pendencias/pendencias.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AllTransactionsComponent } from './pages/financial/all-transactions/all-transactions.component';
import { TransactionDetailsComponent } from './pages/financial/transaction-details/transaction-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'financial',
    component: FinancialComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: ResumoComponent, data: {title: 'Resumo'} },
      { path: 'inputs', component: EntradasComponent, data: {title: 'Entradas'} },
      { path: 'inputs/all', component: AllTransactionsComponent, data: {dataType: "inputs"} },
      { path: 'inputs/:id', component: TransactionDetailsComponent, data: {dataType: "inputs"} },
      { path: 'outputs', component: SaidasComponent, data: {title: 'Saídas'} },
      { path: 'outputs/all', component: AllTransactionsComponent, data: {dataType: "outputs"} },
      { path: 'outputs/:id', component: TransactionDetailsComponent, data: {dataType: "outputs"} },
      { path: 'pending', component: PendenciasComponent, data: {title: 'Pendências'} },
      { path: 'pending/all', component: AllTransactionsComponent, data: {dataType: "pending"} },
      { path: 'pending/:id', component: TransactionDetailsComponent, data: {dataType: "pending"} },
    ],
  },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

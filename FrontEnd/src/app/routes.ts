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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'financial',
    component: FinancialComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: ResumoComponent },
      { path: 'inputs', component: EntradasComponent },
      { path: 'outputs', component: SaidasComponent },
      { path: 'pending', component: PendenciasComponent },
    ],
  },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

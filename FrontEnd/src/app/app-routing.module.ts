import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialComponent } from './pages/financial/financial.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

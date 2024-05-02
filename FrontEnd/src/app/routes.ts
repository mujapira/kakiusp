import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FinancialComponent } from "./pages/financial/financial.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'financial', component: FinancialComponent},
    { path: 'not-found', component: NotfoundComponent},
    { path: '**', redirectTo: 'not-found' }
  ];
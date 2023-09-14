import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductionModuleComponent } from './production-module/production-module.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdDailyCatalogueComponent } from './prod-daily-catalogue/prod-daily-catalogue.component';
import { ProdOrderCatalogueComponent } from './prod-order-catalogue/prod-order-catalogue.component';
import { ProdSupplyRequestComponent } from './prod-supply-request/prod-supply-request.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProdDailyCatCardComponent } from './prod-daily-cat-card/prod-daily-cat-card.component';
import { ProdOrderCatCardComponent } from './prod-order-cat-card/prod-order-cat-card.component';
import { ProdSupplyReqCardComponent } from './prod-supply-req-card/prod-supply-req-card.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'production', component: ProductionModuleComponent, children: [
      { path: '', redirectTo: 'daily-catalogue', pathMatch: 'full' },
      { path: 'daily-catalogue', component: ProdDailyCatalogueComponent },
      { path: 'order-catalogue', component: ProdOrderCatalogueComponent },
      { path: 'supply-request', component: ProdSupplyRequestComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductionModuleComponent,
    HomeComponent,
    ProdDailyCatalogueComponent,
    ProdOrderCatalogueComponent,
    ProdSupplyRequestComponent,
    HeaderComponent,
    FooterComponent,
    ProdDailyCatCardComponent,
    ProdOrderCatCardComponent,
    ProdSupplyReqCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

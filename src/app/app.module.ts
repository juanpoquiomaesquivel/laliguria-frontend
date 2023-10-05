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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdSupplyReqCardDgSeeComponent } from './prod-supply-req-card-dg-see/prod-supply-req-card-dg-see.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ProdSupplyReqCardDgFreqComponent } from './prod-supply-req-card-dg-freq/prod-supply-req-card-dg-freq.component';
import { ProdSupplyReqCardDgCreqComponent } from './prod-supply-req-card-dg-creq/prod-supply-req-card-dg-creq.component';
import { SalesModuleComponent } from './sales-module/sales-module.component';
import { SalesInventoryComponent } from './sales-inventory/sales-inventory.component';
import { SalesOrderRequestComponent } from './sales-order-request/sales-order-request.component';
import { SalesExpertSystemComponent } from './sales-expert-system/sales-expert-system.component';
import { SalesOrderReqCardComponent } from './sales-order-req-card/sales-order-req-card.component';


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
  {
    path: 'sales', component: SalesModuleComponent, children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      { path: 'inventory', component: SalesInventoryComponent },
      { path: 'order-request', component: SalesOrderRequestComponent },
      { path: 'expert-system', component: SalesExpertSystemComponent }
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
    ProdSupplyReqCardComponent,
    ProdSupplyReqCardDgSeeComponent,
    ProdSupplyReqCardDgFreqComponent,
    ProdSupplyReqCardDgCreqComponent,
    SalesModuleComponent,
    SalesInventoryComponent,
    SalesOrderRequestComponent,
    SalesExpertSystemComponent,
    SalesOrderReqCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

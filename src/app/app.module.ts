import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { WarehouseModuleComponent } from './warehouse-module/warehouse-module.component';
import { WhSupplyRequestComponent } from './warehouse-module/wh-supply-request/wh-supply-request.component';
import { WhInventoryComponent } from './warehouse-module/wh-inventory/wh-inventory.component';
import { WhSupplyItemRequestCardComponent } from './warehouse-module/wh-supply-request/wh-supply-item-request-card/wh-supply-item-request-card.component';
import { WhSircDgSeeComponent } from './warehouse-module/wh-supply-request/wh-supply-item-request-card/wh-sirc-dg-see/wh-sirc-dg-see.component';
import { WhSircDgDenyComponent } from './warehouse-module/wh-supply-request/wh-supply-item-request-card/wh-sirc-dg-deny/wh-sirc-dg-deny.component';
import { WhSircDgAcceptComponent } from './warehouse-module/wh-supply-request/wh-supply-item-request-card/wh-sirc-dg-accept/wh-sirc-dg-accept.component';
import { ProductionModuleComponent } from './production-module/production-module.component';
import { PdDailyCatalogueComponent } from './production-module/pd-daily-catalogue/pd-daily-catalogue.component';
import { PdDailyItemRequestCardComponent } from './production-module/pd-daily-catalogue/pd-daily-item-request-card/pd-daily-item-request-card.component';
import { PdDircDgSeeComponent } from './production-module/pd-daily-catalogue/pd-daily-item-request-card/pd-dirc-dg-see/pd-dirc-dg-see.component';
import { PdDcDgAdmComponent } from './production-module/pd-daily-catalogue/pd-dc-dg-admin/pd-dc-dg-admin.component';
import { PdOrderCatalogueComponent } from './production-module/pd-order-catalogue/pd-order-catalogue.component';
import { PdOrderItemRequestCardComponent } from './production-module/pd-order-catalogue/pd-order-item-request-card/pd-order-item-request-card.component';
import { PdOcDgAdminComponent } from './production-module/pd-order-catalogue/pd-oc-dg-admin/pd-oc-dg-admin.component';
import { PdSupplyRequestComponent } from './production-module/pd-supply-request/pd-supply-request.component';
import { PdSupplyItemRequestCardComponent } from './production-module/pd-supply-request/pd-supply-item-request-card/pd-supply-item-request-card.component';
import { PdSircDgSeeComponent } from './production-module/pd-supply-request/pd-supply-item-request-card/pd-sirc-dg-see/pd-sirc-dg-see.component';
import { PdSircDgCancelComponent } from './production-module/pd-supply-request/pd-supply-item-request-card/pd-sirc-dg-cancel/pd-sirc-dg-cancel.component';
import { PdSrDgFormComponent } from './production-module/pd-supply-request/pd-sr-dg-form/pd-sr-dg-form.component';
import { SalesModuleComponent } from './sales-module/sales-module.component';
import { SsInventoryComponent } from './sales-module/ss-inventory/ss-inventory.component';
import { SsOrderRequestComponent } from './sales-module/ss-order-request/ss-order-request.component';
import { SsOrDgFormComponent } from './sales-module/ss-order-request/ss-or-dg-form/ss-or-dg-form.component';
import { SsOrderItemRequestCardComponent } from './sales-module/ss-order-request/ss-order-item-request-card/ss-order-item-request-card.component';
import { SsOircDgSeeComponent } from './sales-module/ss-order-request/ss-order-item-request-card/ss-oirc-dg-see/ss-oirc-dg-see.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PdCustomerItemRequestCardComponent } from './production-module/pd-order-catalogue/pd-order-item-request-card/pd-customer-item-request-card/pd-customer-item-request-card.component';
import { SsOircDgCancelComponent } from './sales-module/ss-order-request/ss-order-item-request-card/ss-oirc-dg-cancel/ss-oirc-dg-cancel.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WarehouseModuleComponent,
    WhInventoryComponent,
    WhSupplyRequestComponent,
    WhSupplyItemRequestCardComponent,
    WhSircDgSeeComponent,
    WhSircDgAcceptComponent,
    WhSircDgDenyComponent,
    ProductionModuleComponent,
    PdDailyCatalogueComponent,
    PdDcDgAdmComponent,
    PdDailyItemRequestCardComponent,
    PdDircDgSeeComponent,
    PdOrderCatalogueComponent,
    PdOcDgAdminComponent,
    PdOrderItemRequestCardComponent,
    PdSupplyRequestComponent,
    PdSrDgFormComponent,
    PdSupplyItemRequestCardComponent,
    PdSircDgSeeComponent,
    PdSircDgCancelComponent,
    SalesModuleComponent,
    SsInventoryComponent,
    SsOrderRequestComponent,
    SsOrDgFormComponent,
    SsOrderItemRequestCardComponent,
    SsOircDgSeeComponent,
    PdCustomerItemRequestCardComponent,
    SsOircDgCancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

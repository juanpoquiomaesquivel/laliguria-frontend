import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductionModuleComponent } from "./production-module/production-module.component";
import { SalesModuleComponent } from "./sales-module/sales-module.component";
import { WarehouseModuleComponent } from "./warehouse-module/warehouse-module.component";
import { WhInventoryComponent } from "./warehouse-module/wh-inventory/wh-inventory.component";
import { WhSupplyRequestComponent } from "./warehouse-module/wh-supply-request/wh-supply-request.component";
import { PdDailyCatalogueComponent } from "./production-module/pd-daily-catalogue/pd-daily-catalogue.component";
import { PdSupplyRequestComponent } from "./production-module/pd-supply-request/pd-supply-request.component";
import { PdOrderCatalogueComponent } from "./production-module/pd-order-catalogue/pd-order-catalogue.component";
import { SsExpertSystemComponent } from "./sales-module/ss-expert-system/ss-expert-system.component";
import { SsInventoryComponent } from "./sales-module/ss-inventory/ss-inventory.component";
import { SsOrderRequestComponent } from "./sales-module/ss-order-request/ss-order-request.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'warehouse', component: WarehouseModuleComponent, children: [
            { path: '', redirectTo: 'inventory', pathMatch: 'full' },
            { path: 'inventory', component: WhInventoryComponent },
            { path: 'supply-request', component: WhSupplyRequestComponent },
            { path: 'expert-system', component: SsExpertSystemComponent }
        ]
    },
    {
        path: 'production', component: ProductionModuleComponent, children: [
            { path: '', redirectTo: 'daily-catalogue', pathMatch: 'full' },
            { path: 'daily-catalogue', component: PdDailyCatalogueComponent },
            { path: 'order-catalogue', component: PdOrderCatalogueComponent },
            { path: 'supply-request', component: PdSupplyRequestComponent }
        ]
    },
    {
        path: 'sales', component: SalesModuleComponent, children: [
            { path: '', redirectTo: 'inventory', pathMatch: 'full' },
            { path: 'inventory', component: SsInventoryComponent },
            { path: 'order-request', component: SsOrderRequestComponent },
            { path: 'expert-system', component: SsExpertSystemComponent }
        ]
    },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
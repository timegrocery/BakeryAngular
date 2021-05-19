import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { StudentComponent } from './views/student/student.component';
import { OrderComponent } from './views/order/order.component';
import { CourseComponent } from './views/course/course.component';
import { SupplierComponent } from './views/supplier/supplier.component';
import { TableComponent } from './views/table/table.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { IngredientsComponent } from './views/ingredients/ingredients.component';
import { StockOrderComponent } from './views/stock-order/stock-order.component';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ProductComponent } from './views/product/product.component';
import { AppInterceptor } from './app.interceptor';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';
import {ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PnotifyService } from './views/shared/pnotify.service';

import { ModalModule } from 'ngx-bootstrap/modal';
import { DrinkComponent } from './views/drink/drink.component';
import { ReportComponent } from './views/report/report.component';
import { ReportQuantityComponent } from './views/report-quantity/report-quantity.component';
import { BillComponent } from './views/bill/bill.component';





@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot()
   

  ],
  
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    
    OrderComponent,
    CourseComponent,
    SupplierComponent,
    TableComponent,
    EmployeeComponent,
    IngredientsComponent,
    StockOrderComponent,
    ProductComponent,
    DrinkComponent,
    ReportComponent,
    ReportQuantityComponent,
    BillComponent

  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }
  , CookieService, PnotifyService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

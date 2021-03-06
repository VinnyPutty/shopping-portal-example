import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    UserPortalComponent,
    AdminPortalComponent,
    LoginComponent,
    HeaderBarComponent,
    UserListComponent,
    UserComponent,
    RegisterUserComponent,
    CreateProductComponent,
    EditProductComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

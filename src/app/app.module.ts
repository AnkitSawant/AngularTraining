import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {Router,RouterModule, Routes} from '@angular/router';
import { CustomersComponent } from './customers/customers.component'
import { HttpClientModule } from '@angular/common/http'; 
import { CustomerService } from './customer.service';
import { AddcustomerComponent } from './customers/addcustomer/addcustomer.component';
import { EditcustomerComponent } from './customers/editcustomer/editcustomer.component';
import { AccountComponent } from './customers/addcustomer/account/account.component';
import { ProfileComponent } from './customers/addcustomer/profile/profile.component';
import { FinishComponent } from './customers/addcustomer/finish/finish.component';



const appRoutes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'about', component:AboutComponent},
  { path:'customers', component:CustomersComponent},
  { path:'customers/addCustomer', component:AddcustomerComponent,children:[
    { path:'account', component:AccountComponent},
    { path:'profile', component:ProfileComponent},
    { path:'finish', component:FinishComponent},
    { path:'', redirectTo: '/customers/addCustomer/account', pathMatch: 'full'}
  ]
  
},
{ path:'editcustomer/:id', component:EditcustomerComponent},
  { path:'', redirectTo: '/login', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    CustomersComponent,
    AddcustomerComponent,
    EditcustomerComponent,
    AccountComponent,
    ProfileComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule, FormsModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';
import { DeliverypageComponent } from './deliverypage/deliverypage.component';

export const routes: Routes = [
    {
        path:"",
        component:HomepageComponent
    },
    {
        path:"login",
        component:LoginpageComponent
    },
    {
        path:"booking",
        component:BookingpageComponent
    },
    {
        path:"tracking",
        component:TrackingpageComponent
    },
    {
        path:"delivery",
        component:DeliverypageComponent
    }
];

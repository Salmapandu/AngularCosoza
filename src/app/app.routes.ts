import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import path from 'path';
import { Component } from '@angular/core';
import { report } from 'process';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { UserReportComponent } from './pages/user-report/user-report.component';
import { UserLoyaltyComponent } from './pages/user-loyalty/user-loyalty.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { PageAddEditComponent } from './page-add-edit/page-add-edit.component';
// import { EmployeeService } from './services/employee.service';



export const routes: Routes = [
    {
        path:'', redirectTo: 'login', pathMatch:'full'
        
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path:'app',
        component:LayoutComponent,
        children:[
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'   
            },
            {
                path:'dashboard',
                loadComponent: () => DashboardComponent
            },
            {
                path:'user_report',
                loadComponent: () => UserReportComponent, 
                 
            },
            {
                path: 'user-manage',
                loadComponent: () => UserManageComponent,
                children:[
                    {
                        path: '',
                        redirectTo: 'page-add-edit',
                        pathMatch: 'full'
                    },
                ]
                
            },
            {
                path:'page-add-edit',
                loadComponent: () => PageAddEditComponent, 
                 
            },

            // {
            //     path: 'employee',
            //     loadComponent: () => EmployeeService,
                   
            // },
            {
                path: 'user-list',
                loadComponent: () => UserListComponent,
            },

            {
                path: 'user_loyalty',
                loadComponent: () => UserLoyaltyComponent,
                
              
            },
           
            {
                path: 'configuration',
                loadComponent: () => ConfigurationComponent,
              
            },
            


    
        ]

        
          

    },

];

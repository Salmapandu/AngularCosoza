import { Routes } from '@angular/router';
import { ListAddEditComponent } from './list-add-edit/list-add-edit.component';
import { PageAddEditComponent } from './page-add-edit/page-add-edit.component';
import { ArtworkComponent } from './pages/artwork/artwork.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { UserReportComponent } from './pages/user-report/user-report.component';
import { TotalApplicationsComponent } from './total-applications/total-applications.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => DashboardComponent,
      },

      {
        path: 'total-application',
        loadComponent: () => TotalApplicationsComponent,
      },

  
      {
        path: 'user_report',
        loadComponent: () => UserReportComponent,
      },
      {
        path: 'user-manage',
        loadComponent: () => UserManageComponent,
        children: [
          {
            path: '',
            redirectTo: 'page-add-edit',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'page-add-edit',
        loadComponent: () => PageAddEditComponent,
      },
      {
        path: 'artwork',
        loadComponent: () => ArtworkComponent,
        title: 'ArtWorks',
      },
      

      {
        path: 'list-add-edit',
        loadComponent: () => ListAddEditComponent,
      },

      {
        path: 'configuration',
        loadComponent: () => ConfigurationComponent,
      },
    ],
  },
];

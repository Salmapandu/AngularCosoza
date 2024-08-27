import { Routes } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationForm2Component } from './application-form2/application-form2.component';
import { ApplyForRegistrationComponent } from './apply-for-registration/apply-for-registration.component';
import { ContractComponent } from './contract/contract.component';
import { ListAddEditComponent } from './list-add-edit/list-add-edit.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ManageCertAndLicenseComponent } from './manage-cert-and-license/manage-cert-and-license.component';
import { PageAddEditComponent } from './page-add-edit/page-add-edit.component';
import { ArtworkComponent } from './pages/artwork/artwork.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { UserReportComponent } from './pages/user-report/user-report.component';
import { AuthGuard } from './services/auth.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewAllApplicationComponent } from './view-all-application/view-all-application.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { WorkDeclarasionFormComponent } from './work-declarasion-form/work-declarasion-form.component';

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
    canActivate: [AuthGuard],
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
        path: 'view-all-application ',
        loadComponent: () => ViewAllApplicationComponent,
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
        path: 'manage-cert-and-license',
        loadComponent: () => ManageCertAndLicenseComponent,
      },

      {
        path: 'artwork',
        loadComponent: () => ArtworkComponent,
        title: 'ArtWorks',
      },

      {
        path: 'view-payment',
        loadComponent: () => ViewPaymentComponent,
      },

      {
        path: 'list-add-edit',
        loadComponent: () => ListAddEditComponent,
      },

      {
        path: 'configuration',
        loadComponent: () => ConfigurationComponent,
      },

      {
        path: 'user-dashboard',
        loadComponent: () => UserDashboardComponent,
      },

      {
        path: 'contract',
        loadComponent: () => ContractComponent,
      },

      {
        path: 'apply-for-registration',
        loadComponent: () => ApplyForRegistrationComponent,
      },

      {
        path: 'make-payment',
        loadComponent: () => MakePaymentComponent,
      },

      {
        path: 'work-declarasion-form',
        loadComponent: () => WorkDeclarasionFormComponent,
      },
      {
        path: 'application-form',
        loadComponent: () => ApplicationFormComponent,
      },

      {
        path: 'application-form2',
        loadComponent: () => ApplicationForm2Component,
      },

      {
        path: 'user-register',
        loadComponent: () => UserRegisterComponent,
      },
    ],
  },
];

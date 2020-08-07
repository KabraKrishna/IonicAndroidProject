import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'view-vacancies-modal',
    loadChildren: () => import('./modals/view-vacancies-modal/view-vacancies-modal.module').then( m => m.ViewVacanciesModalPageModule)
  },
  {
    path: 'update-attendance-modal',
    loadChildren: () => import('./modals/update-attendance-modal/update-attendance-modal.module').then( m => m.UpdateAttendanceModalPageModule)
  },
  {
    path: 'registration-form',
    loadChildren: () => import('./pages/registration-form/registration-form.module').then( m => m.RegistrationFormPageModule)
  },
  {
    path: 'leave-application-form',
    loadChildren: () => import('./pages/leave-application-form/leave-application-form.module').then( m => m.LeaveApplicationFormPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

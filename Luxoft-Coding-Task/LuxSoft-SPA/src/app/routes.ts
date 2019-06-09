import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeChartComponent } from 'src/app/EmployeeChart/employeechart.component';
import { PreventUnsavedChanges } from './gaurds/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
  { path:'home', component:EmployeeComponent,  canDeactivate: [PreventUnsavedChanges] },
  { path:'chart', component:EmployeeChartComponent },
  { path:'**', redirectTo:'home', pathMatch:'full'}
];


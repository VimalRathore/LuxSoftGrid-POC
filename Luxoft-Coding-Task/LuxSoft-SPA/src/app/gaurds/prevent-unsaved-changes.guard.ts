import { EmployeeComponent } from './../Employee/employee.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChanges implements CanDeactivate<EmployeeComponent> {
    canDeactivate(component: EmployeeComponent)  {
        if (component.dataChanged) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    }
}

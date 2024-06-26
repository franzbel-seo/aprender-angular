import { Routes } from '@angular/router';
import {ReactiveFormsComponent} from "./dashboard/pages/reactive-forms/reactive-forms.component";

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>  import('./dashboard/dashboard.component').then( c => c.DashboardComponent),
        children: [
            {
                path: 'control-flow',
                title: 'Control flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component').then( c => c.ControlFlowComponent )
            },
            {
                path: 'built-in-directives',
                title: 'Built in directives',
                loadComponent: () => import('./dashboard/pages/built-in-directives/built-in-directives.component').then( c => c.BuiltInDirectivesComponent )
            },
            {
                path: 'errors',
                title: 'Errors',
                loadComponent: () => import('./dashboard/pages/errores/errores.component').then( c => c.ErroresComponent)
            },
            {
                path: 'interceptors',
                title: 'Interceptors',
                loadComponent: () => import('./dashboard/pages/interceptors/interceptors.component').then( c => c.InterceptorsComponent)
            },
            {
              path: 'reactive-forms',
              title: 'Reactive forms',
              loadComponent: () => import('./dashboard/pages/reactive-forms/reactive-forms.component').then( c => c.ReactiveFormsComponent)
            },

            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

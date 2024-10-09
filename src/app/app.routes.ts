import { Routes } from '@angular/router';
import {ReactiveFormsComponent} from "./dashboard/pages/reactive-forms/reactive-forms.component";

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>  import('./dashboard/dashboard.component').then( c => c.DashboardComponent),
        children: [
            {
              path: 'dialogos',
              title: 'Dialogos',
              loadComponent: () => import('./dashboard/pages/dialogos/dialogos.component').then( c => c.DialogosComponent)
            },
            {
                path: 'crear-paginas',
                title: 'Crear paginas',
                loadComponent: () => import('./dashboard/pages/paginas/paginas.component').then( c => c.PaginasComponent)
            },
            {
                path: 'interfaces',
                title: 'Interfaces',
                loadComponent: () => import('./dashboard/pages/interfaces/interfaces.component').then( c => c.InterfacesComponent)
            },
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
              path: 'http',
              title: 'HTTP',
              loadComponent: () => import('./dashboard/pages/http/http.component').then( c => c.HttpComponent)
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

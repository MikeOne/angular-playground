import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';

const routes: Routes = [
    {
        path: 'comp1',
        component: Comp1Component
    },
    {
        path: 'comp2',
        component: Comp2Component
    },
    {
        path: 'lazy1',
        loadChildren: () => import('./modules/lazy1/lazy1.module').then((m) => m.Lazy1Module)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

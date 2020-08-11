import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Lazycomp1Component } from './components/lazycomp1/lazycomp1.component';

const routes: Routes = [
    {
        path: '',
        component: Lazycomp1Component
    }
];

@NgModule({
    declarations: [Lazycomp1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Lazy1Module {}

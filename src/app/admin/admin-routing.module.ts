import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminReposComponent } from './admin-repos/admin-repos.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const heroesRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', component: AdminDashboardComponent },
                    { path: 'dashboard', component: AdminDashboardComponent },
                    { path: 'repos', component: AdminReposComponent },
                    { path: 'profile', component: AdminProfileComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
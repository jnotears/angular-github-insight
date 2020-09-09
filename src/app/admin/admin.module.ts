import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminReposComponent } from './admin-repos/admin-repos.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardReviewsComponent } from './admin-dashboard/dashboard-reviews/dashboard-reviews.component';
import { ReposForSyncComponent } from './admin-repos/repos-for-sync/repos-for-sync.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        AdminReposComponent,
        DashboardReviewsComponent,
        ReposForSyncComponent
    ]
})
export class AdminModule { }
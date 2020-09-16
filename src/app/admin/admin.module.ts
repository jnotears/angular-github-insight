import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminReposComponent } from './admin-repos/admin-repos.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardReviewsComponent } from './admin-dashboard/dashboard-reviews/dashboard-reviews.component';
import { DashboardRepositoriesComponent } from './admin-dashboard/dashboard-reviews/dashboard-repositories/dashboard-repositories.component';
import { DashboardIssuesComponent } from './admin-dashboard/dashboard-reviews/dashboard-issues/dashboard-issues.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DashboardProjectsComponent } from './admin-dashboard/dashboard-reviews/dashboard-projects/dashboard-projects.component';

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
        DashboardRepositoriesComponent,
        DashboardIssuesComponent,
        AdminProfileComponent,
        DashboardProjectsComponent
    ]
})
export class AdminModule { }
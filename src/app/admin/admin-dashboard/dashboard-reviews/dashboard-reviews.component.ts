import {Component, OnInit} from '@angular/core';
import { AdminService } from '../../admin.service';
import { Repository, IssueEntity, ProjectEntity, Assignee } from '../../models';

@Component({
    selector: 'dashboard-reviews',
    templateUrl: 'dashboard-reviews.component.html',
})
export class DashboardReviewsComponent implements OnInit{
    repos: Repository[] = [];
    totalSyncRepo: number = 0;
    totalSyncIssue: number = 0;
    totalSyncProject: number = 0;
    totalSyncAssignee: number = 0;
    issues: IssueEntity[] = [];
    projs: ProjectEntity[] = [];
    assignees: Assignee[] = []
    constructor(
        private readonly adminService: AdminService
    ){}

    ngOnInit(){
        const username = localStorage.getItem('current_user');
        this.getSyncRepos(username);
        this.getSyncIssues(username);
        this.getSyncProjects(username);
        this.getSyncAssignees(username);
    }

    getSyncRepos(username: string){
        return this.adminService.getSyncRepos(username).subscribe(
            repos =>{
                this.repos = repos;
                this.totalSyncRepo = repos.length;
            }
        );
    }

    getSyncIssues(username: string){
        return this.adminService.getSyncIssues(username).subscribe(
            issues => {
                this.issues = issues;
                this.totalSyncIssue = issues.length;
            }
        );
    }

    getSyncProjects(username: string){
        return this.adminService.getSyncProjects(username).subscribe(
            projs => {
                this.projs = projs;
                this.totalSyncProject = projs.length;
            }
        );
    }

    getSyncAssignees(username: string){
        return this.adminService.getSyncAssignees(username).subscribe(
            assigs => {
                this.assignees = assigs;
                this.totalSyncAssignee = assigs.length;
            }
        );
    }
}
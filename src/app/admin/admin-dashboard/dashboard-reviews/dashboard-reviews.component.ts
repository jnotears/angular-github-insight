import {Component, OnInit} from '@angular/core';
import { AdminService } from '../../admin.service';
import { RepositoryEntity, IssueEntity } from '../../admin-repos/models';

@Component({
    selector: 'dashboard-reviews',
    templateUrl: 'dashboard-reviews.component.html',
})
export class DashboardReviewsComponent implements OnInit{
    repos: RepositoryEntity[] = [];
    totalSyncRepo: number = 0;
    totalSyncIssue: number = 0;
    totalSyncProject: number = 0;
    totalSyncAssignee: number = 0;
    issues: IssueEntity[] = [];
    constructor(
        private readonly adminService: AdminService
    ){}

    ngOnInit(){
        const username = localStorage.getItem('current_user');
        this.getSyncRepos(username);
    }

    getSyncRepos(username: string){
        return this.adminService.getSyncRepos(username).subscribe(
            repos =>{
                this.repos = repos;
                this.totalSyncRepo = repos.length;
            }
        );
    }

    getSyncIssues(repo: number[]){

    }
}
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Repository } from '../models';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: 'admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
    repos: Repository[] = [];

    constructor(
        private readonly adminService: AdminService
    ) { }

    ngOnInit() {
        const username: string = localStorage.getItem('current_user');
        this.getRepos(username);
    }

    getRepos(username: string) {
        this.adminService.getRepos(username).subscribe(
            val => {
                for (let repo of val) {
                    if (repo.sync == true) {
                        this.repos.push(repo);
                    }
                }
            }
        );
    }
}
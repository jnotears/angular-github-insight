import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../models';

@Component({
    selector: 'admin-profile',
    templateUrl: 'admin-profile.component.html'
})
export class AdminProfileComponent implements OnInit {
    user: User;

    constructor(
        private readonly adminService: AdminService
    ){}

    ngOnInit() {
        const current_user = localStorage.getItem('current_user');
        this.getCurrentUser(current_user);
    }

    private getCurrentUser(current_user: string){
        if(this.user === undefined){
            return this.adminService.getUser(current_user).subscribe(
                user => {
                    this.user = user;
                }
            );
        }
        return;
    }
}
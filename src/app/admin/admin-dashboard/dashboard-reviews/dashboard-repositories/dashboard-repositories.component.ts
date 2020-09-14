import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../../../admin.service';
//import { RepositoryEntity, IssueEntity, ProjectEntity, Assignee } from '../../models';

@Component({
    selector: 'dashboard-repositories',
    templateUrl: 'dashboard-repositories.component.html',
})
export class DashboardRepositoriesComponent implements OnInit {

    ngOnInit(){

    }

    @Input() repos = [];

}
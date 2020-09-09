import { Component, Input, OnInit } from '@angular/core';
import { RepositoryEntity } from '../models';
import { AdminService } from '../../admin.service';


@Component({
    selector: 'repos-for-sync',
    templateUrl: 'repos-for-sync.component.html'
})
export class ReposForSyncComponent implements OnInit {

    _repos: RepositoryEntity[];

    constructor(
        private readonly adminService: AdminService
    ){}

    ngOnInit() {

    }

    @Input()
    set getSelectedRepos(repos: RepositoryEntity[]) {
        this._repos = repos;
    }

    
}
import { Component, OnInit } from '@angular/core';
import { RepositoryEntity } from '../models';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-repos',
  templateUrl: 'admin-repos.component.html',
})
export class AdminReposComponent implements OnInit {
  repos: RepositoryEntity[] = [];
  selectedRepos: RepositoryEntity[] = []

  constructor(
    private readonly adminService: AdminService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { 
    if(!localStorage.getItem('current_user') || !localStorage.getItem('access_token')){
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    const username = localStorage.getItem('current_user');
    this.getRepos(username);
  }

  getRepos(username: string) {
    return this.adminService.getRepos(username).subscribe(
      repos => {
        this.repos = repos;
      }
    );
  }

  registerHook(repo_name: string){
    console.log(repo_name);
    return this.adminService.registerHook(repo_name).subscribe();
  }
}

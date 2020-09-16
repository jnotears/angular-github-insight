import { Component, OnInit } from '@angular/core';
import { Repository } from '../models';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-repos',
  templateUrl: 'admin-repos.component.html',
})
export class AdminReposComponent implements OnInit {
  repos: Repository[] = [];

  constructor(
    private readonly adminService: AdminService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    if (!localStorage.getItem('current_user') || !localStorage.getItem('access_token')) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    console.log('okkkkkkkkk')
    const username = localStorage.getItem('current_user');
    console.log(username);
    this.getRepos(username);
  }

  getRepos(username: string) {
    return this.adminService.getRepos(username).subscribe(
      repos => {
        this.repos = repos;
      }
    );
  }

  registerHook(repo_id: number) {
    return this.adminService.registerHook(repo_id).subscribe();
  }
}

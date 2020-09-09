import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './admin/user';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { RepositoryEntity, IssueEntity } from './admin-repos/models';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    constructor(
        private readonly http: HttpClient,
        private readonly auth: AuthService
    ) { }

    getUser(username: string): Observable<User> {
        return this.http.get<User>(this.auth.hostUrl + `/api.github/user?username=${username}`);
    }

    getRepos(username: string): Observable<RepositoryEntity[]> {
        return this.http.get<RepositoryEntity[]>(this.auth.hostUrl + `/api.github/repos?username=${username}`);
    }

    registerHook(repo_name: string): Observable<any> {
        const username = localStorage.getItem('current_user');
        const body: {} = { repo_name, username };
        console.log("body", body);
        return this.http.post<any>(this.auth.hostUrl + `/api.github/hooks`, body);
    }

    getSyncRepos(username: string): Observable<RepositoryEntity[]> {
        return this.http.get<RepositoryEntity[]>(this.auth.hostUrl + `/api.github/repos/sync?username=${username}`);
    }

    getSyncIssues(repos: number[]): Observable<IssueEntity[]>{
        return this.http.post<IssueEntity[]>(this.auth.hostUrl+`/api.github/issues`,repos);
    }
}
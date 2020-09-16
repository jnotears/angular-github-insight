import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Repository, IssueEntity, ProjectEntity, Assignee, User } from './models';

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

    getRepos(username: string): Observable<Repository[]> {
        return this.http.get<Repository[]>(this.auth.hostUrl + `/api.github/repos?username=${username}`);
    }

    registerHook(repo_id: number): Observable<any> {
        const body: {} = { 
            repo_id
        };
        return this.http.post<any>(this.auth.hostUrl + `/api.github/hooks`, body);
    }

    getSyncRepos(username: string): Observable<Repository[]> {
        return this.http.get<Repository[]>(this.auth.hostUrl + `/api.github/repos/sync?username=${username}`);
    }

    getSyncIssues(username: string): Observable<IssueEntity[]> {
        return this.http.get<IssueEntity[]>(this.auth.hostUrl + `/api.github/issues?username=${username}`);
    }

    getSyncProjects(username: string): Observable<ProjectEntity[]> {
        return this.http.get<ProjectEntity[]>(this.auth.hostUrl + `/api.github/projects?username=${username}`);
    }

    getSyncAssignees(username: string): Observable<Assignee[]> {
        return this.http.get<Assignee[]>(this.auth.hostUrl + `/api.github/assignees?username=${username}`);
    }
}
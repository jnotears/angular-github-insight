export interface RepositoryEntity{
    id: number,
    name: string,
    use_id: string,
    external_id: string,
    webhook: boolean,
    updated_at: Date
}

export interface IssueEntity{
    id: number,
    external_id: number;
    number: number;
    name: string;
    author: string;
    content: string;
    url: string;
    state: string;
    closed_at?: Date;
}

export interface ProjectEntity{
    id: number;
    external_id: number;
    number: number;
    name: string;
    description: string;
    state: string;
    repo_id: number;
    closed_at?: Date;
}

export interface Assignee{
    user_id: string;
    name: string;
    email: string;
    avatar_url: string;
    issue_id: number;
}

export interface User{
    name: string;
    email: string;
    avatar_url: string;
}
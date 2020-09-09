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
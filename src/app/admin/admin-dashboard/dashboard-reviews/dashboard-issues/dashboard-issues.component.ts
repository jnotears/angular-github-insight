import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AdminService } from '../../../admin.service';

@Component({
    selector: 'dashboard-issues',
    templateUrl: 'dashboard-issues.component.html',
})
export class DashboardIssuesComponent implements OnChanges {
    totalClosedIssue = 0;
    totalOpenIssue = 0;
    openIssues = [];
    closedIssues = [];

    @Input() issues = [];

    ngOnChanges(){
        this.openIssues = this.issues.filter(i => i.state === 'OPEN');
        if(this.openIssues.length > 0){
            this.totalOpenIssue = this.openIssues.length;
        }
        this.closedIssues = this.issues.filter(i => i.state === 'CLOSED');
        if(this.closedIssues.length > 0){
            this.totalClosedIssue = this.closedIssues.length;
        }
    }


}
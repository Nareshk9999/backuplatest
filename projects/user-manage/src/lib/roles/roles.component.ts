import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  displayedColumns: string[] = ['role', 'Privileges', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  role: string;
  Privileges: string;
  action: string;
  
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {role: 'hpAccountManager', Privileges: '1.Edit Contact 2.View Contact 3.Associate Contact',action: 'View Edit'},
  {role: 'hpAccountManager', Privileges: '1.Edit Contact 2.View Contact 3.Associate Contact',action: 'View Edit'},
  {role: 'hpAccountManager', Privileges: '1.Edit Contact 2.View Contact 3.Associate Contact',action: 'View Edit'},
  {role: 'hpAccountManager', Privileges: '1.Edit Contact 2.View Contact 3.Associate Contact',action: 'View Edit'}
];

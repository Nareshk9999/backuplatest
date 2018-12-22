import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'user-privilage',
  templateUrl: './privilage.component.html',
  styleUrls: ['./privilage.component.css']
})
export class PrivilageComponent implements OnInit {

  displayedColumns: string[] = [
    'privilegeName', 'resource', 'scope', 'action'
];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  privilegeName: string;
  resource: string;
  scope: string;
  action: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {privilegeName: 'Edit Contact', resource: 'Contact', scope: 'Edit',  action: 'View Edit'},
  {privilegeName: 'Add Contact', resource: 'Contact', scope: 'Add',  action: 'View Edit'},
  {privilegeName: 'Delete Contact', resource: 'Contact', scope: 'Delete',  action: 'View Edit'},
  
];

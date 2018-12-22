import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'user-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  displayedColumns: string[] = [
    'resource', 'contact', 'fleet'
];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  
  resource: string;
  contact: string;
  fleet: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { resource: '', contact: '',  fleet: ''},
  { resource: '', contact: '',  fleet: ''},
  { resource: '', contact: '',  fleet: ''},
  
];

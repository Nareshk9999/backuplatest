import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'email', 'firstName', 'lastName','phoneNo', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  action: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, email: 'avinash@hp.com', firstName: 'Avinas', lastName: 'Kumar', phoneNo: '786786768', action: 'View Edit'},
  {position: 2, email: 'dharmwati@hp.com', firstName: 'Dharmwati', lastName: 'Sharma', phoneNo: '98789787', action: 'View Edit'},
  {position: 3, email: 'ramesh@hp.com', firstName: 'Ramesh', lastName: 'Vemula', phoneNo: '876887887', action: 'View Edit'},
  {position: 4, email: 'dinesh@hp.com', firstName: 'Dinesh', lastName: 'Kumar', phoneNo: '9870897', action: 'View Edit'},
  {position: 5, email: 'priya@hp.com', firstName: 'Priya', lastName: 'Vidya', phoneNo: '78708990', action: 'View Edit'},
  {position: 6, email: 'avinash@hp.com', firstName: 'Avinas', lastName: 'Kumar', phoneNo: '98798978', action: 'View Edit'},
];

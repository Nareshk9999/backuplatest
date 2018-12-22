import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-security-models',
  templateUrl: './security-models.component.html',
  styleUrls: ['./security-models.component.css']
})
export class SecurityModelsComponent implements OnInit {

  displayedColumns: string[] = [
    'modelName', 'customer', 'geoRegion', 'country','area','group','site','building', 'action'
];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  modelName: string;
  customer: string;
  geoRegion: string;
  country: string;
  area: string;
  group:string;
  site:string;
  building:string;
  action: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {modelName: 'SM1', customer: 'Google', geoRegion: 'APAC', country: 'India', area: 'Bangalore', group: 'B1', site: 'Bellandur',building:'HP5', action: 'View Edit'},
  {modelName: 'SM2', customer: 'Google', geoRegion: 'APAC', country: 'India', area: 'Bangalore', group: 'B1', site: 'Bellandur',building:'HP5', action: 'View Edit'},
  {modelName: 'SM3', customer: '3M', geoRegion: 'APAC', country: 'India', area: 'All', group: 'All', site: 'All',building:'All', action: 'View Edit'},
  
];


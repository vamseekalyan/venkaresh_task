import {Component, OnInit} from '@angular/core';
import MUIDataTable from 'mui-datatables';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Contract} from './Contract.interface';
import {DataService} from './data.service';

const CONTRACT_DATA: Contract[] = [
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  },
  {
    customerName: 'Rajesh',
    customerAddress: 'Hohenstaufenstt 14 60327',
    totalPrice: 1000,
    brokerAgentName: 'Hans',
    brokerCompanyName: 'bac',
    contractStartDate: '10-06-2007',
    contractEndDate: '21-10-2012'
  }

];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  toTitleCase(str): string {
    return str
      .replace(/(_|-)/g, ' ')
      .trim()
      .replace(/\w\S*/g, (str2) => str2.charAt(0).toUpperCase() + str2.substr(1))
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  }

  getColumnNames(data: any[]) {
    return Object.keys(CONTRACT_DATA[0]);
  }

  constructor(private dataService: DataService) {
  }

}


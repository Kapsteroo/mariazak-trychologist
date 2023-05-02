import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnInit {
  public cennik: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cennik = this.dataService.getCennik();
  }
}

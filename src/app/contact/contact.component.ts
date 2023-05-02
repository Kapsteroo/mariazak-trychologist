import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public lokalizacja: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.lokalizacja = this.dataService.getLokalizacja();
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 50.2021432, lng: 19.2733488 },
        zoom: 16,
      }
    );
    const marker = new google.maps.Marker({
      position: { lat: 50.2021432, lng: 19.2733488 },
      map: map,
      title: 'London',
    });
  }
}

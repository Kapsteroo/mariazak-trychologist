import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cennik = [
    { nazwa: 'Konsultacja', cena: 100 },
    { nazwa: 'Badanie krwi', cena: 200 },
    { nazwa: 'USG', cena: 300 },
    { nazwa: 'Rentgen', cena: 400 },
  ];

  private lokalizacja = {
    adres: 'Henryka Sienkiewicza 12, 43-603 Jaworzno',
    trasa:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim. In metus vulputate eu scelerisque felis imperdiet proin fermentum.',
    telefon: '+48 572 512 733',
    godzinyOtwarcia: 'Poniedziałek - piątek 10:00-20:00',
    email: 'przykladowa@przychodnia.pl',
  };

  getCennik() {
    return this.cennik;
  }

  getLokalizacja() {
    return this.lokalizacja;
  }
}

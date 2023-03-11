import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  items: any[] = [];

 ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push({
        id: i,
        name: faker.name.firstName(),
        number: faker.phone.phoneNumber(),
      });
    }
  }
}

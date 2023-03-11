import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  items: any[] = [];

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push({
        id: i,
        name: faker.name.firstName(),
        email: faker.internet.email(),
        work: faker.name.jobTitle(),
      });
    }
  }

}

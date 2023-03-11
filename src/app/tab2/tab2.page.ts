import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  api = "https://api.escuelajs.co/api/v1/products"

  productos:any[] = []

  async ngOnInit() {
    const response = await fetch(this.api)
    const data = await response.json()
    this.productos = data
  }

}

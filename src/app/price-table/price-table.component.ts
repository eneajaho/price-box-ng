import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})

export class PriceTableComponent {

  @Input() pricingBox: {name: string, price: number, features: string[]};

  onPurchase() {
    console.log('Purchase Clicked');
  }

}

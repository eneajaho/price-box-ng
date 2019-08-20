import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pricing';

  pricingBoxes = [
    {
      name: 'Free',
      price: 0,
      features: [
        '10 GB of storage',
        'Up to 2 users',
        'Standard Support'
      ]
    },
    {
      name: 'Pro',
      price: 59,
      features: [
        '20 GB of storage',
        'Up to 5 users',
        'Standard Support'
      ]
    },
    {
      name: 'Business',
      price: 99,
      features: [
        '50 GB of storage',
        'Up to 10 users',
        'High Level Support'
      ]
    }
  ];
}

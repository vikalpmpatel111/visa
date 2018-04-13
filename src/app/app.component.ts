import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dataSrc = {
              "Pay with Visa": {"Visa Checkout" : "assets/1/1.1.png",
                                "Find a Card" : "assets/1/1.2.png",
                                "Visa Offers + Perks" : "assets/1/1.3.png",
                                "Contractless Payments":"assets/1/1.4.png" ,
                                "Payment Technology": "assets/1/1.5.png"},
              "Partner With Us":{"Visa Ready": "assets/2/2.1.png",
                                "Payment Technology": "assets/2/2.2.png",
                                "Visa Developer":"assets/2/2.3.png",
                                "Info for Partners": "assets/2/2.4.png",
                                "Visa Performance Solutions": "assets/2/2.5.png"},
              "Run Your Bussiness":{"Accept Visa Payments": "assets/3/3.1.png",
                                "Small Bussiness Tool": "assets/3/3.2.png",
                                "Commercial Solution":"assets/3/3.3.png"},
              "Travel With Visa":{},
              "Visa Everywhere":{"Visa Innovations": "assets/4/4.1.png",
                                "Security": "assets/4/4.2.png",
                                "Global Impact":"assets/4/4.3.png",
                                "About Visa": "assets/4/4.4.png"}
            }
}

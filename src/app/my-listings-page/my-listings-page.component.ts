import { Component } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.scss'],
})
export class MyListingsPageComponent {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit() {
    this.listingsService.getListingsForUser().subscribe((listings) => {
      this.listings = listings;
    });
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== listingId
      );
    });
  }
}

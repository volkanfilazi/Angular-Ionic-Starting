import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces?: Place[];
  placesList: Place[] = []
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.placesList = this.placesService.places
  }
  
  ionViewWillEnter() {
    console.log("will enter");
  }

  ionViewDidEnter() {
    console.log("did enter");
  }

  ionViewWillLeave() {
    console.log("will leave");
  }

  ionViewDidLeave() {
    console.log("did leave");  
  }

}
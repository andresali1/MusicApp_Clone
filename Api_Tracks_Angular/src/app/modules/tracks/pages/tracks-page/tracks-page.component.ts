import { Component, Input, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { SectionGenericComponent } from '../../../../shared/components/section-generic/section-generic.component';
import { getAllRandom$, getAllTracks$ } from '@modules/tracks/services/trackV2.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css'],
    standalone: true,
    imports: [SectionGenericComponent, CommonModule]
})
export class TracksPageComponent {
  @Input() currentUser: any;
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObserver$: Array<Subscription> = [];
  private trackService = inject(TrackService);

  constructor() {
    getAllTracks$().subscribe((response) => {
      this.tracksTrending = response;
    });

    getAllRandom$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response;
    });
  }
}

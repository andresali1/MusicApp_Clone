import { Component, Input, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrls: ['./card-player.component.css'],
    standalone: true,
    imports: [NgIf, ImgBrokenDirective, NgClass]
})
export class CardPlayerComponent {
  @Input({required: true}) mode: 'small' | 'big' = 'small';
  @Input({required: true}) track:TrackModel = {_id: 0, name: '', album: '', cover: '', url: ''};
  multimediaService = inject(MultimediaService);

  sendPlay(track: TrackModel): void {
    // this.multimediaService.trackInfo$.next(track);
    this.multimediaService.trackInfoSignal.set(track);
  }
}

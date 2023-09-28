import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  skipById(tracksList: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = tracksList.filter(a => a._id !== id);
      resolve(listTmp);
    })
  }

  /**
   * 
   * @returns Return all the tracks 
   */
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data;
        },
        catchError((err) => {
          return of([]);
        })
      ));
  }

  /**
   * 
   * @returns Return random tracks
   */
  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 3)),
        catchError((err) => {
          console.log('Algo pasó revisame ⚠️⚠️⚠️⚠️', err);
          return of([]);
        })
      );
  }
}

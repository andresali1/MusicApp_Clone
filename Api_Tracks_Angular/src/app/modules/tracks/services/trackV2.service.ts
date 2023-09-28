import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { TrackModel } from "@core/models/tracks.model";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { environment } from "src/environments/environment";

const URL = environment.api;

/**
 * Get all tracks from service
 * @returns
 */
export const getAllTracks$ = (): Observable<any> => {
    return inject(HttpClient).get(`${URL}/tracks`)
        .pipe(
            map(({ data }: any) => {
                return data;
            },
                catchError((err) => {
                    return of([]);
                })
            )
        );
}

/**
 * Sample Function to get random data
 * @returns
 */
export const skipById = (tracksList: TrackModel[], id: number): Promise<TrackModel[]> => {
    return new Promise((resolve, reject) => {
        const listTmp = tracksList.filter(a => a._id !== id);
        resolve(listTmp);
    })
}

/**
 * Get random tracks from service
 * @returns
 */
export const getAllRandom$ = (): Observable<any> => {
    return inject(HttpClient).get(`${URL}/tracks`)
        .pipe(
            mergeMap(({ data }: any) => skipById(data, 3)),
            catchError((err) => {
                console.log('Algo pasó revisame ⚠️⚠️⚠️⚠️', err);
                return of([]);
            })
        );
}
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Building } from '../models/building.model';

@Injectable({
  providedIn: 'root',
})
export class BuildingApiService {
  constructor() {}

  getData(): Observable<Building[]> {
    return of(mockData).pipe(delay(3500));
  }
}

const mockData: Building[] = [
  {
    id: '1',
    name: 'Apartments',
    price: 'string',
    hoursToMake: 5,
  },
  {
    id: '2',
    name: 'Solar panel V1',
    price: 'string',
    hoursToMake: 3,
  },
  {
    id: '3',
    name: 'Wind turbine V1',
    price: 'string',
    hoursToMake: 10.5,
  },
];

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerModeProviderService {

  editMode: boolean = false;

  constructor() { }
}

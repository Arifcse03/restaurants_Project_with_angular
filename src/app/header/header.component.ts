import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-dtorage.service';
@Component({
selector: 'app-header',
templateUrl: './header.component.html'


})

export class HeaderComponent{
  constructor (private dataStorageService:DataStorageService){

  }
onsaveData(){
this.dataStorageService.storeRecipes();
}
onFetchData() {
   this.dataStorageService.fetchRecipes().subscribe();
 }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent {

  @Input()
  placeholder: string = "";

  @Output()
  value = new EventEmitter<string>();

  onSearchChild(txtCapital: string){
    this.value.emit(txtCapital);
  }

 }

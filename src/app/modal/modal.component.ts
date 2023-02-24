import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  tabSelected = 1;

  changeTab(tab: number){
    this.tabSelected = tab;
  }

}

import { Component, OnInit } from '@angular/core';
import {
  Abilities,
  ResponseAbilities,
} from 'src/app/shared/interfaces/abilities.interfaces';
import { AbilitiesService } from 'src/app/shared/services/abilities/abilities.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css'],
})
export class AbilitiesComponent implements OnInit {
  abilities: Abilities[] = [];

  filterWord: string = "";

  abilitySelected: Abilities | undefined;

  showOptionsStatus: boolean = false;

  inputValue: number = 0;

  inputText: string = '';

  preventCloseStatus: boolean = false;

  constructor(private abilitiesService: AbilitiesService) {}

  ngOnInit(): void {
    this.abilitiesService
      .getStudentsNEE()
      .subscribe((data: ResponseAbilities) => {
        this.abilities = data.data;
        console.log(data);
      });
  }

  onChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const abilitySelectedById = this.abilities.find(
      (ability) => ability.idcompetencia === Number(element.value)
    );
    this.abilitySelected = abilitySelectedById;
  }

  showOptions() {
      this.showOptionsStatus = true;
  }

  onClickOption() {
    this.showOptionsStatus = !this.showOptionsStatus;
    this.filterWord = "";
  }

  closeOptions(event: FocusEvent){
    const element = event.relatedTarget as HTMLInputElement;
    if(element && element.id !== "searchInput") {
      setTimeout(() => {
        this.showOptionsStatus = false;
      }, 100)
    }
  }

}

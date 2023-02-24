import { Pipe, PipeTransform } from '@angular/core';
import { Abilities } from '../../interfaces/abilities.interfaces';

@Pipe({
  name: 'abilities'
})
export class AbilitiesPipe implements PipeTransform {

  transform(value: any[], ...arg: any): any[] {
    if(!arg)return value;
    const exist = value.filter(ability => ability.descripcioncompetencia.toLowerCase().toString().includes(arg[0].toLowerCase().toString(), -1));
    if(exist.length >= 1){
      return value.filter(ability => ability.descripcioncompetencia.toLowerCase().toString().includes(arg[0].toLowerCase().toString(), -1));
    }else{
      return value;
    }
  }

}

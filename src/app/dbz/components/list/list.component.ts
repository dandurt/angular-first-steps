import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() public characterList: Character[] = [];
  @Output() public onDeleteCharacterEmmiter: EventEmitter<string> =
    new EventEmitter();

  get isEmpty() {
    return !this.characterList.length;
  }

  onDeleteCharacter(id?: string): void {
    if (id) this.onDeleteCharacterEmmiter.emit(id);
  }
}

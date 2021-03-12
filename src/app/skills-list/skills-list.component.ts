import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public input: Skill = new Skill();
  public skillsList: Array<Skill> = [];

  addSkill() {
    if (this.input.name && this.input.rate) {
      let skillObj = new Skill();
      skillObj.name = this.input.name;
      skillObj.rate = this.input.rate;
      this.skillsList.push(skillObj);
      this.input = new Skill();
    }
  }

  removeSkill(index: number) {
    if (index > -1) {
      this.skillsList.splice(index, 1);
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import { TextElementComponent } from '@app/shared/components/text-element/text-element.component';
import * as data from '@public/resume-data.json';

interface Props {
  topic: string;
  stacks: string[];
  isVisible?: boolean;
}

@Component({
    selector: 'app-skills',
    imports: [SectionHeadingComponent, CommonModule, TextElementComponent],
    templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills: Props[] = data.skills.map((skill) => ({
    topic: skill.topic,
    stacks: skill.stacks,
  }));

  toggleVisibility(index: number) {
    this.skills.forEach((skill, i) => {
      i === index
        ? (skill.isVisible = !skill.isVisible)
        : (skill.isVisible = false);
    });
  }

  formatStacks = (text: string[]): string => text.join(', ') + '.';
}

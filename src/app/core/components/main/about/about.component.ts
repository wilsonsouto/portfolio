import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import { TextElementComponent } from '@app/shared/components/text-element/text-element.component';
import * as data from '@public/resume-data.json';

interface Props {
  about: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeadingComponent, CommonModule, TextElementComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  about: Props[] = [{ about: data.about }];
}

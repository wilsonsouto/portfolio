import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@app/core/components/header/header.component';
import { AboutComponent } from '@app/core/components/main/about/about.component';
import { EducationComponent } from '@app/core/components/main/education/education.component';
import { ExperienceComponent } from '@app/core/components/main/experience/experience.component';
import { ProjectsComponent } from '@app/core/components/main/projects/projects.component';
import { SkillsComponent } from '@app/core/components/main/skills/skills.component';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        HeaderComponent,
        AboutComponent,
        ExperienceComponent,
        EducationComponent,
        SkillsComponent,
        ProjectsComponent,
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {}

import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Internship } from '../internship/internship';
import { Education } from '../education/education';
import { Footer } from '../footer/footer';

@Component({
    selector: 'app-home-view',
    standalone: true,
    imports: [Hero, About, Skills, Projects, Internship, Education, Footer],
    template: `
    <app-hero id="home"></app-hero>
    <app-about id="about"></app-about>
    <app-skills id="skills"></app-skills>
    <app-projects id="projects"></app-projects>
    <app-internship id="experience"></app-internship>
    <app-education id="education"></app-education>
    <app-footer id="contact"></app-footer>
  `
})
export class HomeView { }

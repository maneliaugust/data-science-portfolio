import { Routes } from '@angular/router';
import { HomeView } from './components/home/home';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Internship } from './components/internship/internship';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';

export const routes: Routes = [
    { path: '', component: HomeView },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'about', component: About },
    { path: 'skills', component: Skills },
    { path: 'projects', component: Projects },
    { path: 'experience', component: Internship },
    { path: 'education', component: Education },
    { path: 'contact', component: Footer } // Using Footer as the Contact page for now
];

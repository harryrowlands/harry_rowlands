import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: '**', component: PageNotFoundComponent},
];
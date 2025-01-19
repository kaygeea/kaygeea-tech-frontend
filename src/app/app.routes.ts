import { Routes, ExtraOptions, RouterFeature } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { ProjectsComponent } from './project-details-page/projects/projects.component';
import { ProjectDetailComponent } from './project-details-page/project-detail/project-detail.component';
import { ProjectsOverviewComponent } from './project-details-page/projects-overview/projects-overview.component';

// const resolvedNameTitle: ResolveFn<string> = () => Promise.resolve(inject(ProjectDetailService));
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        title: 'Software Engineer',
        path: 'home',
        component: HomeComponent,
    },
    {
        title: 'About',
        path: 'about',
        component: HomeComponent,
    },
    {
        title: 'Skills',
        path: 'skills',
        component: HomeComponent,
    },
    {
        path: 'home-projects',
        component: HomeComponent,
    },
    {
        title: 'Projects',
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: '',
                component: ProjectsOverviewComponent
            },
            {
                path: ':projectName/:projectScope',
                component: ProjectDetailComponent
            },
        ]
    },
    {
        title: 'Contact',
        path: 'contact',
        component: HomeComponent,
    },
    {
        title: 'Education',
        path: 'education',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    }
];

import { Routes, ExtraOptions, RouterFeature } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';

// const resolvedNameTitle: ResolveFn<string> = () => Promise.resolve(inject(ProjectDetailService));
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        title: 'Full Stack Web Developer & SE',
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
        // title: 'Projects',
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

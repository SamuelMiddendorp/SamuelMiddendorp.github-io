import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsV2Component } from './projects-v2/projects-v2.component';
import { DefaultProjectComponent } from './projects-v2/project-components/default-project/default-project.component';
import { OntwerpenComponent } from './projects-v2/project-components/ontwerpen/ontwerpen.component';
import { AnalyserenComponent } from './projects-v2/project-components/analyseren/analyseren.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsV2Component,
    children: [
    { 
      path: '',
      component: DefaultProjectComponent
    },
    {
      path: 'ontwerpen',
      component: OntwerpenComponent
    },
    {
      path: 'analyseren',
      component: AnalyserenComponent
    }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

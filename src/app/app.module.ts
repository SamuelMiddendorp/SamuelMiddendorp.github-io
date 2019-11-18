import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsV2Component } from './projects-v2/projects-v2.component';
import { OntwerpenComponent } from './projects-v2/project-components/ontwerpen/ontwerpen.component';
import { AnalyserenComponent } from './projects-v2/project-components/analyseren/analyseren.component';
import { DefaultProjectComponent } from './projects-v2/project-components/default-project/default-project.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClickableImg } from './generic-components/clickable-img.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProjectsV2Component,
    OntwerpenComponent,
    AboutComponent,
    HomeComponent,
    AnalyserenComponent,
    DefaultProjectComponent,
    ClickableImg,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

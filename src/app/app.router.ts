import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent} from './app.component'
import { AboutComponent } from './about/about.component'
import { SermonsComponent } from './sermons/sermons.component'
import { HomeComponent } from './home/home.component'

export const rounter : Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'sermons', component: SermonsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(rounter);
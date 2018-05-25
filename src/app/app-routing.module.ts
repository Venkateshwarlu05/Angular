import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvantagesComponent } from 'src/app/advantages/advantages.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ManualComponent } from 'src/app/manual/manual.component';
import { CmsComponent } from 'src/app/cms/cms.component';
import { SubmittedComponent } from 'src/app/submitted/submitted.component';
import { DuedateComponent } from 'src/app/duedate/duedate.component';
import { CompletiondateComponent } from 'src/app/completiondate/completiondate.component';

const routes: Routes = [
    {
        path: 'advantages', component: AdvantagesComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'manual', component: ManualComponent
    },
    {
        path: 'cms', component: CmsComponent
    }
    ,
    {
        path: 'submittedToBOwner', component: SubmittedComponent
    }
    ,
    {
        path: 'openItemsByBOwner', component: DuedateComponent
    }
    ,
    {
        path: 'openItemByDuedate', component: DuedateComponent
    }
    ,
    {
        path: 'completedByBOwner', component: CompletiondateComponent
    }
    ,
    {
        path: 'completedByDate', component: CompletiondateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteringModule { }
export const routingComponents = [AdvantagesComponent, AboutComponent, ManualComponent, CmsComponent, SubmittedComponent, DuedateComponent, CompletiondateComponent]
import {Routes, RouterModule} from '@angular/router';

import {HomepageComponent}    from './components/homepage/homepage.component';
import {Picture1Component}    from './components/picture1/picture1.component';
import {Picture2Component}    from './components/picture2/picture2.component';
import {Picture3Component}    from './components/picture3/picture3.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'picture1',
        component: Picture1Component
    },
    {
        path: 'picture2',
        component: Picture2Component
    },
    {
        path: 'picture3',
        component: Picture3Component
    }
];

export const routing = RouterModule.forRoot(appRoutes);

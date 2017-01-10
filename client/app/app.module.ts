import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule}     from '@angular/http';

import {AppComponent}  from './app.component';
import {routing}       from './app.routing';

import {HomepageComponent}    from './components/homepage/homepage.component';
import {Picture1Component}    from './components/picture1/picture1.component';
import {Picture2Component}    from './components/picture2/picture2.component';
import {Picture3Component}    from './components/picture3/picture3.component';



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    providers: [

    ],
    declarations: [
        AppComponent,
        HomepageComponent,
        Picture1Component,
        Picture2Component,
        Picture3Component
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/layouts/topbar/topbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { Home1Component } from './components/pages/home1/home1.component';
import { Home2Component } from './components/pages/home2/home2.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CampaignListingComponent } from './components/pages/campaign-listing/campaign-listing.component';
import { CampaignDetailsComponent } from './components/pages/campaign-details/campaign-details.component';
import { EventsListingComponent } from './components/pages/events-listing/events-listing.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { BlogListingComponent } from './components/pages/blog-listing/blog-listing.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    Home1Component,
    Home2Component,
    AboutComponent,
    CampaignListingComponent,
    CampaignDetailsComponent,
    EventsListingComponent,
    EventsDetailsComponent,
    BlogListingComponent,
    BlogDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

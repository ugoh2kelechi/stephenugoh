import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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


const routes: Routes = [
	{path: '', component: Home1Component},
    {path: 'home1', component: Home1Component},
	{path: 'home2', component: Home2Component},
	{path: 'about', component: AboutComponent},
	{path: 'campaign-listing', component: CampaignListingComponent},
	{path: 'campaign-details', component: CampaignDetailsComponent},
	{path: 'events-listing', component: EventsListingComponent},
	{path: 'events-details', component: EventsDetailsComponent},
	{path: 'blog-listing', component: BlogListingComponent},
	{path: 'blog-details', component: BlogDetailsComponent},
	{path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

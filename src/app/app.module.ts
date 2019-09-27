import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchBookComponent } from './search-book/search-book.component';

import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyConverterPipe } from './currency-converter.pipe';
import { AddBookDeactivateService } from '../app/add-book-deactivate.service';
// import {RouterConfig} from './router-config';
import {HomeComponent, AboutUsComponent, DownloadsComponent, AudioComponent, VideoComponent} from './demo.component';

const appRoutes : Routes = [
  { path: 'booklist', component: BookListComponent},
  { path: 'addbook', component: AddBookComponent, canDeactivate: [AddBookDeactivateService]},
   { path: 'searchbook', component: SearchBookComponent},
   { path: 'editbook/:id', component: EditBookComponent},
  //  { path: 'home', component: HomeComponent},
  //  { path: 'aboutus', component: AboutUsComponent},
   
  //  { path: 'downloads', component: DownloadsComponent, children:[
  //   {path: 'audio', component: AudioComponent},
  //    {path: 'video', component: VideoComponent}
  //   ]},
   { path: '', redirectTo: '/booklist', pathMatch: 'full'}
 ] 

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchBookComponent,
    SearchResultComponent,
    AddBookComponent,
    EditBookComponent,
    ObservableComponent,
    CurrencyConverterPipe,
    HomeComponent,
    AboutUsComponent,
    DownloadsComponent,
    AudioComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AddBookDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

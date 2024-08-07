import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history/history.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { SearchComponent } from './components/search/search.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { WildcardComponent } from './components/wildcard/wildcard.component';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    MealDetailsComponent,
    MealListComponent,
    SearchComponent,
    CardLoaderComponent,
    WildcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    HttpClientModule,
    DropdownModule,
    ToolbarModule,
    DialogModule,
    ProgressBarModule,
    MessagesModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

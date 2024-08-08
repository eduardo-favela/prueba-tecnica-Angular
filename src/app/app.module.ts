import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './components/history/history.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChipModule } from 'primeng/chip';
import { IonicModule } from '@ionic/angular';


import { MealService } from './services/meal.service';
import { RouterModule } from '@angular/router';


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
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    DropdownModule,
    ToolbarModule,
    DialogModule,
    ProgressBarModule,
    MessagesModule,
    ToastModule,
    ScrollPanelModule,
    ChipModule,
    IonicModule.forRoot({}),
    RouterModule.forRoot([]),
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }

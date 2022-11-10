import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { SearchComponent } from './components/search/search.component';
import { RepositoryComponent } from './components/dash-board/repository/repository.component';
import { OverviewComponent } from './components/dash-board/overview/overview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GenerateRepoComponent } from './components/generate-repo/generate-repo.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { RepoContentComponent } from './components/repo-content/repo-content.component';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectoryComponent } from './components/directory/directory.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    DashBoardComponent,
    SearchComponent,
    RepositoryComponent,
    OverviewComponent,
    NavbarComponent,
    GenerateRepoComponent,
    EditProfileComponent,
    RepoContentComponent,
    DirectoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

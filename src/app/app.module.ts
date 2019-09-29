import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routes/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from "@angular/common/http";
import { CallbackComponent } from './routes/callback/callback.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FolderViewComponent } from './routes/folder-view/folder-view.component';
import { RepoComponent } from './routes/repo/repo.component';
import { PhotoComponent } from './routes/photo/photo.component';
import {WebcamModule} from 'ngx-webcam';
import { ImageCropperModule } from 'ngx-image-cropper';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: 'repos/:repoName', component: FolderViewComponent},
      { path: '', component: RepoComponent}
    ]
  },
  { path: 'photo', component: PhotoComponent },
  { path: '*', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'callback', component: CallbackComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    ProfileComponent,
    FolderViewComponent,
    RepoComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    WebcamModule,
    ImageCropperModule,
    RouterModule.forRoot(
      appRoutes //,
       //{ useHash: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

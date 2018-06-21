import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import { firebaseConfig } from './firebase.conf';

// import { MdButtonModule } from '@angular2-material/button';
// import { MdCardModule } from '@angular2-material/card';
// import { MdIconModule } from '@angular2-material/icon';
// import { MdListModule } from '@angular2-material/list';
// import { MdSidenavModule } from '@angular2-material/sidenav';
// import { MdToolbarModule } from '@angular2-material/toolbar';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { CircleComponent } from './circle/circle.component';
import { LineComponent } from './line/line.component';
import { ShotComponent } from './shot/shot.component';


import {
  BasicSequenceComponent,
  MaintainingStateComponent,
  MergingStreamsComponent,
  MapToFunctionsComponent,
  TriggersComponent,
  StreamOriginComponent,
  SimpleAnimationComponent,
  AnimationComponent,
  CounterComponent,
  CounterClientComponent,
  CounterMasterComponent,
  SlideshowComponent,
  SlideshowClientComponent,
  SlideshowMasterComponent,
  LocationComponent,
  LocationClientComponent,
  LocationMasterComponent,
  MapComponent,
  MapClientComponent,
  MapMasterComponent,
  AnnotateComponent,
  AnnotateClientComponent,
  AnnotateMasterComponent,
  DocComponent,
  GameComponent,
  GameClientComponent,
  GameMasterComponent,
  SliderComponent,
  SliderClientComponent,
  SliderMasterComponent
} from './examples';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    LineComponent,
    ShotComponent,
    BasicSequenceComponent,
    BasicSequenceComponent,
    MaintainingStateComponent,
    MergingStreamsComponent,
    MapToFunctionsComponent,
    TriggersComponent,
    StreamOriginComponent,
    SimpleAnimationComponent,
    AnimationComponent,
    CounterComponent,
    CounterClientComponent,
    CounterMasterComponent,
    SlideshowComponent,
    SlideshowClientComponent,
    SlideshowMasterComponent,
    LocationComponent,
    LocationClientComponent,
    LocationMasterComponent,
    MapComponent,
    MapClientComponent,
    MapMasterComponent,
    AnnotateComponent,
    AnnotateClientComponent,
    AnnotateMasterComponent,
    DocComponent,
    GameComponent,
    GameClientComponent,
    GameMasterComponent,
    SliderComponent,
    SliderClientComponent,
    SliderMasterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

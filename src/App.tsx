import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';


import React, { useState } from "react";
import { Switch, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import { recognition } from "./API/voicerecognition";




import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonSplitPane
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, colorPaletteOutline, documentTextOutline, arrowUpCircleOutline, barChartOutline, terminalOutline } from 'ionicons/icons';
import Grafica from './pages/Grafica';
import Texto from './pages/Texto';
import Tab3 from './pages/Casa';
import Datos from './pages/Datos';
import Codigo from './pages/Codigo';

import Uno from './pages/Uno';
import Dos from './pages/Dos';

import VoiceNav from './components/VoiceNav';

import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (


  <IonApp>
    <IonReactRouter>
    <IonSplitPane contentId="main">


    </IonSplitPane>
      <IonTabs>
        <IonRouterOutlet>
{/* <Redirect exact path="/grafica" to="/grafica/uno" /> */}
          <Route exact path="/grafica">
            <Grafica />
          </Route>
          <Route exact path="/grafica/uno">
            <Uno />
          </Route>
          <Route exact path="/grafica/dos">
            <Dos />
          </Route>
          <Route exact path="/texto">
            <Texto />
          </Route>
          <Route path="/casa">
            <Tab3 />
          </Route>
          <Route path="/datos">
            <Datos />
          </Route>
          <Route path="/codigo">
            <Codigo />
          </Route>
          <Route exact path="/">
            <Redirect to="/casa" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="grafica" href="/grafica">
            <IonIcon icon={colorPaletteOutline} /> 
            
            <IonLabel>Grafica</IonLabel>
          </IonTabButton>
          <IonTabButton tab="texto" href="/texto">
{/*            <ion-icon name="home"></ion-icon> */}
            <IonIcon icon={documentTextOutline} /> 
            <IonLabel>Texto</IonLabel> 
          </IonTabButton>
          <IonTabButton tab="casa" href="/casa">
            <IonIcon icon={arrowUpCircleOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="datos" href="/datos">
            <IonIcon icon={barChartOutline} />
            <IonLabel>Datos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="codigo" href="/codigo">
            <IonIcon icon={terminalOutline} />
            <IonLabel>Codigo</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>

 
);

export  default App;




import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonInfiniteScroll } from '@ionic/react';

import MenuDatos from '../components/MenuDatos';
import Fab from '../components/Fab';
import CardDatos from '../components/CardDatos';
import VoiceNav from '../components/VoiceNav';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
    <IonContent>
    

             <MenuDatos />
             <Fab />
{/*             <VoiceNav /> */}
        
    </IonContent>
</IonPage>
  );
};

export default Tab3;

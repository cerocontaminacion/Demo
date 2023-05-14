import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';



{/*
import Menu from '../components/Menu';
import Fab from '../components/Fab';
import './Tab3.css';

const Tab3: React.FC = () => {
*/}


function InputVoz() {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  return (
<IonPage>
<div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Hablar</button>
</div>
</IonPage>
  );

};

export default InputVoz;

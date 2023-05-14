import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
 
function SalidaVoz() {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
 
  return (
<IonPage>
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
    </div>
</IonPage>
  );
}
export default SalidaVoz;

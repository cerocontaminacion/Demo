import React from 'react';
import { observer } from 'mobx-react-lite';
import { InputGroup, Button } from '@blueprintjs/core';

import { SectionTab } from 'polotno/side-panel';
import { getKey } from 'polotno/utils/validate-key';
import { getImageSize } from 'polotno/utils/image';
import FaBrain from '@meronex/icons/fa/FaBrain';

import { ImagesGrid } from 'polotno/side-panel/images-grid';
import { useCredits } from '../credits';

const API = 'https://api.polotno.dev/api';

const StableDiffusionPanel = observer(({ store }) => {
  const inputRef = React.useRef(null);
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { credits, consumeCredits } = useCredits('stableDiffusionCredits', 10);

  const handleGenerate = async () => {
    if (credits <= 0) {
      alert('You have no credits left');
      return;
    }
    setLoading(true);
    setImage(null);

    const req = await fetch(
      `${API}/get-stable-diffusion?KEY=${getKey()}&prompt=${
        inputRef.current.value
      }`
    );
    setLoading(false);
    if (!req.ok) {
      alert('Something went wrong, please try again later...');
      return;
    }
    consumeCredits();
    const data = await req.json();
    setImage(data.output[0]);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '40px', paddingTop: '5px' }}>
        Genera tu imagen con
      </div>
      <div style={{ padding: '15px 0' }}>
        MUNNA IA
      </div>
      <InputGroup
        placeholder="Ingresa tu descripcion de imagen..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleGenerate();
          }
        }}
        style={{
          marginBottom: '20px',
        }}
        inputRef={inputRef}
      />
      <p style={{ textAlign: 'center' }}>
        {!!credits && <div>Tu tienes ({credits}) creditos.</div>}
        {!credits && <div>No tienes credito. Intenta mañana.</div>}
      </p>
      <Button
        onClick={handleGenerate}
        intent="primary"
        loading={loading}
        style={{ marginBottom: '40px' }}
        disabled={credits <= 0}
      >
        Generar
      </Button>
      {image && (
        <ImagesGrid
          shadowEnabled={false}
          images={image ? [image] : []}
          getPreview={(item) => item}
          isLoading={loading}
          onSelect={async (item, pos, element) => {
            const src = item;
            if (element && element.type === 'svg' && element.contentEditable) {
              element.set({ maskSrc: src });
              return;
            }

            if (
              element &&
              element.type === 'image' &&
              element.contentEditable
            ) {
              element.set({ src: src });
              return;
            }

            const { width, height } = await getImageSize(src);
            const x = (pos?.x || store.width / 2) - width / 2;
            const y = (pos?.y || store.height / 2) - height / 2;
            store.activePage?.addElement({
              type: 'image',
              src: src,
              width,
              height,
              x,
              y,
            });
          }}
          rowsNumber={1}
        />
      )}
    </div>
  );
});

// define the new custom section
export const StableDiffusionSection = {
  name: 'stable-diffusion',
  Tab: (props) => (
    <SectionTab name="IA" {...props}>
      <FaBrain />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: StableDiffusionPanel,
};

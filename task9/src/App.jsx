import React from 'react';
import CustomButton from './components/CustomButton';

const App = () => {
  return (
    <div>
      <h1>Fərqli düymə nümunələri</h1>
      <CustomButton
        text="Sade duyme"
        warnMessage={null}
        hint="sadedir"
      />
      <CustomButton
        text="Xeberdarliq Duymesi"
        warnMessage="Duymeye basdiniz!"
        hint="xeberdarliq verir"
      />
      <CustomButton
        text="Kursiv Metni Olan Düyme"
        warnMessage={null}
        hint="kursiv metni gösterir"
      />
    </div>
  );
};

export default App;

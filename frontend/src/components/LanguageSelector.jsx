import React from 'react';

import { english, german } from '../assets';

const LanguageSelector = props => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {props.title}
    </div>
  );
};

export default LanguageSelector;
// <img src={english} alt="language" className="w-12 h-12 object-contain" />
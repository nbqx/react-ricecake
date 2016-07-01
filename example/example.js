import React from 'react'
import {render} from 'react-dom'
import RiceCake from '../src/RiceCake'

render (
  <RiceCake duration="1000" />,
  document.getElementById('1000')
);

render (
    <RiceCake duration="100" />,
  document.getElementById('100')
);

render (
    <RiceCake duration="10" />,
  document.getElementById('10')
);


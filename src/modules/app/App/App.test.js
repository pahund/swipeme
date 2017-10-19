import React from 'react';
import App from './App';
import { rendersCorrectly } from '../../testing';

describe('[modules/app/App/App]', () => describe('The component', () => rendersCorrectly(<App />)));


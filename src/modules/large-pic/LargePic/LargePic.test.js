import React from 'react';
import LargePic from './LargePic';
import { rendersCorrectly } from '../../testing';

describe('[modules/large-pic/LargePic/LargePic]', () =>
    describe('The component', () => rendersCorrectly(<LargePic />)));

import React from 'react';
import { PhotoSwipe } from 'react-photoswipe';
import PropTypes from 'prop-types';

const items = [
    {
        src: 'http://lorempixel.com/1200/900/sports/1',
        w: 1200,
        h: 900,
        title: 'Image 1'
    },
    {
        src: 'http://lorempixel.com/1200/900/sports/2',
        w: 1200,
        h: 900,
        title: 'Image 2'
    }
];

const options = {};

function handleClose() {
    return {
        isOpen: false
    };
}

export default function LargePic({ isOpen }) {
    return (
        <PhotoSwipe isOpen={isOpen} items={items} options={options} onClose={handleClose} />
    );
}

LargePic.propTypes = {
    isOpen: PropTypes.bool
};

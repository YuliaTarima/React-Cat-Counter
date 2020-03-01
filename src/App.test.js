import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
    shallow(<App />);
});
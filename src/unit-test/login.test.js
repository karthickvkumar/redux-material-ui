import React from 'react';
import renderer from 'react-test-renderer';

import LoginPage from '../pages/login';

it('Should return a component must be registered', () => {
    const tree = renderer.create(<LoginPage />);
    expect(tree).toBeTruthy();
})
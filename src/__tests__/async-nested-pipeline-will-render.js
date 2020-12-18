import React from 'react';
import { shallow } from 'enzyme';
import { NestedAsyncPipeline } from '..';

it('renders AsyncNestedPipeline without crashing', () => {
  shallow(<NestedAsyncPipeline>test</NestedAsyncPipeline>);
});

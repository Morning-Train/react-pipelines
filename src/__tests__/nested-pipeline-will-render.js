import React from 'react';
import { shallow } from 'enzyme';
import { NestedPipeline } from '..';

it('renders NestedPipeline without crashing', () => {
  shallow(<NestedPipeline>test</NestedPipeline>);
});

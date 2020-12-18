import React from 'react';
import { shallow } from 'enzyme';
import { AsyncPipeline } from '..';

it('renders AsyncPipeline without crashing', () => {
  shallow(<AsyncPipeline>test</AsyncPipeline>);
});

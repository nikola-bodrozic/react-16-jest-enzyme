import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Note from './Note';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = { note: { text: "test note" } }

describe('Note', () => {
	it('renders text', () => {
		let note = mount(<Note {...props}/>)
	  	expect(note.find('p').text()).toEqual('test note');
	});
});
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import App from './App';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let app = mount(<App />);

  it('renders the App title', () => {
    // console.log(app.debug());
    expect(app.find('h2').text()).toEqual('Note to Self');
  });

  it('renders the clear button', () => {
    expect(app.find('button').at(1).text()).toEqual('Clear Notes');
  });

  describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(app.find('form').exists()).toBe(true);
    });

    it('renders a FormControl component', () => {
      expect(app.find('input').exists()).toBe(true);
    });

    it('renders a submit button', () => {
      expect(app.find('button').at(0).text()).toEqual('Submit');
    });
  });

  describe('when creating a note', () => {
    let testNote = 'test note';

    beforeEach(() => {
      app.find('input').simulate('change', {
        target: { value: testNote }
      });
    });

    it('updates the text in state', () => {
      expect(app.state().text).toEqual(testNote);
    });

    describe('and submitting the new note', () => {
      beforeEach(() => {
        app.find('button').at(0).simulate('click');
      });

      afterEach(() => {
        app.find('button').at(1).simulate('click');
      });

      it('adds the new note to the state', () => {
        // console.log(app.debug());
        expect(app.state().notes[0]).toEqual(testNote);
      });

      describe('and remounting the component', () => {
        let app2;

        beforeEach(() => {
          app2 = mount(<App />);
        });
      });

      describe('and clicking the clear button', () => {
        beforeEach(() => {
          app.find('button').at(1).simulate('click');
        });

        it('clears the notes in state', () => {
          // console.log(app.debug());
          expect(app.state().notes).toEqual([]);
        });
      });
    });
  });
});
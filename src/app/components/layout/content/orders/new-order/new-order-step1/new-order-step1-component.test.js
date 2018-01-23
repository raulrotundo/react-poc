import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import NewOrderStep1Component from './new-order-step1-component';

describe('NewOrderStep1Component', () => {
  let props;

  beforeEach(() => {
    props = {
      form: {
        orderStep: 1,
        step1: {
          inputTypeahead: {
            allowNew: false,
            isLoading: false,
            multiple: false,
            autoFocus: true,
            options: [],
            selected: []
          },
          isBillingAddressInputsVisible: false
        }
      },
      customerSearch: jest.fn()
    };
  });

  it('render NewOrderStep1Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <NewOrderStep1Component {...props} />
        </MemoryRouter>
      </Provider>
      , div)
  });
});

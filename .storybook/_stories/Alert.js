import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import styled, { injectGlobal } from 'styled-components';

import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';

import Alert from '../../components/Alert/src/Alert';
import CloseIcon from '../../components/CloseIcon/src/CloseIcon';

injectGlobal`
  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity .15s linear;
  }

  .example-exit {
    opacity: 1;
  }

  .example-exit.example-exit-active {
    opacity: 0.01;
    transition: opacity .15s linear;
  }
`;

class DismissableAlert extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      primary: false,
      secondary: false,
      success: false,
      danger: false,
      warning: false,
      info: false,
      light: false,
      dark: false
    };
  }

  closeAlert = type => {
    this.setState({ [type]: !this.state[type] });
  };

  render() {
    return <Transition>
        <TransitionGroup>
          {!this.state.primary && <CSSTransition key={1} classNames="example" timeout={{ enter: 500, exit: 300 }}>
              <Alert type="primary">
                <CloseIcon onClick={() => this.closeAlert('primary')} />
                This is a primary alert with <a href="#">an example link</a>. Give it a click if you like.
              </Alert>
            </CSSTransition>}

          {!this.state.secondary && <CSSTransition key={2} classNames="example" timeout={{ enter: 500, exit: 300 }}>
              <Alert type="secondary">
                <CloseIcon onClick={() => this.closeAlert('secondary')} />
                This is a secondary alert with <a href="#">an example link</a>. Give it a click if you like.
              </Alert>
            </CSSTransition>}

          {!this.state.success && <CSSTransition key={3} classNames="example" timeout={{ enter: 500, exit: 300 }}>
              <Alert type="success">
                <CloseIcon onClick={() => this.closeAlert('success')} />
                This is a success alert with <a href="#">an example link</a>. Give it a click if you like.
              </Alert>
            </CSSTransition>}

          {!this.state.danger && <CSSTransition key={4} classNames="example" timeout={{ enter: 500, exit: 300 }}>
              <Alert type="danger">
                <CloseIcon onClick={() => this.closeAlert('danger')} />
                This is a danger alert with <a href="#">an example link</a>. Give it a click if you like.
              </Alert>
            </CSSTransition>}

          {!this.state.warning && <CSSTransition key={5} classNames="example" timeout={{ enter: 500, exit: 300 }}>
              <Alert type="warning">
                <CloseIcon onClick={() => this.closeAlert('warning')} />
                This is a warning alert with <a href="#">an example link</a>. Give it a click if you like.
              </Alert>
            </CSSTransition>}

          {!this.state.info && <CSSTransition key={6} classNames="example" timeout={{ enter: 500, exit: 300 }}>
              <Alert type="info">
                <CloseIcon onClick={() => this.closeAlert('info')} />
                This is a info alert with <a href="#">an example link</a>. Give it a click if you like.
              </Alert>
            </CSSTransition>}

          {!this.state.light && <CSSTransition key={7} classNames="example" timeout={{ enter: 500, exit: 300 }}>
              <Alert type="light">
                <CloseIcon onClick={() => this.closeAlert('light')} />
                This is a light alert with <a href="#">an example link</a>. Give it a click if you like.
              </Alert>
            </CSSTransition>}

          {!this.state.dark && <CSSTransition key={8} classNames="example" timeout={{ enter: 500, exit: 300 }}>
              <Alert type="dark">
                <CloseIcon onClick={() => this.closeAlert('dark')} />
                This is a dark alert with <a href="#">an example link</a>. Give it a click if you like.
              </Alert>
            </CSSTransition>}
        </TransitionGroup>
      </Transition>;
  }
}

export default storiesOf('Alert', module)
  .add('Alert', () =>
    <div style={{ minWidth: 600, padding: '1.5rem' }}>
      <Alert type="primary">This is a primary alert—check it out!</Alert>
      <Alert type="secondary">This is a secondary alert—check it out!</Alert>
      <Alert type="success">This is a success alert—check it out!</Alert>
      <Alert type="danger">This is a danger alert—check it out!</Alert>
      <Alert type="warning">This is a warning alert—check it out!</Alert>
      <Alert type="info">This is a info alert—check it out!</Alert>
      <Alert type="light">This is a light alert—check it out!</Alert>
      <Alert type="dark">This is a dark alert—check it out!</Alert>
    </div>
  )
  .add('Alert with close Icon', () =>
    <div style={{ minWidth: 600, padding: '1.5rem' }}>
      <DismissableAlert />
    </div>
  );

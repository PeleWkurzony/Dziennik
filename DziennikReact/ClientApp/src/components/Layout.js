import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Container className="mt-5" tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}

import React, {Component} from 'react';
import logo from './logo.svg';
import {Grommet, Box, Button, Heading} from 'grommet';
import {Container} from 'grommet-busy-overlay';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({busy: !this.state.busy});
  }

  render() {
    return (
      <Grommet>
        <Container busy={this.state.busy}>
          <Box basis="small" justify="center" align="center">
            <Heading>Grommet is awesome!</Heading>
          </Box>
        </Container>
        <Box justify="center" direction="row">
          <Button onClick={this.handleToggle} label="Toggle busy state" />
        </Box>
      </Grommet>
    );
  }
}

export default App;

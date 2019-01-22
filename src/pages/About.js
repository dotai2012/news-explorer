import React, { Component } from 'react';
import { Segment, Grid, Divider } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column className='center-container'>
                <p>
                  Made by Tai Do
                </p>
            </Grid.Column>
            <Grid.Column className='center-container'>
                <p>
                    React
                </p>
                <p>
                  Semantic UI
                </p>
            </Grid.Column>
          </Grid>
          <Divider vertical>With</Divider>
    </Segment>
    );
  }
}

export default About;

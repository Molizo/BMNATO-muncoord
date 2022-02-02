import * as React from 'react';
import { Button, Segment, Header, List, Container } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { CLIENT_VERSION, VersionLink } from './Footer';

export const KEYBOARD_SHORTCUT_LIST = (
  <List>
    <List.Item>
      <Button size="mini">
        Alt
      </Button>
      <Button size="mini">
        N
      </Button>
      Next speaker
    </List.Item>
    <List.Item>
      <Button size="mini">
        Alt
      </Button>
      <Button size="mini">
        S
      </Button>
      Toggle speaker timer
    </List.Item>
    <List.Item>
      <Button size="mini">
        Alt
      </Button>
      <Button size="mini">
        C
      </Button>
      Toggle caucus timer
    </List.Item>
  </List>
);

export default class Help extends React.PureComponent<{}, {}> {
  gpl = ( 
    <a href="https://github.com/MaxwellBo/Muncoordinated-2/blob/master/LICENSE">
      GNU GPLv3
    </a>
  );

  render() {
    const { gpl } = this;

    return (
      <Container text style={{ padding: '1em 0em' }}>
        <Helmet>
          <title>{`Help - BMNATO Chairing`}</title>
        </Helmet>
        <Header as="h3" attached="top">Keyboard shortcuts</Header>
        <Segment attached="bottom">
        {KEYBOARD_SHORTCUT_LIST}
        </Segment>
        <Header as="h3" attached="top">Help requests</Header>
        <Segment attached="bottom">
          In the event that a bug or issue crops up, please contact Mihnea Visoiu, +40755155351
        </Segment>
        <Header as="h3" attached="top">License</Header>
        <Segment attached="bottom">
          BMNATO Chairing is licensed under {gpl}. Based on Muncoordinated.
        </Segment>
      </Container>
    );
  }
}

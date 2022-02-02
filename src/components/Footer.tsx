import * as React from 'react';

interface Props {
}

interface State {
  latestVersion?: string;
}

export const CLIENT_VERSION = 'v2.20.12';

export function VersionLink(props: { 
  version: string 
}) {
  return <p>{props.version}</p>
}

const RELEASES_LATEST = 'https://api.github.com/repos/MaxwellBo/Muncoordinated-2/releases/latest';

export default class Footer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  fetchLatestVersion = (): Promise<void> => {
    this.setState({ latestVersion: undefined });

    return fetch(RELEASES_LATEST).then(response =>
      response.json()
    ).then(json => 
      this.setState({ latestVersion: json.tag_name })
    );
  }

  componentDidMount() {
    const { fetchLatestVersion } = this;
    fetchLatestVersion();
  }

  render() {
    const { latestVersion } = this.state;

    return (
      <p></p>
    );
  }
}

import React from 'react';

import Badge from './Badge';
import QrCard from './QrCard';
import { withStyles } from '@material-ui/core';

import QRCode from 'qrcode';
import uuidv4 from 'uuid/v4';

const styles = theme => ({
  // typography: {
  //   margin: theme.spacing.unit * 2,
  // },
});

class BadgeHoverQr extends React.Component {

  state = {
    open: false,
    managedActive: false,
    id: `qr-${uuidv4()}`,
    qrSvg: '',
    deactivate: false
  };

  componentDidMount() {
    QRCode.toString(this.props.data.qr).then(res => this.setState({ qrSvg: res }));
  }

  handleDeactivate = () => {
    this.setState({deactivate: true}, () => {
      this.setState({deactivate: false});
    });
  }

  render() {

    const { classes, data, passThroughProps } = this.props;
    const { open, id, managedActive } = this.state;

    const { qr, account, ...passThroughData } = data;
    const title = data.title; //still pass through

    return (
      <div
        style={{ display: 'inline-block', position: 'relative' }}
        onMouseLeave={this.handleDeactivate}
        onBlur={this.handleDeactivate}
      >
        <Badge
          styles={{
            a: {
              cursor: 'pointer'
            }
          }}
          data={passThroughData}
          shouldShowTooltip={false}
          aria-owns={open ? id : null}
          aria-haspopup={true}
          handleActive={bool => this.setState({ open: bool })}
          shouldManageDeactivate={true}
          deactivate={this.state.deactivate}
          {...passThroughProps}
        />

        <QrCard
          qr={this.state.qrSvg}
          {...{title, open, id, account}}
        />
      </div>
    );
  }

}

export default withStyles(styles)(BadgeHoverQr);

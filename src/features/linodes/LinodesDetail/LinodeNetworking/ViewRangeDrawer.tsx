import * as React from 'react';

import Button from '@material-ui/core/Button';
import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ActionsPanel from 'src/components/ActionsPanel';
import Drawer from 'src/components/Drawer';
import { formatRegion } from 'src/utilities';

type ClassNames = 'root'
  | 'section';

const styles: StyleRulesCallback<ClassNames> = (theme) => ({
  root: {},
  section: {
    marginBottom: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
});

interface Props {
  open: boolean;
  range?: Linode.IPRange;
  onClose: () => void;
}

type CombinedProps = Props & WithStyles<ClassNames>;

const ViewRangeDrawer: React.StatelessComponent<CombinedProps> = (props) => {
  const { classes, range } = props;
  const region = (range && range.region) || '';

  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      title={`Details for IP Range`}
    >
      {props.range &&
        <React.Fragment>
          <div className={classes.section}>
            <Typography role="header" variant="subheading">IP Range</Typography>
            <Typography variant="body1">
              {props.range.range}
            </Typography>
          </div>

          <div className={classes.section} style={{ border: 0, paddingBottom: 0 }}>
            <Typography role="header" variant="subheading">Region</Typography>
            <Typography variant="body1">
              {formatRegion(region)}
            </Typography>
          </div>

          <ActionsPanel>
            <Button
              variant="raised"
              color="secondary"
              onClick={props.onClose}
              data-qa-cancel
            >
              Close
            </Button>
          </ActionsPanel>
        </React.Fragment>
      }
    </Drawer>
  );
};

const styled = withStyles(styles, { withTheme: true });

export default styled<Props>(ViewRangeDrawer);

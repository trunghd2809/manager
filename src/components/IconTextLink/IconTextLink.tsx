import * as React from 'react';
import * as classNames from 'classnames';

import {
  withStyles,
  StyleRulesCallback,
  WithStyles,
  Theme,
} from 'material-ui';
import SvgIcon from 'material-ui/SvgIcon';

type CSSClasses = 'root' | 'active' | 'disabled' | 'icon';

const styles: StyleRulesCallback<CSSClasses> = (theme: Theme & Linode.Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    transition: 'color 225ms ease-in-out',
    margin: `${theme.spacing.unit}px 0`,
    '&:hover, &:hover $icon': {
      color: theme.palette.primary.light,
    },
    '&:hover $icon': {
      borderColor: theme.palette.primary.light,
    },
  },
  active: {
    color: '#1f64b6',
  },
  disabled: {
    color: '#939598',
    pointerEvents: 'none',
    '& $icon': {
      color: '#939598',
      borderColor: '#939598',
    },
  },
  icon: {
    fontSize: 18,
    marginRight: 5,
    color: theme.palette.primary.main,
  },
});

interface Props {
  SideIcon: typeof SvgIcon | React.ComponentClass;
  text: string;
  onClick: () => void;
  active?: Boolean;
  disabled?: Boolean;
  title: string;
}

type FinalProps = Props & WithStyles<CSSClasses>;

const IconTextLink: React.StatelessComponent<FinalProps> = (props) => {
  const {
    SideIcon,
    classes,
    text,
    onClick,
    active,
    disabled,
    title,
  } = props;

  return (
    <a
      className={
        classNames({
          [classes.root]: true,
          [classes.disabled]: disabled === true,
          [classes.active]: active === true,
        })
      }
      title={title}
      onClick={onClick}
    >
      <SideIcon className={classes.icon} />
      <span>
        {text}
      </span>
    </a>
  );
};

export default withStyles(styles, { withTheme: true })(IconTextLink);
import constants from '@domain/constants';
import { logout } from '@domain/handlers/logout';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  Apple,
  ChevronLeft,
  Dashboard,
  ExitToApp,
  ListAlt,
  Menu,
  Payment,
  Person,
  Store,
} from '@material-ui/icons';
import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';

import { LayoutProps } from './Layout.models';
import { useStyles } from './Layout.styles';

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children, showLayout, currentRoute, title } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!showLayout) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Donkey - {title && title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href={constants.routes.privateRoutes.home}>
            <ListItem button>
              <ListItemIcon>
                <Dashboard
                  color={
                    currentRoute === constants.routes.privateRoutes.home
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href={constants.routes.privateRoutes.staff}>
            <ListItem button>
              <ListItemIcon>
                <Person
                  color={
                    currentRoute === constants.routes.privateRoutes.staff
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>{' '}
          <Link href={constants.routes.privateRoutes.customers}>
            <ListItem button>
              <ListItemIcon>
                <Apple
                  color={
                    currentRoute === constants.routes.privateRoutes.customers
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
          <Link href={constants.routes.privateRoutes.jobs}>
            <ListItem button>
              <ListItemIcon>
                <ListAlt
                  color={
                    currentRoute === constants.routes.privateRoutes.jobs
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItem>
          </Link>
          <Link href={constants.routes.privateRoutes.parts}>
            <ListItem button>
              <ListItemIcon>
                <Store
                  color={
                    currentRoute === constants.routes.privateRoutes.parts
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Parts" />
            </ListItem>
          </Link>
          <Link href={constants.routes.privateRoutes.payments}>
            <ListItem button>
              <ListItemIcon>
                <Payment
                  color={
                    currentRoute === constants.routes.privateRoutes.payments
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Payments" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={logout}>
            <ListItemIcon>
              <ExitToApp color="error" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;

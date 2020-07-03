import constants from '@domain/constants';
import { logout } from '@domain/handlers/logout';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import {
  ChevronLeft,
  Dashboard,
  ExitToApp,
  ListAlt,
  Notifications,
  Payment,
  Person,
  Search,
  Store,
} from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';

import { LayoutProps } from './Layout.models';
import { useStyles } from './Layout.styles';

const stuff = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
];

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children, showLayout, currentRoute, title, role } = props;

  const classes = useStyles();

  const theme = useTheme();

  console.log('Theme', theme);
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
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
        <Toolbar className={classes.bar}>
          <Autocomplete
            id="combo-box-demo"
            size="small"
            options={stuff}
            getOptionLabel={(option) => option.title}
            style={{ width: 400 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Search ..."
              />
            )}
          />

          <div style={{ display: 'flex' }}>
            <IconButton aria-label="badge">
              <Badge badgeContent={4} color="error" variant="dot">
                <Notifications />
              </Badge>
            </IconButton>
            <Box ml={4} />
            <Avatar
              alt="Image of something"
              src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-cartoon-european-and-american-character-avatar-design-png-image_4366075.jpg"
            />
          </div>
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
          <IconButton onClick={handleDrawer}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link
            href={
              role === 'ADMIN' ? '/admin' : constants.routes.privateRoutes.home
            }
          >
            <ListItem button>
              <ListItemIcon>
                <Dashboard
                  color={
                    currentRoute === constants.routes.privateRoutes.home ||
                    currentRoute === '/admin'
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link
            href={
              role === 'ADMIN'
                ? constants.routes.privateRoutes.users
                : constants.routes.privateRoutes.customers
            }
          >
            <ListItem button>
              <ListItemIcon>
                <Person
                  color={
                    currentRoute === constants.routes.privateRoutes.users ||
                    currentRoute === constants.routes.privateRoutes.customers
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
          {role !== 'ADMIN' && (
            <>
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
            </>
          )}
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

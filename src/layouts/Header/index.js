import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText } from '@material-ui/core';
import CustomDropdown from '../../components/CustomDropdown';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white'
  },
  toolbar: {
    paddingLeft: 45,
    paddingRight: 45
  },
  innerToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginLeft: 20
  },
  list: {
    color: 'black',
    display: 'flex'
  },
  listItemText: {
    whiteSpace: 'nowrap',
    '& span': {
        fontSize: 16
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerButtons: {
    '& > button': {
        fontSize: 16,
        textTransform: 'none',
        '&:first-child': {
            marginRight: 14
        }
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="fixed">
        <Toolbar className={classes.toolbar}>
            <img src='logo.png' />
            <div className={classes.innerToolbar}>
                <List className={classes.list} component="nav" aria-label="main mailbox folders">
                    <CustomDropdown 
                        primary="Sobre Nós"
                        dropdownList={[
                            'Quem somos',
                            'Resultados',
                            'Cases'
                        ]}
                    />
                    <ListItem button>
                        <ListItemText className={classes.listItemText} primary="Soluções" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.listItemText} primary="Tecnologia" />
                    </ListItem>
                    <CustomDropdown 
                        primary="Conhecimento"
                        dropdownList={[
                            'Blog',
                            'E-book',
                            'Podcasts',
                            'Infográficos',
                            'FAQ'
                        ]}
                    />
                    <ListItem button>
                        <ListItemText className={classes.listItemText} primary="Contato" />
                    </ListItem>
                </List>
                <div className={classes.headerButtons}>
                    <Button variant="contained" color="primary">
                        Seja um Correspondente
                    </Button>
                    <Button variant="outlined" color="primary">
                        Login
                    </Button>
                </div>
            </div>
            </Toolbar>
      </AppBar>
  );
}
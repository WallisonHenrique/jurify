import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { ArrowUpward, Facebook, Instagram, LinkedIn, YouTube } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#2054e5',
        minHeight: 130,
        color: "#fff",
        padding: '36px 44px',
    },
    iconsSocial: {
        '& > svg': {
            marginRight: 20
        }
    },
    arrowUp: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 4,
        fontSize: 50,
        color: 'white'
    }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Grid item>
                <Typography variant="inherit">
                    Telefone: (31)98447-0043 <br/>
                    E-mail:comercial@jurify.com.br
                </Typography>
            </Grid>
            <Grid item sm alignItems="center" justify="flex-end" container>
                <Grid item>
                    <div className={classes.iconsSocial}>
                        <Facebook style={{ fontSize: 40 }} />
                        <Instagram style={{ fontSize: 40 }} />
                        <YouTube style={{ fontSize: 40 }} />
                        <LinkedIn style={{ fontSize: 40 }} />
                    </div>
                </Grid>
                <Grid item>
                    <IconButton color="primary">
                        <ArrowUpward className={classes.arrowUp} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    </footer>
  );
}
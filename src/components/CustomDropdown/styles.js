import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    button: {
      fontSize: 12,
      fontWeight: 'normal',
      whiteSpace: 'nowrap',
      textTransform: 'none',
      minWidth: 'auto',
      padding: '8px 16px'
    },
    listItem: {
    },
    listItemText: {
      whiteSpace: 'nowrap',
      '& span': {
          fontSize: 16
      }
    },
  })
);

export default styles
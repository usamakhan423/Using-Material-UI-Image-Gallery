import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
  heading: {
    fontWeight: 'bold'
  },
  container : {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    maxWidth: '100%'
  },
  icon: {
    marginLeft: '10px',
  },
  para: {
    // maxWidth: '50%',
  },
  buttons: {
    marginTop: '30px',
  },
  cardGrid:{
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
}))

export default useStyles;
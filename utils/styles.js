import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#012837',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#F4A896',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  imageContainer: {
    height: '40vh',
  },
  footer: {
    textAlign: 'center',
    marginTop: '3rem',
    marginBottom: '1rem',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
})

export default useStyles

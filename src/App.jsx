import React from 'react';
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './Styles';


const card = [1,2,3,4,5,6,7,8,9];

const App = () => {

  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.icon}>
          <PhotoCamera />
          <Typography  className={classes.icon} variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={classes.container} maxWidth='md' style={{ marginTop: '50px'}}>
            <Typography className={classes.heading} variant="h2" align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography className={classes.para} variant='h6' align='center' color='textSecondary' paragraph>
              Hello everyone This is photo album and I'm trying to make this paragraph as long as possible to look nice on the screen!
            </Typography>
            <div>
              <Grid className={classes.buttons} container spacing={6} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photo's
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {card.map(()=> (
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  alt="random image"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h4" component="div">
                    Heading
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    This is a card component and I'm writting a script to expand the paragraph
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
              Footer
        </Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>
              This  is a footer section its just a purpose to write something in this section
        </Typography>
      </footer>
    </>
  );
}

export default App;

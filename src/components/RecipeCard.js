import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function RecipeCard(props) {
  const classes = useStyles();

  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

  const dir = props.values.directions.split("**")
  const modalid = "#" + props.values.id
  const points = dir.map(item => <Typography key = {generateKey(item)} variant="body2" color="textSecondary" component="p">{item}</Typography>)
  return (

      <div className="card-container">

      <div className="card">

        <div className="front">
          <CardActionArea>
            <CardMedia
                className={classes.media}
                image={props.values.img_url}
                title={props.values.name}
              />
              <CardHeader
                title={props.values.name}
                subheader={props.values.author}
              />
              <CardContent>

                <Typography variant="body2" color="textSecondary" component="p">Ingredients : {props.values.ingredients_list}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Prepare Time : {props.values.prepare_time}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Cook Time : {props.values.cook_time}</Typography> 
                <Typography variant="body2" color="textSecondary" component="p">Total Time : {props.values.total_time}</Typography>  
              </CardContent>
            </CardActionArea>
            

              <CardActions>
                <Button className = "ml-2" size="small" color="primary" type="button" data-toggle="modal" data-target={modalid}>
                  Directions
                </Button>
            </CardActions>
        </div>
        
        <div className="back">

          <CardContent>
            {points}
          </CardContent>
          
        </div>
      </div>
    </div>
  );
}
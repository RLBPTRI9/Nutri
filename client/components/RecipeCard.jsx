import * as React from 'react';
import { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NutriContext from '../store/nutri-context.js';

//randomly display avatar img
import img1 from '../static/will.png';
import img2 from '../static/will2.png';
import img3 from '../static/matt1.jpg';
import img4 from '../static/sam.jpg';
import img5 from '../static/matt2.jpg';
import img6 from '../static/matt3.jpg';
import img7 from '../static/jess.png';
import img8 from '../static/kyle.png';
import img9 from '../static/glen.png';
import img10 from '../static/charlie.png';
import img11 from '../static/laurence.jpg';
import img12 from '../static/ethan.jpg';
import img13 from '../static/hannah.jpg';
const img = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

import Paper from '@mui/material/Paper';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ props }) {
  const { name, image, healthLabels, url, ingredients, source } = props;
  const [expanded, setExpanded] = React.useState(false);
  // const [favorite, setFavorite] = useState([]);
  const nutriContext = useContext(NutriContext);
  // const faveClicked = nutriContext.faveClicked;
  // const updateFaveClicked = nutriContext.updateFaveClicked;
  const updateArrOfFavs = nutriContext.updateArrOfFavs;
  const updateFavePics = nutriContext.updateArrOfFavs;
  const [faveClicked, updateFaveClicked] = React.useState('false');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    if (faveClicked) {
      updateFaveClicked(false);
      updateArrOfFavs([...nutriContext.arrOfFavs, url]);
    } else {
      updateFaveClicked(true);
      nutriContext.arrOfFavs = nutriContext.arrOfFavs.filter(
        (site) => site !== url
      );
      updateArrOfFavs(nutriContext.arrOfFavs);
      // updateFavePics([...nutriContext.favePics, image])
    }
  };

  console.log(nutriContext.arrOfFavs);

  const sourceFrom = 'Source: ';
  const singleLabel = healthLabels.toString().split(',');
  const labels = singleLabel.map((label, index) => (
    <Stack direction='row' spacing={1} alignItems='flex-start'>
      <Chip
        label={label}
        component='a'
        href='#basic-chip'
        variant='outlined'
        clickable
      />
    </Stack>
  ));

  return (
    <div className='cardContainer'>
      <div className='viewCard'>
        <Card sx={{ maxWidth: 500 }} elevation={12}>
          <CardHeader
            avatar={
              <Avatar
                alt='Remy Sharp'
                src={img[Math.floor(Math.random() * img.length)]}
              />
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={name}
            subheader={[sourceFrom, source]}
          />
          <CardMedia
            component='img'
            height='280'
            image={image}
            alt='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Health Labels:
              <Stack
                direction='row'
                spacing={0.5}
                alignItems='flex-start'
                flexWrap='wrap'
              >
                {labels}
              </Stack>
              <br />
              Click <a href={url}> link</a> for recipe
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label='add to favorites'
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon color={faveClicked ? '' : 'red'} />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>Ingredients:</Typography>
              <Typography paragraph>
                {ingredients.map((item) => (
                  <span key={item}>
                    {item} <br />{' '}
                  </span>
                ))}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

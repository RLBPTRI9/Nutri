import * as React from 'react';
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

// x.name = ele.recipe.label;
// x.image = ele.recipe.image;
// x.url = ele.recipe.url;
// x.ingredients = ele.recipe.ingredientLines;
// x.cautions = ele.recipe.cautions;
// x.healthLabels = ele.recipe.healthLabels;

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
  const { name, image, healthLabels, url, ingredients } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const singleLabel = healthLabels.toString().split(',');
  const labels = singleLabel.map((label, index) => (
    <Stack direction='row' spacing={1} alignItems='flex-start'>
      {/* <Chip label={label} component="a" href="#basic-chip" clickable /> */}
      <Chip
        label={label}
        // size="small"
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
        <Card sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={name}
            subheader='September 14, 2016'
          />
          <CardMedia
            component='img'
            height='280'
            image={image}
            alt='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Tags:
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
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
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
              <Typography paragraph>{ingredients}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

import React, { useContext } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { translate } from '../services/lang/messages';
import { GoodsContext } from '../services/GoodsProvider';

const GoodsItem = ({ setOrder, poster, name, price, id, setSnackSeverity, setSnackBarText }) => {
  // const { setOrder } = useContext(GoodsContext);

  const { Hryvna, Price, Buy } = translate('Service');
  const { AddedToBasket } = translate('Message');


  const addItemToBasket = () => {
    setOrder({
      id: id,
      name: name,
      price: price,
    });
    setSnackBarText(AddedToBasket);
    setSnackSeverity('success');
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%' }}>
        <a href={poster} target="_blank" rel="noopener noreferrer">
          <CardMedia
            sx={{ height: 140 }}
            component="img"
            src={poster}
            title={name}
            alt={name}
          />
        </a>

        <Stack sx={{ height: '50%' }} justifyContent="space-between">
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {Price}: {price} {Hryvna}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              endIcon={<AddShoppingCartIcon/>}
              onClick={addItemToBasket}
            >
              {Buy}
            </Button>
          </CardActions>
        </Stack>
      </Card>
    </Grid>
  );
}

export default GoodsItem;

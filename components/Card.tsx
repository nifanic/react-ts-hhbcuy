import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { FC } from 'react';
import { Card as MuiCard } from '@mui/material';

import { Product } from '../types';

export const Card: FC<Product> = (props) => {
  const { title, description, image } = props;

  return (
    <MuiCard>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: '60px',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { css } from '@emotion/react';

import { Card, SearchBox, SearchBoxProps } from './components';
import { useFetchProducts } from './components/hooks';

import './style.css';

/**
Basic requirements: 

* Create a web application with apis from _https://fakestoreapi.com/docs_ (https://fakestoreapi.com/docs), it should be able to load all products from the server and render them as cards on the web page. 
* 1) Display at least title/description/image on each card.
* 2) Add a search input to help users find products easily. Filter results by title and description.
* 3) The app should be able to handle loading and error status and provide a good user experience. 
 */

export default function App() {
  const [search, setSearch] = React.useState<string>('');
  const [products, isLoading, isError] = useFetchProducts(search);

  const handleChange: SearchBoxProps['onChange'] = (e) => {
    setSearch(e);
  };

  if (isError) {
    return <div>Error occured while fetching products</div>;
  }

  return (
    <Container maxWidth="xl">
      <Grid item xs={12}>
        <h1>Hello StackBlitz!</h1>
        <SearchBox
          disabled={isLoading}
          onChange={handleChange}
          value={search}
        />
      </Grid>
      <Grid
        container
        spacing={4}
        css={css`
        padding: 2rem 0;
      `}
      >
        {isLoading ? (
          <Grid item xs={12}>
            <div>Loading...</div>
          </Grid>
        ) : (
          products.map((product) => (
            <Grid key={product.id} item xl={3} lg={4} sm={6} xs={12}>
              <Card {...product} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

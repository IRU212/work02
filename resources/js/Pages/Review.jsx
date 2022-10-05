import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Review() {
    return (
        <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
        </Stack>
      );
}

export default Review
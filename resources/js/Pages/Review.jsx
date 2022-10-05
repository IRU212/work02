import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styles from '../../css/content.module.scss'

function Review(props) {

    const review = props.review

    // reviewが6の場合は星の数が0
    if( review == 6 ){
        var reviewCount = 0
    } else {
        var reviewCount = review
    }

    return (
        <Stack spacing={1} className={styles.star}>
            <Rating name="half-rating-read" defaultValue={reviewCount} precision={0.5} readOnly />
        </Stack>
      );
}

export default Review
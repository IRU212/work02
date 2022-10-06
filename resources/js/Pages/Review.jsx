import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styles from '../../css/content.module.scss'

function Review(props) {

    const review = props.info

    // reviewが6の場合は星の数が0
    if( review == 6 ){
        var reviewCount = 0
    } else {
        var reviewCount = review
    }

    console.log(review)

    return (
        <div spacing={1} className={styles.star}>
            <span className={styles.starRating} data-rate={review}></span>
        </div>
      );
}

export default Review
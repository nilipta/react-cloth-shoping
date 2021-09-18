import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card, makeStyles, CardMedia, CardContent } from '@material-ui/core';

import car1 from '../../assets/images/car-1.jpg';
import car2 from '../../assets/images/car-2.jpg';
import car3 from '../../assets/images/car-3.jpg';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
}));

export default function Example(props)
{
    const classes = useStyles();
    const SLIDE_INFO = [
        { file: car1  },
        { file: car2 },
        { file: car3 },
    ];

    return (
        <Carousel>
            {
                SLIDE_INFO.map( (item, i) => (
                    <Card key={i} className={classes.root}>
                        <CardContent>
                        <CardMedia
                            className={classes.media}
                            image={item.file}
                        />
                        </CardContent>  
                    </Card>
                ) )
            }
        </Carousel>
    )
}
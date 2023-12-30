import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type CustomCardProps = {
    title: string;
    summary: string;
    techTags: string[];
};

export const CustomCard = ({ title, summary, techTags } : CustomCardProps) => {
    return (
        <Box sx={{ width: 400, margin: 2 }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {summary}
                    </Typography>
                    <Box sx={{ '& > :not(style)': { m: 0.5 } }}>
                        {techTags.map((tag, index) => (
                            <Chip key={index} label={tag} />
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

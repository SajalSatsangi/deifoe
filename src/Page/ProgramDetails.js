import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ProgramDetails = ({ title, specialization }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          Specializations: {specialization.join(', ')}
        </Typography>
        {/* Add more details as needed */}
      </CardContent>
    </Card>
  );
};

export default ProgramDetails;

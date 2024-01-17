import React from 'react';
import { makeStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProgramDetails from './ProgramDetails'; // Import ProgramDetails


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#800000',
    color: '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  nav: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(1),
  },
  container: {
    padding: theme.spacing(3),
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(1),
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
}));

const Programmes = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <img
            src="path/to/college-logo.png"
            alt="College Logo"
            style={{ maxHeight: '50px' }}
          />
          <Typography variant="h6">Faculty of Engineering, DEI</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <nav className={classes.nav}>
        <Typography variant="h6">
          <a href="#">Home</a>
        </Typography>
      </nav>
      <Container className={classes.container}>
        <Typography variant="h4">Programs Offered</Typography>

        <ProgramDetails
          title="B. Tech in Mechanical Engineering"
          specialization={['Core', 'Industrial Engineering', 'Computer Science Engineering']}
        />

        <ProgramDetails
          title="B. Tech in Electrical Engineering"
          specialization={['Core', 'Electronics Engineering', 'Computer Science Engineering']}
        />

        <ProgramDetails
          title="B. Tech in Civil Engineering"
          specialization={['Core', 'Computer Science Engineering']}
        />

        <ProgramDetails
          title="B. Tech in Footwear Engineering"
          specialization={['Core', 'Computer Science Engineering']}
        />

        <ProgramDetails
          title="Part Time B. Tech in Electrical Engineering"
        />

        <ProgramDetails
          title="B. Voc in AI and Robotics"
        />

        <ProgramDetails
          title="B. Voc in Renewable Energy"
        />

        <ProgramDetails
          title="B. Voc in IoT (Internet of Things)"
        />

        <ProgramDetails
          title="B. Voc in Waste Management"
        />

        <ProgramDetails
          title="M. Tech in Systems Engineering"
        />

        <ProgramDetails
          title="Part Time M. Tech in Systems Engineering"
        />

        <ProgramDetails
          title="PhD"
        />

      </Container>
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary">
          <p>Contact: admin@dei.ac.in</p><p>0562-2801545 or 0562-2801226</p><p>Address: Dayalbagh Educational Institute (Deemed to be University) Dayalbagh, Agra, Uttar Pradesh, 282 005 - INDIA</p>
        </Typography>
      </footer>
    </div>
  );
};

export default Programmes;

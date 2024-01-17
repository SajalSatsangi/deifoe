import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const theme = createTheme({
  palette: {
    primary: {
      main: '#800000', // Light maroon color
    },
  },
});


const Home = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    const tabRoutes = {
      1: '/programmes',
      2: '/departments',
      // Add routes for other tabs as needed
      default: '/',
    };
  
    const selectedRoute = tabRoutes[newValue] || tabRoutes.default;
    setTabValue(newValue);
    navigate(selectedRoute);
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        {/* Logo and Title in one line */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://images.collegedunia.com/public/college_data/images/logos/1394441747Dayalbagh%20Educational%20Institute.png"
            alt="University Logo"
            style={{ width: '100px', height: '100px' }}
          />
          <Typography sx={{ position: 'absolute', left: 300 }} variant="h3" component="h1" gutterBottom>
            Welcome to Faculty of Engineering, DEI
          </Typography>
        </div>

        {/* Horizontal Navbar for Admissions, Academics, and Research Papers */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Home" />
          <Tab label="Programmes" />
          <Tab label="Departments" />
          <Tab label="Faculty & Staff" />
          <Tab label="Achievements" />
          <Tab label="Research Papers" />
          <Tab label="Training & Placement" />
          <Tab label="DEI FoE_Main" />
          <Tab label="My Dashboard" />
        </Tabs>

        <img
          src="https://www.dei.ac.in/dei/engineering/images/header.jpg"
          alt="University Banner"
          style={{ width: '100%', height: 'auto' }}
        />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img
              src='https://pbs.twimg.com/media/F7dEa3uWMAAuOwi.jpg' // Replace with the actual URL of the founder's photo
              alt="Founder of the College"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <i>Faculty of Engineering, Dayalbagh Educational Institute, which is widely recognized as one of the most prestigious engineering institutions of India, was founded by His Holiness Param Guru Huzur Mehtaji Maharaj in 1950 as Dayalbagh Engineering College in response to the country's needs for trained technical manpower. It became a part of the Dayalbagh Educational Institute (Deemed University) in the year 1981.The Faculty has held aloft the beacon of knowledge, research and education in the field of engineering throughout its existence. It’s innovative and comprehensive scheme of education aims at excellence but not at the cost of relevance, encourages initiative and creative work, which is inter-disciplinary and which prepares the student for the increasingly techno-oriented society of tomorrow. The mission objective of the value oriented educational system is to evolve a ‘Complete Man’, i.e., a well rounded person whose hallmarks are intellectual strength, emotional maturity, truthfulness, general awareness, devotion to duty, high moral character, simple living, scientific temperament and societal commitment.</i>
            <Typography variant="h5" component="h2" gutterBottom>
              Message by His Holiness Param Guru Huzur Mehtaji Maharaj, Founder
            </Typography>
            <Typography>
              Be an early riser and be economical, industrious, truthful, kind and considerate, a good citizen and a true Bhakta of Huzur Ra-dha-sva-aa-mi Dayal.

              If you want to eat you must sweat first. If you want self - government you must learn to govern yourself first. If you want to deserve anything you must learn to serve others.

              Waste nothing has been an important principle of my life. I have always advised men and women, young and old alike, to see that they do not waste their time, energy, thought, wealth, food, clothing, in short anything by possess lest they find themselves in want of them at the time of need. I also consider waste as nothing short of sin.

              A community which wishes to go ahead with its work must remain united in purpose, thought and action.

              It must also conserve all its resources of men, money and materials and exercise forethought and arrange for fulfillment of its aims in good time.

              This can be possible only if every member of the community contributes his or her best effort towards the attainment of the community's ideal.

              Discipline, self-sacrifice and hard sustained work are not only very helpful in this endeavor  but are very essential.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Faculty Highlights
                </Typography>
                <Typography>
                  - Recognized by AICTE and UGC. Government funded.
                </Typography>
                <Typography>
                  - International Collaboration.
                </Typography>
                <Typography>
                  - R&D projects sponsored by AICTE, DST, UGC.
                </Typography>
                <Typography>
                  - Nearly 100% student placement.
                </Typography>
                <Typography>
                  - Highly qualified, experienced and dedicated Faculty. High staff to student ratio (1:2.5).
                </Typography>
                <Typography>
                  - Low fee. No Capitation Fee.
                </Typography>
                <Typography>
                  - Excellent performance in GATE every year.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Dean - Prof. C Patvardhan
                </Typography>
                <Typography>
                  Educational Qualification - B. Sc. (Mech. Engg.), M. E. (CS), Ph.D.
                </Typography>
                <Typography>
                  Area of Specialization - Soft Computing, Quantum Computing and Image Processing
                </Typography>
                <Typography>
                  CONTACT-
                </Typography>
                <Typography>
                  Department of Electrical Engineering,
                  Faculty of Engineering, DEI,
                  Dayalbagh, Agra 282 005 (UP), India
                </Typography>
                <Typography>
                  Tel: 0562-6548399
                </Typography>
                <Typography>
                  Email:  cpatvardhan@googlemail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div
          style={{
            background: '#800000', // Light maroon color
            color: 'white',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <Typography variant="body1">
            Duty Beauty Humility Loyalty Temperance Courage Justice Wisdom
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Home;

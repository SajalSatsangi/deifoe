import React from 'react';
import Slider from 'react-slick';
import { CardMedia, makeStyles } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const useStyles = makeStyles((theme) => ({
  departmentsPage: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  departmentCard: {
    maxWidth: 400,
    margin: 'auto',
  },
  departmentImage: {
    height: 200,
  },
  hodDetails: {
    marginTop: theme.spacing(2),
  },
}));

const departmentsData = [
  {
    name: 'Mechanical Engineering',
    image: 'https://img.freepik.com/premium-photo/driving-sprockets-chain-engineering-drawings-industrial-parts-mechanisms_113913-664.jpg',
    description: 'Embark on an exhilarating journey into the realm of Mechanical Engineering at our esteemed university. Here, we ignite the spark of innovation and creativity, shaping future leaders in the world of machinery, energy systems, robotics, and beyond. Our distinguished faculty, cutting-edge research facilities, and hands-on approach to learning will empower you to engineer solutions that transcend boundaries. Join us in unraveling the complexities of mechanical systems, where your passion meets purpose, and every challenge becomes an opportunity for growth. Explore the dynamic world of Mechanical Engineering with us and lay the foundation for a career that drives progress and shapes the future.',
    hod: {
      name: 'Prof R Caprihan'
    },
  },
  {
    name: 'Electrical Engineering',
    image: 'https://e0.pxfuel.com/wallpapers/508/527/desktop-wallpaper-electronics-sector-national-skill-india-mission-electrical-engineering.jpg',
    description: 'Step into the electrifying world of Electrical Engineering at our prestigious university. Unleash your potential to innovate and illuminate as you delve into the intricate web of electrical systems, electronics, and cutting-edge technologies. Our faculty, renowned for their expertise, will guide you through a transformative academic journey, equipping you with the skills to power the future. From renewable energy solutions to advanced electronics, our curriculum is designed to challenge and inspire. Embrace the opportunity to be at the forefront of technological advancements and embark on a journey where your ideas light up the world. Join us in the exciting realm of Electrical Engineering, where innovation meets excellence, and together, we illuminate possibilities.',
    hod: {
      name: 'Prof C Patwardhan'
    },
  },
  {
    name: 'Civil Engineering',
    image: 'https://wallpapercave.com/wp/wp2063103.jpg',
    description: 'Embark on a transformative academic voyage in Civil Engineering at our distinguished university. Discover the art and science of shaping the world around us through the meticulous design, construction, and maintenance of infrastructure. Our world-class faculty, renowned for their expertise, will guide you in mastering the principles that underpin structures, transportation systems, and environmental sustainability. Engage in hands-on projects, gain practical experience, and be part of a community that builds the future. From skyscrapers to sustainable urban planning, our program offers a comprehensive exploration of the vast possibilities within Civil Engineering. Join us on this exciting journey where you will not only construct structures but also shape the foundations of progress and resilience.',
  },
  {
    name: 'Agriculture Engineering',
    image: 'https://pngtree.com/freebackground/agricultural-science-and-technology-green-synthetic-plant-background_1473355.html',
    description: 'Embark on a green revolution by choosing Agricultural Engineering at our esteemed university. Explore the dynamic intersection of technology and agriculture, where innovation meets the demands of a growing world. Our faculty, distinguished for their expertise, will guide you through the complexities of sustainable farming, precision agriculture, and bio-systems engineering. Immerse yourself in hands-on projects and cutting-edge research that address global challenges in food production and environmental conservation. Join a community dedicated to cultivating solutions for a sustainable future. Choose Agricultural Engineering with us, where your passion for the land converges with technology, and together, we cultivate a brighter, more resilient world.',
  },
  {
    name: 'Footwear Engineering',
    image: 'https://sapplmbycideon.files.wordpress.com/2017/06/shoe-engineering-hellenbeck-design.jpg',
    description: 'Step into the exciting world of Footwear Design and Engineering at our university, where creativity and craftsmanship meet innovation. Immerse yourself in the art and science of creating functional, stylish, and comfortable footwear. Our industry-experienced faculty will guide you through the intricacies of materials, ergonomics, and design aesthetics, preparing you for a dynamic career at the intersection of fashion and technology. Engage in hands-on projects, collaborate with industry leaders, and unlock your potential to leave a lasting imprint on the global footwear landscape. Choose our program to stride confidently into the future of footwear design, where every step you take is a testament to your creativity and technical prowess.',
  },
  // Add more departments as needed
];

const DepartmentCard = ({ department }) => {
  const classes = useStyles();

  return (
    <Card className={classes.departmentCard}>
      <CardMedia
        component="img"
        alt={department.name}
        height="200"
        image={department.image}
        className={classes.departmentImage}
      />
      <CardContent>
        <Typography variant="h6">{department.name}</Typography>
        <Typography variant="body2">{department.description}</Typography>
        <div className={classes.hodDetails}>
          <Typography variant="subtitle1">HOD: {department.hod.name}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

const Departments = () => {
  const classes = useStyles();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container className={classes.departmentsPage}>
      <Typography variant="h4" gutterBottom>
        Departments
      </Typography>
      <Slider {...sliderSettings}>
        {departmentsData.map((department, index) => (
          <DepartmentCard key={index} department={department} />
        ))}
      </Slider>
    </Container>
  );
};

export default Departments;

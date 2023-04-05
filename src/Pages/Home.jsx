import React from 'react';
//import Button from '@mui/material/Button';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h1>Im the Home.</h1>
            {/*<Button variant="contained">Primary Button</Button>*/}
            <Button as="a" variant="primary" target="_blank" href="https://www.youtube.com/watch?v=NuGFGvX4wAQ">
                Ver video.
            </Button>
            <p>https://modo-online.netlify.app/</p>
        </div>
    );
}

export { Home };
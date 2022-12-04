import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';

import TvIcon from '@mui/icons-material/Tv';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        //in footer navbar of materail ui 1st gives valueas 0 second as 1 as so on , on the basis of that values we are chaning the routes
        
        // console.log(value);
       if (value === 0) navigate('/');
       else if (value === 1) navigate('/movies');
        
       else if (value === 2) navigate('/series');
        
       else if (value === 3) navigate('/search');
        
    
   }, [value,navigate])
   
    return (
        <Box 
            sx={{
            width: '100%', 
            position: "fixed",
            bottom: 0,
            backgroundColor:"black",
            zIndex: 100,
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    style={{color:"black"}} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction
                    style={{ color: "black" }} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction
                    style={{ color: "black" }} label="Tv Series" icon={<TvIcon />} />
                
                <BottomNavigationAction
                    style={{ color: "black" }} label="Search" icon={<SearchIcon />} />

                

            </BottomNavigation>
        </Box>
    );
}
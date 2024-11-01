import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { CarCrash, Home, } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import {  Divider, Typography } from '@mui/material';


const demoTheme = createTheme({


    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',

    },
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: 'white',
                    paper: '#C0C0C0	',
                },
                divider: '#4169E1',
                
            },
        },
        dark: {
            palette: {
                background: {
                    default: '#2A4364',
                    paper: 'parpe',
                },
            },
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DemoPageContent() {

    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >

            <Outlet />


        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function Layout(props) {
    const { window } = props;

    const router = useDemoRouter('/home');

    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
            branding={{

                logo: <img src="/public/wallpaperflare.com_wallpaper (6).jpg" alt="MUI logo" style={{ borderRadius: "50%",}} />,
                title: 'Moemen',

            }}

            navigation={[
                
                {

                    segment: 'home',
                    title: (<Typography sx={{ color: '#0D6EFD', fontSize:"20px",'&:hover':{color:'green'} }}>Home</Typography>),
                    icon: <Home className='text-primary' sx={{ fontSize: '30px', }} />,

                },
                {
                    kind: 'divider',
                    element: <Divider sx={{height:"2px",color:"darkgrey"}}/>
                },
                {
                    segment: "about",
                    title:  (<Typography sx={{ color: '#0D6EFD', fontSize:"20px",'&:hover':{color:'green'} }}>About US</Typography>),
                    icon: <DescriptionIcon className='text-primary' sx={{ fontSize: '30px', }} />,

                },
                {
                    kind: 'divider',

                },
                {
                    segment: 'products',
                    title: (<Typography sx={{ color: '#0D6EFD', fontSize:"20px",'&:hover':{color:'green'} }}>Products</Typography>),
                    icon: <CarCrash className='text-primary' sx={{ fontSize: '30px', }}/>,

                },
                {
                    kind: 'divider',
                },
                {
                    segment: 'productDitails',
                    title: (<Typography sx={{ color: '#0D6EFD', fontSize:"20px",'&:hover':{color:'green'} }}>Product Ditails</Typography>),
                    icon: <CarCrash className='text-primary' sx={{ fontSize: '30px', }}/>,

                },

            ]}

            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>

        </AppProvider>
    );
}

Layout.propTypes = {
    window: PropTypes.func,
};

export default Layout;

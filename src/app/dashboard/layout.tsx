'use client'
import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { supabase } from '@/utils/supabaseClient';
import {
  AppBar,
  ClickAwayListener,
  IconButton,
  Paper,
  Slide,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SideBar from '../../components/SideBar'
import { useRouter } from 'next/navigation';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState({})
  const router = useRouter()
  
  const handleClickSideBar = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session)
      
      if (!session) router.replace('/')
      
    }) 
    return () => {

    }
  }, [])


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Slide direction='right' in={isMenuOpen} unmountOnExit mountOnEnter>
          <div>
            <ClickAwayListener onClickAway={handleClickSideBar}>
              <Paper
                elevation={2}
                sx={{
                  height: '100%',
                  width: '75%',
                  zIndex: '1200',
                  position: 'absolute',
                  top: 0,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 2
                }}
              >
                <IconButton
                  onClick={handleClickSideBar}
                  sx={{ alignSelf: 'end' }}
                  size='large'
                  edge='end'
                  aria-label='close'
                >
                  <CloseIcon />
                </IconButton>
                <SideBar />
              </Paper>
            </ClickAwayListener>
          </div>
        </Slide>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              onClick={handleClickSideBar}
              size='large'
              edge='start'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='h2'>
              Pran APP
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
        </CssBaseline>
      </ThemeProvider>
  )
}

export default DashboardLayout

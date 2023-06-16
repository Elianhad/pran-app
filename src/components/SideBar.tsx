import {
  Box,
  ListItem,
  Divider,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Button,
  colors
} from '@mui/material'
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ArchiveIcon from '@mui/icons-material/Archive';

const SideBar = () => {

  return (
    <Box sx={{ width: '100%' }}>
      <nav aria-label='main folders'>
        <List>
          <ListItem color='primary' sx={{textAlign: 'center'}}>email</ListItem>
          <ListItem disablePadding >
            <ListItemIcon>
              <NoteAltIcon/>
            </ListItemIcon>
            <ListItemButton>
              <ListItemText primary='Protocolos' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label='secondary folders'>
        <List>
          <ListItem disablePadding >
            <ListItemIcon>
              <ArchiveIcon/>
            </ListItemIcon>
            <ListItemButton>
              <ListItemText primary='Archivados' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Button variant='outlined' sx={{margin:'1rem auto', display:'block'}}>Cerrar sesión</Button>
    </Box>
  )
}

export default SideBar

'use client'
import { useState } from 'react'
import { Card, CardContent, Typography, CardActions, Button, IconButton, CardHeader, CardMedia, Collapse } from '@mui/material'
import { styled } from '@mui/material/styles'
import {type IconButtonProps} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


interface ExpandMoreProps extends IconButtonProps {
  expand:boolean
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  })
}))

const CardProtocolos = () => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandedElement = () => {
    setExpanded(!expanded)
  }


  return (
    <Card sx={{ minWidth: 275, p: 2 }}>
      <CardHeader
        title='Nombre de paciente'
        subheader='Fecha de cirugía'
      />
      <CardMedia
        component='img'
        height='194'
        image='./'
        alt='nombre protocolo'
      />
      
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Algun dato
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandedElement}
          aria-expanded={expanded}
          aria-label='Mas info'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit >
        <CardContent>
          <Typography component='p'>Mas información</Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined'>Editar</Button>
          <Button variant='outlined'>Archivar</Button>
        </CardActions>
      </Collapse>
    </Card>
  )
}

export default CardProtocolos
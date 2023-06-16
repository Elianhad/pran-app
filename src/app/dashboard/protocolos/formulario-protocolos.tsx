
import {
  TextField,
  Container,
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
  FormGroup,
  Checkbox,
  FormLabel,
  Button, IconButton
} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Formulario.css'

const FormularioProtocolo = () => {
  
  return (
    <Container>
      <IconButton
        sx={{ m: 2, display: 'flex' }}
      > 
        <ArrowBackIosIcon sx={{justifySelf: 'center', alignSelf: 'center'}}/>
      </IconButton>
      <form method='post'>
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <TextField
            label='Nombre del paciente'
            id='namePacient'
            name='namePacient'
            required
          />
          <TextField
            label='Tipo de cirugía'
            id='typeOfSurgey'
            name='typeOfSurgey'
          />
          <FormGroup sx={{ m: 2 }}>
            <div className='div-form-checkbox'>
              <FormLabel htmlFor='isBackToQ'>
                ¿Hubo retorno a quirófano?
              </FormLabel>
              <Checkbox id='isBackToQ' name='isBackToQ' />
            </div>
            <div className='div-form-checkbox'>
              <FormLabel htmlFor='isDelivered'>
                ¿Fue entregado a sociedad?
              </FormLabel>
              <Checkbox id='isDelivered' name='isDelivered' />
            </div>
          </FormGroup>
          <FormControl variant='outlined'>
            <FormHelperText focused>Fecha de cirugía</FormHelperText>
            <OutlinedInput
              type='date'
              id='fechaCirugía'
              required
              name='dateOfSurgey'
            />
          </FormControl>
          <Box
            component='div'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 2
            }}
          >
            <label htmlFor='captureImg'>Foto</label>
            <input
              type='file'
              accept='image/*'
              capture='user'
              name='captureImg'
              id='captureImg'
              required
            />
          </Box>
          <FormControl variant='outlined'>
            <FormHelperText focused>Fecha de cobro</FormHelperText>
            <OutlinedInput
              type='date'
              id='fechaDeCobro'
              required
              name='dateOfPayment'
            />
          </FormControl>
          <Button type='submit' variant='outlined' sx={{mt: 4, mb: 4}}>
            Aceptar
          </Button>
        </Box>
      </form>
    </Container>
  )
}

export default FormularioProtocolo

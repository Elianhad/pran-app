'use client'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './database.types'
import {
  Paper,
  Input,
  Box,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  Typography,
  Alert
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'

export default function AuthForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  
  const handleSubmitLogin = async(event:FormEvent) => {
    event.preventDefault()
    setError(false)
    const { data: user, error } = await supabase.auth.signInWithPassword({ email, password})
    console.log({'submit': 'login','user': user, 'error': error})
    if (error) {
      setError(true)
      return
    }
    router.refresh()
    return router.replace('/dashboard')
  }

  return (
    <Paper
      sx={{
        height: '100vh',
        display: 'grid',
        placeContent: 'center',
        weight: '100%'
      }}
    >
      <form 
        onSubmit={handleSubmitLogin}
      >
        <Box display='grid' rowGap={4}>
          <Typography
            variant='h4'
            component='h1'
            align='center'
            marginBottom={3}
          >
            Iniciar sesión
          </Typography>
          <FormControl variant='standard'>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
              startAdornment={
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant='standard'>
            <InputLabel htmlFor='password'>Contraseña</InputLabel>
            <Input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button variant='outlined' type='submit' >
            Aceptar
          </Button>
        </Box>
      </form>
      { error &&
        <Alert severity='error' sx={{ marginTop: '1rem' }}>
          Hubo un error. Revisa tu email y contraseña.
        </Alert>
      }
    </Paper>
  )
}
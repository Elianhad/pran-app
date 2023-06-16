import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AuthForm from './auth-form'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: session } = await supabase.auth.getSession()
  console.log(session)
  if (session.session) {
    redirect('/dashboard')
  }

  return (
    <div className='col-6 auth-widget'>
      <AuthForm />
    </div>
  )
}

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import CardProtocolos from '@/components/CardProtocolos';
import { redirect } from 'next/navigation';


export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data: session } = await supabase.auth.getSession()
  if (!session.session) {
    redirect('/')
  }
  const { data, error } = await supabase.from('protocolo').select()
  return (
    <div>
      <CardProtocolos />  
    </div>
  )
}
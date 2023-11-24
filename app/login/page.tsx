'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'

export default function LoginPage() {
  const { route } = useAuthenticator((context) => [context.route])
  const router = useRouter()

  useEffect(() => {
    if (route === 'authenticated') {
      router.push('/')
    }
  }, [route, router])

  return (
    <div className="flex justify-center min-h-screen">
      <Authenticator></Authenticator>
    </div>
  )
}

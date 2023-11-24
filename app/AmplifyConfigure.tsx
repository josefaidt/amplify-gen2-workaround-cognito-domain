'use client'
import type { PropsWithChildren } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import config from '@/amplifyconfiguration.json'

Amplify.configure(
  {
    ...config,
    // @ts-expect-error I know this should exist
    oauth: {
      // this is my Cognito Domain
      domain: '20231124-hostedui-josefai.auth.us-east-1.amazoncognito.com',
      scope: [
        'phone',
        'email',
        'openid',
        'profile',
        'aws.cognito.signin.user.admin',
      ],
      // this is one of my callbackUrls
      redirectSignIn: 'http://localhost:3000',
      // this is one of my logoutUrls
      redirectSignOut: 'http://localhost:3000/login',
      responseType: 'code', // or token
    },
    aws_cognito_social_providers: ['AMAZON'],
  },
  { ssr: true }
)

export function AmplifyConfigure({ children }: PropsWithChildren) {
  return <Authenticator.Provider>{children}</Authenticator.Provider>
}

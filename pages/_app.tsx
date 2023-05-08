import LoadingComponent from '@/components/loading/LoadingComponent'
import AppNavbar from '@/components/navbar/AppNavbar'
import { LanguageService } from '@/services/context/LanguageService'
import WorkourProgramService from '@/services/context/WorkoutProgramService'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head >
      <meta name="description" content="Calisthenics cycle training workout app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#f5cb5c" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <LanguageService>
      <AppNavbar />
      <div className='container'>
        <WorkourProgramService>
          <Component {...pageProps} />
          <LoadingComponent />
        </WorkourProgramService>
      </div>
    </LanguageService>
  </>
}

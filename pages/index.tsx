import Head from 'next/head'
import { LanguageCtst } from '@/services/context/LanguageService'
import React from 'react'
import { appRoutes } from '@/services/appRoutes'
import Link from 'next/link'
import CostumBtn, { CostumBtnI } from '@/components/costum-button/CostumBtn'
import PageTitle from '@/components/titles/PageTitle'
import PageSubtitle from '@/components/titles/PageSubtitle'


export default function Home() {
  const {language} = React.useContext(LanguageCtst);
  const headTitle = language.homeScreen.title.map(s => s.txt).join(' ');
  const btns:CostumBtnI[] = [
    {
      side: 'btn-left', 
      txt: language.homeScreen.actionBtns[0], 
      theme: "secondary",
      link: appRoutes.plansScreen
    },
    {
      side: 'btn-right', 
      txt: language.homeScreen.actionBtns[1], 
      theme: "dark",
      link: appRoutes.about
    }
  ]
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name='description' content={language.homeScreen.subtitle}></meta>
      </Head>
      <main>
      <div className='py-3 mt-4 screen'>

        <PageTitle title={language.homeScreen.title}
          direction={language.direction} />

        <PageSubtitle subtitle={language.homeScreen.subtitle}
        direction={language.direction}  />

        <div 
          className='d-flex justify-content-center my-4 px-auto  mt-5'>
          
          {btns.map((btn, idx) => 
            <div 
              className='col-sm-4 col-md-3 mt-2 px-1'
              key={btn.txt + idx}>

                <Link href={btn.link!}>
                  <CostumBtn 
                    side={btn.side}
                    txt={btn.txt} 
                    theme={btn.theme} />
                </Link>
            </div>)}

          </div>
        </div>
      </main>
    </>
  )
}

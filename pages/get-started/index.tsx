import React from 'react'
import PageSubtitle from '../../components/titles/PageSubtitle';
import PageTitle from '../../components/titles/PageTitle';
import { LanguageCtst } from '@/services/context/LanguageService';
import UserPlan from '@/components/user-plan/UserPlan';
import { appRoutes } from '@/services/appRoutes';
import Head from 'next/head';


const GetStarted = () => {
  const {language: {
    direction,
    plansScreen }} = React.useContext(LanguageCtst);
  const headTitle = plansScreen.title.map(s => s.txt).join(' ');

  return (
    <>
    <Head>
      <title>{headTitle}</title>
      <meta name='description' content={plansScreen.subtitle}></meta>
    </Head>
    <div className='screen py-3 mt-4'>
      <div style={{direction: direction === 'rtl'? 'rtl':'ltr'}}>
        <PageTitle title={plansScreen.title} />
        <PageSubtitle subtitle={plansScreen.subtitle} 
        direction={direction}/>
      </div>
      <div className='row'>
          {plansScreen.plans.map((p, idx) => 
            <div className='col-md-6 col-lg-4 mt-4' key={'user-plan-'+ idx}>
              <UserPlan
                unavailable={plansScreen.unavailable}
                freePlanName={plansScreen.plans[0].name}
                primiumPlanName={plansScreen.plans[1].name}
                goTo={appRoutes.chooseProgramScreen} 
                joinBtnTxt={plansScreen.joinBtn}
                {...p}/>
            </div>
          )}
      </div>
    </div>
    </>
  )
}

export default GetStarted
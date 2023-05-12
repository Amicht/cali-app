import CostumBtn from '@/components/costum-button/CostumBtn';
import PageSubtitle from '@/components/titles/PageSubtitle';
import PageTitle from '@/components/titles/PageTitle';
import { LanguageCtst } from '@/services/context/LanguageService';
import { useRouter } from 'next/router'
import React from 'react'

const Page404 = () => {
    const router = useRouter();
    const {language} = React.useContext(LanguageCtst);
    const redirectToHomePage = () =>{
        router.push('/');
    }
    const title = [
      { txt: language.language === 'עברית'? 'שגיאה': 'ERROR', 
        ishighlighted: false },
      { txt: ' 404', 
        ishighlighted: true },
    ]

    const paragraph = language.language === 'עברית'? 'אופס... משהו השתבש': 'Oops... something went wrong';
    const btnText = language.language === 'עברית'? 'חזור לדף הבית': 'Back to home page';
  return (
    <div className='text-center mt-4 col-12 text-light py-3'>
      <PageTitle 
        title={title} 
        direction={language.direction}/> 
      <PageSubtitle 
        subtitle={paragraph} 
        direction={language.direction}/>
      <div 
        style={{width:'fit-content'}} 
        className='mx-auto pt-3'
        onClick={redirectToHomePage}>
        <CostumBtn 
          side={'btn-right'}
          txt={btnText} 
          theme={"secondary"} />
      </div>
    </div>
  )
}

export default Page404
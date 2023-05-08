import React from 'react'
import PageSubtitle from '../../components/titles/PageSubtitle';
import PageTitle from '../../components/titles/PageTitle';
import { LanguageCtst } from '@/services/context/LanguageService';


const About = () => {
    const {language} = React.useContext(LanguageCtst);
    const {paragraphs,subtitle,title} = language.about;
  return (
    <div className='screen my-5'
        style={{direction: language.direction==='rtl'? 'rtl':'ltr'}}>
        <PageTitle title={title}/>
        <PageSubtitle subtitle={subtitle}/>
        {paragraphs.map((p) => 
        <div 
          key={p.title} 
          className='pt-4 mt-5'>
            <h4 className='py-2'>{p.title}</h4>
            <p>{p.content}</p>
        </div>)}
    </div>
  )
}

export default About
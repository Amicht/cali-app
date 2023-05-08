import { BsCheck2Circle } from "react-icons/bs";
import React from "react";
import { Badge } from "react-bootstrap";
import { LanCtxt, LanguageCtst } from "@/services/context/LanguageService";
import Link from "next/link";
import CostumBtn from "../costum-button/CostumBtn";


interface Props{
    price: number;
    name: string;
    features: string[];
    goTo: string,
    freePlanName: string,
    primiumPlanName: string;
    joinBtnTxt:string;
    isAvailable:boolean;
    unavailable: string;
}

const UserPlan = (props:Props) => {
  const {language} = React.useContext<LanCtxt >(LanguageCtst)

    
  return (
    <div className={`
      ${props.name===props.primiumPlanName?'user-plan-card-premium':'user-plan-card'}
      ${!props.isAvailable?' ':''}
      `}>
       
        {!props.isAvailable? 
          <h1 className={`unavailable-badge `}>
            <Badge className="text-success"  bg="light" >{props.unavailable}</Badge>
          </h1>
        :null}
        <div 
          className='container text-start mx-2 px-5 mt-5 '>


            <h2 className='fs-6 mt-4'>{props.name}</h2>
            <h3 className='fs-1 fw-bold mt-4'>${props.price}</h3>
            <ul 
              className={`mt-4 ${{direction: language.direction === 'ltr'?'text-start':'text-end'}}`}>
                {props.features.map((f,idx) => 
                  <li 
                    className={`${props.name!==props.primiumPlanName? 
                      'text-secondary':
                      'text-light'}`} key={idx}>
                        <BsCheck2Circle/>  
                        <span className="text-light"> {f}</span>
                  </li>)}
            </ul>
            <div className='row my-4 mx-1 mt-5'>
              {props.name === props.freePlanName ?
              <Link href={props.goTo} className="px-0">
                <CostumBtn txt={props.joinBtnTxt} theme="dark" />
              </Link>
              :<></>}
            </div>
        </div>
    </div>
  )
}

export default UserPlan
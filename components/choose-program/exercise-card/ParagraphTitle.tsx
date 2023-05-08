

const ParagraphTitle = (props:{titleName:string, content:string}) => {
  return (<>
    <h3 className='fw-bold fs-5 text-secondary mt-3'>
        {props.titleName}
    </h3>
    <h4 className={props.titleName === "instructions"? "text-start fs-6":"fs-6"}>{props.content}</h4>
  </>
  )
}

export default ParagraphTitle
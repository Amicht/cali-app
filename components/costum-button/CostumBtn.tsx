
export interface CostumBtnI{
  txt:string,
  theme: "light" | "dark" | "secondary" ,
  disabled?: boolean,
  side?: 'btn-left' | 'btn-right' | string,
  link?:string
}

const CostumBtn = ({txt, side, theme, disabled}:CostumBtnI) => {

  const classes = {
    light: "costum-light-btn",
    secondary: "costum-secondary-btn",
    dark: "costum-dark-btn",
    disabled: 'disabled-btn'
  }

  return (
    <button className={`costum-btn 
      ${classes[theme]} ${side}
      ${disabled? classes.disabled: ""} py-2 px-3`}>
      {disabled?'':txt}
    </button>
  )
}


export default CostumBtn
import style from './Heading.module.css';


export const Heading = (props) => {
  return (  

    <h2 className={style.heading}>{props.text}</h2>
  )

}
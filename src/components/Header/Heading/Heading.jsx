import style from './Heading.module.css';

const text = {
  content: "Главная",
}

export const Heading = (props) => {
  return (  

    <h2 className={style.heading}>{props.text}</h2>
  )

}
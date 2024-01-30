import style from './title.module.css';

const Title = props => {
	return <h1 className={style[props.class]}>{props.text}</h1>;
};
export default Title;

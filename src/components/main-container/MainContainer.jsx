import style from './main-container.module.css';

const MainContainer = props => {
	return <div className={style.container}>{props.children}</div>;
};
export default MainContainer;

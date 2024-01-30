import style from './main-wrapper.module.css';

const MainWrapper = props => {
	return <div className={style.wrapper}>{props.children}</div>;
};

export default MainWrapper;

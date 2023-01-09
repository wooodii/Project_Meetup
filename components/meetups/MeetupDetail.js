import classes from './MeetupDetail.module.css';
//ImageBitmapRenderingContext
function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
        <img src={props.image} alt={props.title}></img>
        <h1>{props.title}</h1>
        <adress>{props.adress}</adress>
        <p>{props.description}</p>
        </section>
    )

}

export default MeetupDetail
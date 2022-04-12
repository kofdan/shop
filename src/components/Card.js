import { Button } from '@mui/material';



function Card(props){
    return (
        <>
        <div className="cardWrapper">
            <img src={props.imgPath} alt={props.title} />
            <h3>{props.title}</h3>
            <p>Стоимость: {props.price}</p>
            <Button variant='contained' name={props.id}>Купить:</Button>
        </div>
        </>
    )
}

export default Card;
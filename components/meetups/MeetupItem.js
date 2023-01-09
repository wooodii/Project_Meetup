import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from 'next/router';
import Image from "next/image";

function MeetupItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push('/' + props.id) // 새 페이지를 페이지 더미에 연결
    // Link를 사용하지 않고도 페이지에  props로 주소값을 받아오면서 프로그래밍 방식으로 연결가능 
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

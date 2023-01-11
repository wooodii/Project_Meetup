import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}> 스케줄링</div>
      <nav>
        <ul>
          <li>
            <Link href='/new-meetup'>모든 스케줄</Link>
          </li>
          <li>
            <Link href='/new-meetup'>스케줄 추가</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

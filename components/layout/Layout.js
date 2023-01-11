import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <main className={classes.main}>
      <MainNavigation />
        {props.children}
      </main>
    </div>
  );
}

export default Layout;

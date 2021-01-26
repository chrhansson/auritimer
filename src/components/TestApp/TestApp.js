import styles from './testAppStyle';
import { makeStyles } from "@material-ui/core/styles";

const TestApp = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <div className={classes.app}>
          <header >
                This is the component called "test"
          </header>
        </div>
      );
}


export default TestApp;

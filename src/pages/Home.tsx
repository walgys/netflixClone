import { makeStyles } from '@material-ui/core';

const Home: React.FC<{}> = () => {
  const classes = useStyles();
  return <div>Home</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Home;

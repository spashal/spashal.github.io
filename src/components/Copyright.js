import Typography from "material-ui/styles/typography";
import { Link } from "react-router-dom";


export default function Copyright() {
    return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
        Palash Sharma
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}
    
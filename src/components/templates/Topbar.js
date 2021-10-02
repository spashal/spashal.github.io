import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function TopBar(props) {
  const [pageIsIntro, setPage] = React.useState(true);
  React.useEffect(() => {
    if(props.blog)
      setPage(false);
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation="0" style={{marginBottom: 'auto'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Palash Sharma
          </Typography>
          <Button color="inherit">
            {pageIsIntro ? "About Me":"My Blog"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

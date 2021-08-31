import React from 'react'
import  './header.css';
import { useStyles } from './style';
import { useLocalContext } from "../../context/context";
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import {
    AppBar,
    Avatar,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    
  } from "@material-ui/core";
  import { Add, Apps } from "@material-ui/icons";
import CreateClass from '../CreateClass/CreateClass';
import JoinClass from '../JoinClass/JoinClass';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';


const Header = ({children}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const {
      setCreateClassDialog,
      setJoinClassDialog,
      loggedInUser,
      logout,
     
    } = useLocalContext();

    const handleCreate = () => {
      handleClose();
      setCreateClassDialog(true);
    };
  
    const handleJoin = () => {
      handleClose();
      setJoinClassDialog(true);
    };
    return (
      
        <div className={classes.root}>
             <AppBar className={classes.appBar} position="static">
             <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
          {children}
          <img src="https://images.cooltext.com/5549130.png" width="200" height="50" alt="E-Learning" />

            <Typography variant="h6" className={classes.title}>
              Classroom
            </Typography>

</div>

<div className={classes.header__wrapper__right}>
<QueueOutlinedIcon onClick={handleClick} className={classes.icon} />

            <Apps className={classes.icon} />
            <DnsOutlinedIcon className={classes.icon}/>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
               <MenuItem onClick={handleJoin} >Join Class</MenuItem>
               <MenuItem onClick={handleCreate}>Create Class</MenuItem>
            </Menu>
            <div>
              <Avatar onClick={() => logout()} src={loggedInUser?.photoURL} className={classes.icon}
               
              />
            </div>
            </div>
</Toolbar>
</AppBar>
<CreateClass/>
            <JoinClass/>
        </div>
    )
}

export default Header;

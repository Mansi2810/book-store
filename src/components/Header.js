import React, {useState} from 'react';
import {AppBar, Typography,Toolbar, Tab, Tabs} from '@mui/material';
import LibraryBooksOutLinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import {NavLink} from 'react-router-dom';





const Header = () => {
    const [value, setvalue] = useState();
    
  return (
    <div>
        <AppBar sx= {{backgroundColor: 'darkblue' }} position="sticky">
            <Toolbar>
              <NavLink to = "/" style={{ color: "white"}}>
             <Typography>
    <LibraryBooksOutLinedIcon/>
</Typography>
</NavLink>
<Tabs 
//for css we write sx...it allows us to add some css directly to component
sx={{ml: 'auto'}}

textColor='inherit'
 indicatorColor='primary' 
 value={value} onChange={(e,val) =>setvalue(val)}>
    <Tab LinkComponent={NavLink} to= "/add" label="Add Product" />
    <Tab LinkComponent={NavLink} to= "/books" label="Books" />
    <Tab LinkComponent={NavLink} to= "/about" label="About Us" />
    
</Tabs>
            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Header
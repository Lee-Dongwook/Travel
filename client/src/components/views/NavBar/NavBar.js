import React, {useState} from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import {Drawer, Button} from 'antd';
import Icon from '@ant-design/icons';
import './Sections/Navbar.css';

function NavBar(){
    const [open, setOpen] = useState(false);

    const showDrawer =() => {
        setOpen(true);
    }

    const onClose =( )=> {
        setOpen(false);
    };

    return (
        <nav clssName ="menu" style={{position: 'fixed', zIndex: 5, width: '100%'}}>
            <div className = "menu__logo">
                <a href = "/">Travel</a>
            </div>
            <div clasName = "menu__container">
                <div className = "menu_left">
                    <LeftMenu mode="horizontal" />
                </div>
                <div className = "menu_right">
                    <RightMenu mode = "horizontal" />
                </div>
                <Button 
                    className="menu__mobile-button"
                    type="primary"
                    onClick ={showDrawer}
                >
                    <Icon type = "align-right" />
                </Button>
                <Drawer 
                    title= "Basic Drawer"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onCLose={onClose}
                    open={open}
                    >
                        <LeftMenu mode="inline"/>
                        <RightMenu mode="inline" />
                    </Drawer>
            </div>
        </nav>
    )
}

export default NavBar
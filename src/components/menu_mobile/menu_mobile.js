import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

export default function MenuMobile() {
    const [state, setState] = React.useState({
        left: false
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            className={styles.drawer}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link href='./'>
                    <a className={styles.link_home}>HOME</a>
                </Link>
            </List>
            <Divider />
            <List>
                <Link href='/projetos'>
                    <a className={styles.navbar_links}>PROJETOS</a>
                </Link>
            </List>
            <Divider />
            <List>
                <Link href='/contato'>
                    <a className={styles.navbar_links}>CONTATO</a>
                </Link>
            </List>
            <Divider />
            <List>
                <Link href='/api_page'>
                    <a className={styles.navbar_links}>API</a>
                </Link>
            </List>
            <Divider />
            <List>
                <Link href='/crud'>
                    <a className={styles.navbar_links}>CRUD</a>
                </Link>
            </List>
        </Box>
    );

    return (
        <div className={styles.menu_mobile}>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><img src='/assets/menuIcon.png' /></Button>
                    <Drawer
                        width='auto'
                        heigth='auto'
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >{list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

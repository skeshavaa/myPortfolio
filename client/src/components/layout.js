import React, { useState } from 'react'
import theme from '../styles/theme'
import MenuIcon from '@material-ui/icons/Menu'
import { Fab, Drawer, MuiThemeProvider, IconButton, Menu } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import DrawerContent from './drawerContent'
import styled from 'styled-components'

const Layout = (props) => {
    const [Handler, setHandler] = useState(false)

    const handler = (e) => {
        e.preventDefault();
        setHandler(!Handler);
    };


    return (
        <Sticky>
            <Wrapper>
                <ButtonWrapper>
                    <IconButton classes={{root: 'roott'}} onClick={handler}>
                        <MenuIcon />
                    </IconButton>
                </ButtonWrapper>
            </Wrapper>
            <Drawer open={Handler} onClose={handler}>
                <DrawerContent />
            </Drawer>
        </Sticky>
    )
}

export default Layout



const Wrapper = styled.div`
    padding-left: 25px;
    padding-top: 25px;
    @media (max-width: 500px){
        padding-left: 5px;
        padding-top: 5px;
    }
`

const Sticky = styled.div`
    position: sticky;
    position:-webkit-sticky;
    top: 0;
`

const ButtonWrapper = styled.div`
    width: 54px;
    border-radius: 50%;
    box-shadow: 1px 3px 5px #bfbfbf;
`
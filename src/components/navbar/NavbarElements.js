import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
    background: #FFFFFF;
    height: 50px;
    display: flex;
    justify-content: right;
    padding: 0 2rem;
    z-index: 12;
`

export const NavLink = styled(Link)`
    color: #FF0000;
    font-size: 24px;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: -24px;
    width: 100vw;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

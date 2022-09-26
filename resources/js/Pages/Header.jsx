import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {

    const HeaderDiv = styled.div`
        width: auto;
        height: 60px;
        margin: 0;
        padding: 0 7%;
        line-height: 60px;
        background-color: #565053;
        color: #fff;
        font-size: 1.1rem;
        display: flex;
        position: relative;
    `;

    const FormPosition = styled.form`
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%,0%);
    `

    const SearchInput = styled.input`
        width: 600px;
        height: 38px;
        padding: 5px 0 5px 36px;
        border-radius: 5px;
        color: #000;
    `
    const ButtonImg = styled.img`
        position: relative;
        top: 6px;
        left: 31px;
    `

    const ALinkDiv = styled.a`
        
    `

    const CartIconDiv = styled.div`
        position: absolute;
        right: 8%;
        font-size: 1.3rem;

        &:hover{
            cursor: pointer;
        }
    `

    const [ text,setText ] = useState()

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <HeaderDiv>
                <ALinkDiv href='http://localhost:8000'>
                    Home
                </ALinkDiv>
                <FormPosition>
                    <button><ButtonImg width={24} height={24} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliEHR87W0oPjpBMR6U9HkbxrOJqBq0WGNoqIynxY&s" alt="" /></button>
                    <SearchInput type="text" value={text} onChange={handleTextChange} />
                </FormPosition>
                <CartIconDiv>
                    <ShoppingCartIcon />
                </CartIconDiv>
            </HeaderDiv>
        </div>
    )
}

export default Header
import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { SiteContext } from "./context";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    const {index, setIndex, error, setError} = useContext(SiteContext);

    return (
    <Wrapper>
        <Linky to={'/new'}>New Index</Linky>
        <Linky to={'/find'}>Find Index</Linky>
        <Linky to={'/add'}>Current</Linky>
    </Wrapper>
    )
}

const Wrapper = styled.div``;
const Linky = styled(NavLink)``;

export default Sidebar
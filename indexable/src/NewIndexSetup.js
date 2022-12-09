import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { SiteContext } from "./context";


const NewIndex = () => {
    const {index, setIndex, error, setError} = useContext(SiteContext);
    const [newIndex, setNewIndex] = useState(index)
    const [click, setClick] = useState(false)

    useEffect(() => {
        setNewIndex(index)
    }, [index])

    const handleChange = (e) => {
        setNewIndex({...newIndex, 
        [e.target.id]: e.target.value})
    };    

    useEffect(() => {
        setIndex({...newIndex, "project": newIndex.project, "levels": newIndex.levels})
        setClick(false)
        console.log(index)
    }, [click])
 
    return (
        <Wrapper>
            <p>Project Title</p><input id='project' type='project' value={!newIndex.project ? ("Enter a Project Name") : (newIndex.project)} onChange={handleChange}/>
            <p>Number of sub Levels</p><input id='levels' type='number' onChange={handleChange}/>
            <button id="confirm" disabled={!newIndex.project || !newIndex.levels} onClick={()=>{setClick(true)}}>Confirm</button>
        </Wrapper>
    )
}

const Wrapper = styled.div``;

export default NewIndex
import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { SiteContext } from "./context";

const AddEntry = () => {
  const {index, setIndex, entry, setEntry, error, setError} = useContext(SiteContext);
  // const [pageNumber, setPageNumber] = useState(false);
  const [newEntry, setNewEntry] = useState({});
  const [click, setClick] = useState(false)
  const levels = Array(parseInt(index.levels)).fill()
  console.log(newEntry)
  const handleChange = (e) => {
    setNewEntry({...newEntry,
    [e.target.id]: e.target.value})
  };
  const handleClick = (e) => {
    setEntry({newEntry})
    setClick(false)
  };
  return (
    <Wrapper>
      <p>Reference</p>
      <EntryBox value={newEntry.value} id="entry" type="text" onChange={handleChange}></EntryBox>
      <div>
      {levels.map((item, i) => <input id={`${i+1}`} onChange={handleChange} disabled={!newEntry.entry || (i != 0 && !newEntry[i]) || newEntry[i] === "/"}></input> )}
      </div> 
      <p>Page Number</p>
      <PageReference
        id="page"
        type="number"
        onChange={handleChange}
      ></PageReference>
      <p>to</p>
      <PageReferenceB
        id="endPage"
        type="number"
        onChange={handleChange}
      ></PageReferenceB>
      <p>Tags</p>
      <TagsBox id="tags" type="text" onChange={handleChange}></TagsBox>
      <button id='addEntry' disabled={!newEntry.page || !newEntry.entry  || (newEntry.endPage <= newEntry.page && newEntry.endPage)} onClick={() => handleClick}>Add Entry</button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const EntryBox = styled.input``;
const PageReference = styled.input``;
const PageReferenceB = styled.input``;
const TagsBox = styled.input``;

export default AddEntry;

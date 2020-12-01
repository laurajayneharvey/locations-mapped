import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import List from './components/List';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 40px 100px;

  @media only screen and (max-width: 1024px) {
    margin: 5vw;
  }
`

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2vw;
`

const Left = styled.div`
  width: 50%;
  float: left;
  margin-right: 5%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
  }
`
const Right = styled.div`
  width: 45%;
  float: left;

  
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
  }
`

const Label = styled.label`
  margin-bottom: 1vw;
`

const Input = styled.input`
  margin-left: 1vw;
`

const App = () => {
  const [take, setTake] = useState(10)
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const populateLocations = async () => {
      fetch('location')
        .then(response => response.json())
        .then(data => {
          setTake(data.take);
          setLocations(data.locations);
          setFilteredLocations(data.locations);
        });
    };

    populateLocations();
  }, [])

  useEffect(() => {
    let slicedLocations = [];
    if (searchTerm === '') {
      slicedLocations = locations
        .slice(0, take)
        .map(location => location);
    } else {
      const search = searchTerm.toLowerCase();
      slicedLocations = locations
        .filter(location => location.postcode.toLowerCase().includes(search) || location.description.toLowerCase().includes(search))
        .slice(0, take)
        .map(location => location);
    }

    setFilteredLocations(slicedLocations);
  }, [take, locations, searchTerm])

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const header = searchTerm === '' ? `Top ${take} locations` : `Top ${take} locations for '${searchTerm}'`;

  return (
    <div>
      <Wrapper>
        <Header>{header}</Header>
        <Label>Search for a postcode or description<Input type="text" value={searchTerm} onChange={handleSearchTermChange} /></Label>
        <Left><Map locations={filteredLocations} /></Left>
        <Right><List locations={filteredLocations} /></Right>
      </Wrapper>
    </div>
  );
}

export default App;

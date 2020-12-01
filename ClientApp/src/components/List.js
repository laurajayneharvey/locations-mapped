import React from 'react';

const List = (props) => {
  const createLocationsTable = (locations) => {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Postcode</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(location =>
            <tr key={location.id}>
              <td>{location.id}</td>
              <td>{location.postcode}</td>
              <td>{location.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  let contents = createLocationsTable(props.locations);

  return (
    <div>
      {contents}
    </div>
  );
}

export default List;
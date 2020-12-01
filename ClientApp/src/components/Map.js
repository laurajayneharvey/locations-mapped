import React, { useEffect } from 'react';
import styled from 'styled-components';

const MapWrapper = styled.div`
    height: 600px;
    width: 100%;
`

const Map = (props) => {
    const { locations } = props;

    useEffect(() => {
        const addMarkers = () => {
            if (locations.length > 0) {
                const google = window.google;

                const map = new google.maps.Map(
                    document.getElementById("map"), { zoom: 14, center: { lat: parseFloat(locations[0].latitude), lng: parseFloat(locations[0].longitude) } }
                );

                locations.map(location => new google.maps.Marker({
                    position: { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) },
                    map,
                    title: location.id,
                }));
            }
        };

        addMarkers();
    }, [locations])

    return (<MapWrapper id="map"></MapWrapper>);
}

export default Map;
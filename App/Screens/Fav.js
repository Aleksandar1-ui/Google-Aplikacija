import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';
import { UserLocationContext } from '../Context/UserLocationContext';

export default function Fav() {
  const [favPlaceList, setFavPlaceList] = useState([]);
  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      getFavPlaces();
    }
  }, [location]);

  const getFavPlaces = () => {
    const placeTypes = ['restaurant', 'cafe', 'gas_station'];

    Promise.all(
      placeTypes.map(placeType =>
        GlobalApi.nearByPlace(location.coords.latitude, location.coords.longitude, placeType)
      )
    )
      .then(responses => {
        // Combine the results from all API requests
        const allPlaces = responses.reduce((acc, response) => {
          return acc.concat(response.data.results);
        }, []);

        // Filter the places with rating > 4.5
        const filteredPlaces = allPlaces.filter(place => place.rating && place.rating > 4.5);

        // Remove duplicates if any
        const uniquePlaces = removeDuplicates(filteredPlaces, 'place_id');

        setFavPlaceList(uniquePlaces);
      })
      .catch(error => console.error('Error fetching fav places:', error));
  };

  // Function to remove duplicates from an array of objects based on a specified key
  const removeDuplicates = (array, key) => {
    return array.filter((item, index, self) => index === self.findIndex(obj => obj[key] === item[key]));
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: '#fff', flex: 1 }}>
      <Text style={{ fontSize: 20, marginBottom: 10, fontFamily:'raleway-bold' }}>Најпосетувани места</Text>
      <PlaceList placeList={favPlaceList} />
    </ScrollView>
  );
}

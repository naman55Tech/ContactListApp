// SearchBar.tsx
import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Adjust the icon library and icon name as needed
import {styles} from './SearchBar.styles';
import {Colors} from '../../utils/colors';
import Entypo from 'react-native-vector-icons/Entypo';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onOptionClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch, onOptionClick}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <AntDesign
        name="search1"
        size={20}
        color={Colors.white}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
        placeholderTextColor={Colors.white}
      />
      <Entypo
        name="dots-three-vertical"
        onPress={onOptionClick}
        size={20}
        color={Colors.white}
        style={styles.icon}
      />
    </View>
  );
};

export default SearchBar;

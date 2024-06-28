// SearchBar.tsx
import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Adjust the icon library and icon name as needed
import {styles} from './SearchBar.styles';
import {Colors} from '../../utils/colors';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
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
    </View>
  );
};

export default SearchBar;

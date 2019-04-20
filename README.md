<img alt="React Native Dynamic Search Bar" src="https://github.com/WrathChaos/react-native-dynamic-search-bar/blob/master/assets/logo.png" width="1050"/>

Fully customizable Dynamic Search Bar for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-dynamic-search-bar.svg)](https://www.npmjs.com/package/react-native-dynamic-search-bar)
[![npm](https://img.shields.io/npm/dt/react-native-dynamic-search-bar.svg)](https://www.npmjs.com/package/react-native-dynamic-search-bar)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Dynamic Search Bar" src="https://github.com/WrathChaos/react-native-dynamic-search-bar/blob/master/assets/Screenshots/example.png" width="40%" height="735"/>
<img alt="React Native Dynamic Search Bar" src="https://github.com/WrathChaos/react-native-dynamic-search-bar/blob/master/assets/Screenshots/SearchGIF.gif" width="49.7%"/>
</p>

## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-dynamic-search-bar
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 6,x,x",
"react-native-dynamic-vector-icons": ">= x,x,x"

// Expo Version
"react-native-dynamic-vector-icons": "WrathChaos/react-native-dynamic-vector-icons#expo"
```

# Usage

There are two modes in the library:

<ul>
  <li><b>Search Button</b></li>
  <li><b>Search TextInput</b></li>
</ul>

## Basic Usage

```ruby
<SearchBar
  placeholder="Search here"
  onChangeText={text => {
    console.log(text)
  }}
  onPressCancel={() => {
    this.filterList("");
  }}
  onPress={() => alert("onPress")}
/>
```

## Advanced Usage

You can check the example for the advanced usage

```ruby
<SearchBar
  fontColor="#c6c6c6"
  iconColor="#c6c6c6"
  shadowColor="#282828"
  cancelIconColor="#c6c6c6"
  backgroundColor="#353d5e"
  placeholder="Search here"
  onChangeText={text => {
    this.filterList(text);
  }}
  onPressCancel={() => {
    this.filterList("");
  }}
  onPress={() => alert("onPress")}
/>
```

### Configuration - Props

| Property            |   Type    |      Default      | Description                                                                       |
| ------------------- | :-------: | :---------------: | --------------------------------------------------------------------------------- |
| onPress             | function  |     function      | set your own function for the onPress functionality                               |
| fontSize            |  number   |        13         | change the font size                                                              |
| fontColor           |   color   |      #b3b6c3      | change the font color                                                             |
| iconName            |  string   |      search       | change the icon                                                                   |
| iconType            |  string   |     Octicons      | change the icon style                                                             |
| iconSize            |  number   |        20         | change the icon size                                                              |
| iconColor           |   color   |      #807DE7      | change the icon color                                                             |
| iconComponent       | component |       Icon        | set your own component instead of Icon                                            |
| shadowColor         |   color   |      #757575      | change the shadow color                                                           |
| shadowStyle         |   style   |   shadow style    | set your own shadow style                                                         |
| placeholder         |  string   |       null        | set your own placeholder string                                                   |
| textInputDisable    |  boolean  |       false       | disable the text input, and Text component will be available instead              |
| textInputComponent  | component | Text OR TextInput | set your own component instead of Text OR TextInput for the center component      |
| textInputValue      |  string   |       value       | set the value of the text input                                                   |
| onChangeText        | function  |     function      | set your own function for the onChangeText logic                                  |
| cancelIconName      |  string   |       clear       | change the cancel icon                                                            |
| cancelIconType      |  string   |   MaterialIcons   | change the cancel icon style                                                      |
| cancelIconSize      |  number   |        23         | change the cancel icon size                                                       |
| cancelIconColor     |   color   |      #b3b6c3      | change the cancel icon color                                                      |
| cancelIconComponent | component |       Icon        | set your own component instead of Icon for the cancel component (right component) |
| onPressCancel       | function  |     function      | set your own function for the cancel button's onPress functionality               |
| cancelComponent     | component |     component     | set your own component instead of cancel component                                |
| cancelButtonDisable |  boolean  |       false       | disable cancel button component                                                   |
| autoFocus           |  boolean  |       true        | change the autoFocus mode for the TextInput                                       |

## Expo Compatibility

Dynamic Search Bar is usable with Expo. You just need to add a peer dependency:

```
"react-native-dynamic-vector-icons": "WrathChaos/react-native-dynamic-vector-icons#expo"
```

## Known Issues

### Android

#### Vector Icons are not showing :O

-> You need to add this line of code into app/gradle

```ruby
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

#### Animations are not working on the Android like the example ?

-> You need to enable experimental LayoutAnimation on the android. Here is how to do it:

```ruby
import {UIManager} from 'react-native';

constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
```

### ToDos

- [x] LICENSE
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dynamic Search Bar Library is available under the MIT license. See the LICENSE file for more info.

<img alt="React Native Dynamic Search Bar" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-button)

[![Fully customizable Dynamic Search Bar for React Native](https://img.shields.io/badge/-Fully%20customizable%20Dynamic%20Search%20Bar%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-dynamic-search-bar)

[![npm version](https://img.shields.io/npm/v/react-native-dynamic-search-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-dynamic-search-bar)
[![npm](https://img.shields.io/npm/dt/react-native-dynamic-search-bar.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-dynamic-search-bar)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg?style=for-the-badge)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="https://freakycoder.com/react-native-library-dynamic-search-bar-c03fea9fae36">
    <img height="175" width="35%" alt="React Native Dynamic Search Bar" src="https://geniallysupport.zendesk.com/hc/article_attachments/360003784692/medium.jpeg"/>
  </a>
</p>

<p align="center">
<img alt="React Native Dynamic Search Bar" src="assets/Screenshots/example.png" width="40%" height="735"/>
<img alt="React Native Dynamic Search Bar" src="assets/Screenshots/SearchGIF.gif" width="49.7%"/>
</p>

## Installation

Add the dependency:

### React Native

```js
npm i react-native-dynamic-search-bar
```

### Expo Version

```js
npm i WrathChaos/react-native-dynamic-search-bar#expo
npm i WrathChaos/react-native-dynamic-vector-icons#expo
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 6.x.x",
"react-native-dynamic-vector-icons": ">= x.x.x",
"@freakycoder/react-native-helpers": ">= 0.1.0"
```

# Usage

## Import

```js
import SearchBar from "react-native-dynamic-search-bar";
```

## Component Options

There are two modes in the library:

<ul>
  <li><b>Search Button</b></li>
  <li><b>Search TextInput</b></li>
</ul>

## Basic Usage

```jsx
<SearchBar
  placeholder="Search here"
  onChangeText={text => {
    console.log(text);
  }}
  onPressCancel={() => {
    this.filterList("");
  }}
  onPress={() => alert("onPress")}
/>
```

## Advanced Usage

You can check the example for the advanced usage

```jsx
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

| Property            |   Type    |      Default      | Description                                                                                           |
| ------------------- | :-------: | :---------------: | ----------------------------------------------------------------------------------------------------- |
| onPress             | function  |     function      | set your own function for the onPress functionality                                                   |
| fontSize            |  number   |        13         | change the font size                                                                                  |
| fontColor           |   color   |      #b3b6c3      | change the font color                                                                                 |
| iconName            |  string   |      search       | change the icon                                                                                       |
| iconType            |  string   |     Octicons      | change the icon style                                                                                 |
| iconSize            |  number   |        20         | change the icon size                                                                                  |
| iconColor           |   color   |      #807DE7      | change the icon color                                                                                 |
| iconComponent       | component |       Icon        | set your own component instead of Icon                                                                |
| shadowColor         |   color   |      #757575      | change the shadow color                                                                               |
| shadowStyle         |   style   |   shadow style    | set your own shadow style                                                                             |
| placeholder         |  string   |       null        | set your own placeholder string                                                                       |
| textInputDisable    |  boolean  |       false       | disable the text input, and Text component will be available instead                                  |
| textInputComponent  | component | Text OR TextInput | set your own component instead of Text OR TextInput for the center component                          |
| textInputValue      |  string   |       value       | set the value of the text input                                                                       |
| onChangeText        | function  |     function      | set your own function for the onChangeText logic                                                      |
| cancelIconName      |  string   |       clear       | change the cancel icon                                                                                |
| cancelIconType      |  string   |   MaterialIcons   | change the cancel icon style                                                                          |
| cancelIconSize      |  number   |        23         | change the cancel icon size                                                                           |
| cancelIconColor     |   color   |      #b3b6c3      | change the cancel icon color                                                                          |
| cancelIconComponent | component |       Icon        | set your own component instead of Icon for the cancel component (right component)                     |
| onPressCancel       | function  |     function      | set your own function for the cancel button's onPress functionality                                   |
| cancelComponent     | component |     component     | set your own component instead of cancel component                                                    |
| cancelButtonDisable |  boolean  |       false       | disable cancel button component                                                                       |
| autoFocus           |  boolean  |       true        | change the autoFocus mode for the TextInput                                                           |
| noExtraMargin       |  boolean  |       false       | remove extra padding on iPhone X devices                                                              |
| onPressToFocus      |  boolean  |       false       | when enable it, onPress will automatically focus on the TextInput and opens the soft virtual keyboard |

## Expo Compatibility

Dynamic Search Bar is usable with Expo. You just need to add a peer dependency:

```js
"react-native-dynamic-vector-icons": "WrathChaos/react-native-dynamic-vector-icons#expo"
```

## Known Issues

### Android

#### Vector Icons are not showing :O

-> You need to add this line of code into app/gradle

```java
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

#### Animations are not working on the Android like the example ?

-> You need to enable experimental LayoutAnimation on the android. Here is how to do it:

```js
import { UIManager } from 'react-native';

constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
```

### Future Plans

- [x] ~~LICENSE~~
- [x] ~~Write an article about the lib on Medium~~
- [ ] Typescript Challenge!

# Change Log

## [Unreleased](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/HEAD)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.3.0...HEAD)

**Closed issues:**

- react-native-iphone-x-helper module not found [\#8](https://github.com/WrathChaos/react-native-dynamic-search-bar/issues/8)

## [0.3.0](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.3.0) (2019-12-06)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.2.1...0.3.0)

**Closed issues:**

- Request To Add Product in Start React [\#10](https://github.com/WrathChaos/react-native-dynamic-search-bar/issues/10)

## [0.2.1](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.2.1) (2019-09-02)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.2.0...0.2.1)

**Implemented enhancements:**

- Extend length of Textfield to full length of search box...? [\#4](https://github.com/WrathChaos/react-native-dynamic-search-bar/issues/4)
- Make the extra margin on iPhone X devices optional [\#9](https://github.com/WrathChaos/react-native-dynamic-search-bar/pull/9) ([showcasecode](https://github.com/showcasecode))

**Merged pull requests:**

- Bump mixin-deep from 1.3.1 to 1.3.2 in /example [\#7](https://github.com/WrathChaos/react-native-dynamic-search-bar/pull/7) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump eslint-utils from 1.3.1 to 1.4.2 in /example [\#6](https://github.com/WrathChaos/react-native-dynamic-search-bar/pull/6) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump lodash from 4.17.11 to 4.17.14 in /example [\#5](https://github.com/WrathChaos/react-native-dynamic-search-bar/pull/5) ([dependabot[bot]](https://github.com/apps/dependabot))

## [0.2.0](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.2.0) (2019-07-09)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.1.11...0.2.0)

**Merged pull requests:**

- Bump handlebars from 4.1.1 to 4.1.2 in /example [\#3](https://github.com/WrathChaos/react-native-dynamic-search-bar/pull/3) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump js-yaml from 3.13.0 to 3.13.1 in /example [\#2](https://github.com/WrathChaos/react-native-dynamic-search-bar/pull/2) ([dependabot[bot]](https://github.com/apps/dependabot))

## [0.1.11](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.1.11) (2019-04-20)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.1.1...0.1.11)

**Closed issues:**

- on Android, there is no animation [\#1](https://github.com/WrathChaos/react-native-dynamic-search-bar/issues/1)

## [0.1.1](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.1.1) (2019-04-18)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.0.13...0.1.1)

## [0.0.13](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.0.13) (2019-04-02)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.0.12...0.0.13)

## [0.0.12](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.0.12) (2019-04-02)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.0.11...0.0.12)

## [0.0.11](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.0.11) (2019-04-02)

[Full Changelog](https://github.com/WrathChaos/react-native-dynamic-search-bar/compare/0.0.1...0.0.11)

## [0.0.1](https://github.com/WrathChaos/react-native-dynamic-search-bar/tree/0.0.1) (2019-03-31)

\* _This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)_

# Future Plans

- [ ] Update the Expo version to latest features

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dynamic Search Bar Library is available under the MIT license. See the LICENSE file for more info.

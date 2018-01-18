# alfred-icolor [![Build Status](https://travis-ci.org/rudeigerc/alfred-icolor.svg?branch=master)](https://travis-ci.org/rudeigerc/alfred-icolor)

>  An Alfred workflow to generate colors from hex string (for personal use)


## Installation

```
$ git clone https://github.com/rudeigerc/alfred-icolor.git
$ cp -r alfred-icolor ~/Documents/Alfred.alfredpreferences/workflows/
$ rm -r alfred-icolor
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

In Alfred, type `icolor`, and the hex string which represents colors, starting with `#`.

### Input
```
icolor #FFFFFFFF
```

### Output
```swift
UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00)
```

## Reference

- [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift)

## License

**alfred-icolor** is available under the MIT License.

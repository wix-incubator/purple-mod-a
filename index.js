import React, {Component} from 'react';
import RN from 'react-native';

var _engine;

class ModuleComponent extends Component {
  render() {
    return (
      <RN.View style={{backgroundColor: 'yellow'}}>
        <RN.Text style={{
            fontSize: 16,
            textAlign: 'center',
            margin: 10,
            color: 'purple'
          }}>
          PurpleModA
        </RN.Text>
      </RN.View>
    );
  }
}

export default class PurpleModA {
  static version() {
    return '0.1.0'
  }

  static name() {
    return 'purple-mod-a';
  }

  static init(purpleEngine) {
    _engine = purpleEngine;
    purpleEngine.registerComponent(ModuleComponent);
  }
}
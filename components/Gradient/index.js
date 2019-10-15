import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Gradient(props) {
  const { style, children } = props;

  if (props.gradientColor === 'orange') {
    return (
      <LinearGradient
        colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={style}
      >
        {children}
      </LinearGradient>
    );
  }
}

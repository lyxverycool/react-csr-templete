import React from 'react';
import Loadable from 'react-loadable';

//通用的过场组件
const loadingComponent = () => {
  return (
    <div />
  )
}

export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  });
}
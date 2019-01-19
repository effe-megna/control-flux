import React from 'react'

export const Every = ({ on = [], condition, children }) =>
  on.every(condition) ? children : null;

export const Filter = ({ on = [], condition, children }) =>
  on.map(v => (condition(v) ? children : null));

export const First = ({ on = [] }) =>
  on[0];

export const If = ({ condition, elze, children }) =>
  (condition ? children : elze);

export const Last = ({ on = [] }) =>
  on[on.length - 1]

export const Map = ({ on = [], children }) =>
  on.map(children)

export const Some = ({ on = [], condition, children }) =>
  on.some(condition) ? children : null

export const Includes = ({ on = [], searchElement, fromIndex = 0, children }) =>
  on.includes(searchElement, fromIndex) ? children : null

export const Sort = ({ on = [], children }) =>
  on.sort().map(children)

export const Times = ({ n = 0, children }) =>
  [...Array(n)].map((v, i) => children(i));


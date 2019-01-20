import React from 'react'

export const Every = ({ on = [], condition, children }) =>
  on.every(condition) ? children : null;

export const Filter = ({ on = [], predicate, children }) =>
  children(on.filter(predicate))

export const FilterBy = ({ on = [], property, predicate, children }) =>
  children(on.filter((v) => predicate(v[property])))

export const First = ({ on = [], children }) =>
  children(on[0]);

export const If = ({ condition, elze = null, children }) =>
  (condition ? children : elze);

export const Last = ({ on = [], children }) =>
  children(on[on.length - 1])

export const Map = ({ on = [], children }) =>
  on.map(children)

export const Reduce = ({ on = [], callback, initialValue, children }) =>
  children(on.reduce(callback, initialValue))

export const ReduceRight = ({ on = [], callback, initialValue, children }) =>
  children(on.reduceRight(callback, initialValue))

export const Some = ({ on = [], condition, children }) =>
  on.some(condition) ? children : null

export const Includes = ({ on = [], searchElement, fromIndex = 0, children }) =>
  on.includes(searchElement, fromIndex) ? children : null

export const Sort = ({ on = [], children }) =>
  on.sort().map(children)

export const Times = ({ n = 0, children }) =>
  [...Array(n)].map((v, i) => children(i));

export const Fill = ({
  on = [],
  value,
  start = 0,
  end = on.length,
  children
}) => children(on.fill(value, start, end))

export const Find = ({
  on = [],
  predicate = false,
  children
}) => children(on.find(predicate)) || null

export const FindIndex = ({
  on = [],
  predicate = false,
  children
}) => children(on.findIndex(predicate))

export const Join = ({
  on = [],
  separator,
  children
}) => children(on.join(separator))

export const Reverse = ({
  on = [],
  children
}) => children(on.reverse())
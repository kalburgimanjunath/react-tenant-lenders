import React from 'react';
import { LENDERS } from '../../data/lenders';
export default function ListLenders() {
  return (
    <div>
      <h1>Lenders</h1>
      {LENDERS && LENDERS.map((item) => <div>{item.name}</div>)}
    </div>
  );
}

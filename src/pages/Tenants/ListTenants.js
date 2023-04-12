import React from 'react';
import { TENANTS } from '../../data/tenants';
export default function ListTenants() {
  return (
    <div>
      <h1>Tenants</h1>
      {TENANTS && TENANTS.map((item) => <div>{item.name}</div>)}
    </div>
  );
}

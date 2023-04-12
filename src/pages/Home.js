import React from 'react';
import ListLenders from './Lenders/ListLenders';
import ListTenants from './Tenants/ListTenants';
export default function Home() {
  return (
    <div>
      <ListLenders />
      <ListTenants />
    </div>
  );
}

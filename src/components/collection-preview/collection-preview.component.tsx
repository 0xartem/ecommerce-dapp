import React from 'react';
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }: any) => (
  <div className='collection-preview'>
    <h1 className='title'>{ title.toUpperCase() }</h1>
    <div className='preview'>
      {
        items
        .filter((item: any, idx: number) => idx < 4)
        .map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;
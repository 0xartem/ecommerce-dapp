import { Component } from 'react';
import '../../components/collection-preview/collection-preview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

type Item = {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

type ItemsDescription = {
  id: number,
  title: string,
  routeName: string,
  items: Item[]
}

type PageState = {
  collections: any;
}

export class ShopPage extends Component<{}, PageState> {

  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return (
      <div className='shop-page'>
        {
          this.state.collections.map(({ id, ...otherCollectionProps }: ItemsDescription) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }

}

export default ShopPage;
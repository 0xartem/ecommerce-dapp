import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

type Section = {
  title: string,
  imageUrl: string,
  id: number,
  linkUrl: string,
  size?: string,
  subtitle?: string
}

type DirectoryState = {
  sections: Section[]
}

class Directory extends React.Component<{}, DirectoryState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'robots',
          imageUrl: 'https://source.unsplash.com/featured/?robot',
          id: 1,
          linkUrl: 'shop/robots'
        },
        {
          title: 'heroes',
          imageUrl: 'https://source.unsplash.com/featured?hero',
          id: 2,
          linkUrl: 'shop/heroes'
        },
        {
          title: 'monsters',
          imageUrl: 'https://source.unsplash.com/featured/?monster',
          id: 3,
          linkUrl: 'shop/monsters'
        },
        {
          title: 'music',
          imageUrl: 'https://source.unsplash.com/featured/?music',
          size: 'large',
          id: 4,
          linkUrl: 'shop/music'
        },
        {
          title: 'books',
          imageUrl: 'https://source.unsplash.com/featured/?book',
          size: 'large',
          id: 5,
          linkUrl: 'shop/books'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...otherSectionProps }: Section) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
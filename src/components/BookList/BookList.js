import React, {Component} from 'react';
import Book from '../Book/Book';
import './BookList.css'

export default class BookList extends Component {

  render() {
    const {searchResults} = this.props;
    const bookInfo = searchResults.map((info, i) => (
      <Book
        key={i}
        image={info.volumeInfo.imageLinks.smallThumbnail}
        title={info.volumeInfo.title}
        author={info.volumeInfo.authors}
        desc={info.volumeInfo.description}
      />
    ))

    return(
      <div>
        {bookInfo}
      </div>
    )
  }
}
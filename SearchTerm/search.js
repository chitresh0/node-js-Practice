const API = require('./mockApi');
const EventEmitor = require('events');
// To count the matches, call API.countMatches(term) where term is the search term

class Search extends EventEmitor {
  constructor() {
    super();
  }

  searchCount(searchTerm) {
    if (searchTerm == undefined) {
      this.emit('SEARCH_ERROR', {"message": "INVALID_TERM"});
    } else {
      this.emit('SEARCH_STARTED', searchTerm, API.countMatches(searchTerm).then((count) => {
          this.emit('SEARCH_SUCCESS', {count: count, term: searchTerm});
        }).catch(error => {
          this.emit('SEARCH_ERROR', {"message": error.message, term: searchTerm})
        })
    )}
  }

}

module.exports = Search;
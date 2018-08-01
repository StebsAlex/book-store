export default function() {
  this.namespace = '/api';

  this.get('/books', function() {
    return {
      data: [
        {
          type: 'book',
          id: 'The_Outsider',
          attributes: {
            title: 'The Outsider',
            author: 'Stephen King',
            price: 10.00,
            genre: 'Crime Thriller',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41gRuX5JsnL._SX324_BO1,204,203,200_.jpg',
            description: 'As Anderson and the District Attorney trace the clues, the investigation expands from Ohio to Texas. And as horrifying answers begin to emerge, so King"s propulsive story of almost unbearable suspense kicks into high gear.'
          }
        },
        {
          type: 'book',
          id: 'The_Franis',
          attributes: {
            title: 'The Franis',
            author: 'Duke Franics Staurt Bell',
            price: 10.00,
            genre: 'Comedy',
            image:'https://ca.slack-edge.com/T03AY8EMC-U4EPW5DHD-3991b503ac57-512',
            description: 'The life history of the legendary Wing Commander Francis Stuart Bell'
          }
        },
        {
          type: 'book',
          id: 'The_World’s_Worst_Children',
          attributes: {
            title: 'The World’s Worst Children',
            author: 'David Walliams, Tony Ross',
            price: 7.00,
            genre: 'Chilren Educational',
            image: 'https://images-na.ssl-images-amazon.com/images/I/61HlBaR3yFL._SX376_BO1,204,203,200_.jpg',
            description: 'As Anderson and the District Attorney trace the clues, the investigation expands from Ohio to Texas. And as horrifying answers begin to emerge, so King"s propulsive story of almost unbearable suspense kicks into high gear.'
          }
        }
      ]
    }
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req: any, res, ctx) => {
    console.info(req);
    if (req.body.username === 'clover' && req.body.password === 'revolc') {
      return res(
        ctx.status(200),
        ctx.json({
          token: '1234567890',
          username: 'clover',
          success: true,
        })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          token: '',
          username: '',
          success: false,
        })
      );
    }
  }),
  rest.get('/movie', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'The Shawshank Redemption',
          year: 1994,
          rating: 9.3,
          runtime: 142,
          genre: 'Crime, Drama',
          director: 'Frank Darabont',
          actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
          plot: 'Two imprisoned',
        },
        {
          id: 2,
          title: 'The Godfather',
          year: 1972,
          rating: 9.2,
          runtime: 175,
          genre: 'Crime, Drama',
          director: 'Francis Ford Coppola',
          actors: 'Marlon Brando, Al Pacino, James Caan, Richard S. Castellano',
          plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        },
        {
          id: 3,
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          runtime: 152,
          genre: 'Action, Crime, Drama',
          director: 'Christopher Nolan',
          actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
          plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
        },
      ])
    );
  }),
];

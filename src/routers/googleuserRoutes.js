import express from 'express';
import passport from 'passport';

export const googleRoutes = express.Router();

googleRoutes.get('/', (req, res) => {
    res.send("<button><a href='/auth/google'>Login With Google</a></button>")
});
  
// Auth 
googleRoutes.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
// Auth Callback
googleRoutes.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/callback/success',
}));
  
// Success 
googleRoutes.get('/auth/google/callback/success' , (req , res) => {
    if(!req.user)
        res.redirect('/auth/callback/failure');
    res.send(`Welcome  ${req.user.email} and ${req.user.name}`);
});
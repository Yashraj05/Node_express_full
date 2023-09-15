
import { googleuser } from '../models/googleuser.js';


export async function serializeUser(profile,done)
{
    const existingUser = await googleuser.findOne({id : profile.id});

    if(existingUser)
    {
        done(null,existingUser);
    }
    else{

        const newuser = new googleuser({
            id : profile.id,
            name : profile.displayName,
            email : profile.emails[0].value
        })

        await newuser.save();

        done(null,newuser);
    }


    
}
export async function deserializeUser(user,done)
{
    done(null, user);
}


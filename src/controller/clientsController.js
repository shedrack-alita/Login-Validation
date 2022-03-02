
module.exports = {

        // get clients request

        getclients: (req,res) =>{
            let clients = [
                {        
                    id:1,  
                    first_name: 'Ben',
                    last_name: 'Gaga',
                    email: 'ben@gmail.com',
                    password: 'Gaga2010@',
                    confirm_password: 'Gaga2010@'
                },
        
                {
                    id:2,
                    first_name: 'Git',
                    last_name: 'hub',
                    email: 'github@gmail.com',
                    password: 'Forum2011Git',
                    confirm_password: 'Forum2011Git'
                },
        
                {
                    id:3,
                    first_name: 'Fred',
                    last_name: 'Rick',
                    email: 'fredrick@gmail.com',
                    password: 'Fred2012',
                    confirm_password: 'Fred2012'
                },
        
                {
                    id:4,
                    first_name: 'Mary',
                    last_name: 'Amos',
                    email: 'maryseleb@gmail.com',
                    password: 'Maria2013',
                    confirm: 'Maria2013'
                },
        
                {
                    id:5,
                    first_name: 'Amen',
                    last_name: 'Halelluja',
                    email: 'amen@gmail.com',
                    password: 'AmenAmen2014',
                    confirm: 'AmenAmen2014'
                }
            ]
            // console.log(clients)
            res.send(clients);
        },

        // Get by id request

        getClient: (req, res) =>{
            let clients = [
                {        
                    id:1,  
                    first_name: 'Ben',
                    last_name: 'Gaga',
                    email: 'ben@gmail.com',
                    password: 'Gaga2010@',
                    confirm_password: 'Gaga2010@'
                },
        
                {
                    id:2,
                    first_name: 'Git',
                    last_name: 'hub',
                    email: 'github@gmail.com',
                    password: 'Forum2011Git',
                    confirm_password: 'Forum2011Git'
                },
        
                {
                    id:3,
                    first_name: 'Fred',
                    last_name: 'Rick',
                    email: 'fredrick@gmail.com',
                    password: 'Fred2012',
                    confirm_password: 'Fred2012'
                },
        
                {
                    id:4,
                    first_name: 'Mary',
                    last_name: 'Amos',
                    email: 'maryseleb@gmail.com',
                    password: 'Maria2013',
                    confirm: 'Maria2013'
                },
        
                {
                    id:5,
                    first_name: 'Amen',
                    last_name: 'Halelluja',
                    email: 'amen@gmail.com',
                    password: 'AmenAmen2014',
                    confirm: 'AmenAmen2014'
                }
            ]
        
            const clientId = req.query.id;
            return res.send(clients[clientId]);
            
        },

//         // post request

        postedClient: (req,res) =>{
    
            let clients = { 
                    first_name: 'Ben',
                    last_name: 'Gaga',
                    email: 'ben@gmail.com',
                    password: 'Gaga2010@',
                    confirm_password: 'Gaga2010@'
                    }
        
            let{first_name, last_name, email, password, confirm_password} = req.body;
          
            // Name validation

            let FnameValid = /^[a-z'-.{3,15}]+[^0-9][^~!@#$%^&*()_+":,;?></~`]$/gi;
            
            if (!FnameValid.test (first_name)) {
                let Oops = 'Name format not accepted';
                    return res.status(401).json({Invalid: Oops});
            }

            let LnameValid = /^[a-z'-.{3,15}]+[^0-9][^~!@#$%^&*()_+":,;?></~`]$/gi;

            if (!LnameValid.test(last_name)){
                let Err = 'Name format does not match';
                    return res.status(401).json({virus: Err})
            }

        //     // email validation 

            let emValid = /^([a-z\.\-]+)@([a-z\-]+)((\.(a-z){2,3})+)$/g
            
            if (!emValid.test(email)) {
                let wrong = 'Please enter a valid address';
                    return res.status(401).json({incorrect: wrong});
            }
            
//         //     // password validation

            let passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/gm

            if (!passValid.test(password)) {
                let wrongpass = "Incorrect password";
                    return res.status(401).json({wrongpas: wrongpass})
            }
// // // 
// //         //     // Confirm Validation

            if (password !== confirm_password) {
                let NoMatch = 'Password doesn\'t match';
                    return res.status(401).json({passconfirm: NoMatch});
            }

                let member = {first_name, last_name, email, password, confirm_password};
                return res.status(200).json({member});

        },

        // // Deleting a client

        delclient: (req,res) =>{
            let clients = [
                {        
                    id:1,  
                    first_name: 'Ben',
                    last_name: 'Gaga',
                    email: 'ben@gmail.com',
                    password: 'Gaga2010@',
                    confirm_password: 'Gaga2010@'
                },
        
                {
                    id:2,
                    first_name: 'Git',
                    last_name: 'hub',
                    email: 'github@gmail.com',
                    password: 'Forum2011Git',
                    confirm_password: 'Forum2011Git'
                },
        
                {
                    id:3,
                    first_name: 'Fred',
                    last_name: 'Rick',
                    email: 'fredrick@gmail.com',
                    password: 'Fred2012',
                    confirm_password: 'Fred2012'
                },
        
                {
                    id:4,
                    first_name: 'Mary',
                    last_name: 'Amos',
                    email: 'maryseleb@gmail.com',
                    password: 'Maria2013',
                    confirm: 'Maria2013'
                },
        
                {
                    id:5,
                    first_name: 'Amen',
                    last_name: 'Halelluja',
                    email: 'amen@gmail.com',
                    password: 'AmenAmen2014',
                    confirm: 'AmenAmen2014'
                }
            ]
            
            const someOne = req.query.id;
            if (!clients[someOne]) {
                return res.send('Acccount does not exist');
            }
                return res.send(clients[someOne]);
            
        }
        
}

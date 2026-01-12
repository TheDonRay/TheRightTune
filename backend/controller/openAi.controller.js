//Call the openAi library etc 

//remeber the SDLC : 
/*planning, analysis, design, implementation, testing and integration, maintanence. */
const aidj = async (req, res) => { 
    // implement try and catch case 
    // for now just for testing purposes we can start of with   
    // remember get requests should not have body params, so like waht you had before it should not have that req.body from the mood 
    try { 
        const { mood } = req.query;  
        res.status(200).json({ 
            backendResponse: mood
        }); 
        console.log('backend said: ', mood); 

    } catch (error) { 
        res.status(500).json({ 
            backendError: 'Nothing recieved in the backend'
        }); 
    } 
} 

module.exports = aidj; 
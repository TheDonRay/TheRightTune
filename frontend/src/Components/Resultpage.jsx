import { useLocation } from "react-router-dom"; 

export default function ResultsPage() { 
    const location = useLocation(); 
    const { recommendations } = location.state || {}; 
    return ( 
        <> 
            <h1>Results Page</h1>  
            <p>{recommendations?.backendResponse}</p>
        </>
    ); 
} 


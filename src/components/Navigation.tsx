import { useState } from "react";
import * as React from 'react';
import { jsTitle } from "../types/type";

const Navigation: React.FC = () =>{

    const [javascriptTitles, setJavascriptTitles] = useState<jsTitle[]>([])

    React.useEffect(() => {
        setJavascriptTitles(["strings", "numbers", "arrays", "variables", "objects", "data_variables"].map((t,i)=>({"title": "javascript", "subtitle": t, "id": i})))
    }, []);

    return ( 
    <div>
       <h2>Welcome to Javascript Tutorial</h2>

       <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 border p-3 m-2">
                    <h4>Javascript</h4>
                    <ul>
                        {
                            javascriptTitles.map((title, index)=> <li key={index}><a href={"/"+title["subtitle"]}>{title["subtitle"].substring(0,1).toUpperCase() + title["subtitle"].substring(1)}</a></li>)
                        }
                    </ul>
                </div>
            </div>
       </div>
    </div> 
    );
}

export default Navigation;
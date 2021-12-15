import React,{useState} from 'react';
import "./AdvancedSearch.css";

const AdvancedSearch = () => {
    const [isExpanded, setIsExpanded]=useState(false);

    return (
        <div className ="advanced-search-container">
            <div className= "advanced-search-content" 
            style={{maxHeight:isExpanded ? "100%" : 0}}>
                
            </div>
            <div className="advanced-search-btn" 
            onClick={() => 
            setIsExpanded(!isExpanded)}>
                Click me!
            </div>
        </div>
    )
}

export default AdvancedSearch;

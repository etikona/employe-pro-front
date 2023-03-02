import React, { useState } from 'react';

const FAQ = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }
    
    return (
        <div>
            <div>
            <button className='text-left text-black' onClick={handleCollapse}>
                {isCollapsed ? <span>  &#x25BC; </span> : <span> Why our first product is graphics Pro?  &#x25B2;</span>}
            </button>
            {isCollapsed && <div className='text-left text-black mx-20'> A graphics design product could be a natural choice for a company's first product if they aim to serve the creative industry. By providing a comprehensive toolset for graphic designers, artists, and creative professionals, the company could establish itself as a reliable and innovative provider of creative solutions.</div>}
            </div>
            
          
        </div>
    );
};

export default FAQ;
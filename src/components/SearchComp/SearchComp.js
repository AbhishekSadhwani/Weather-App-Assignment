import { Search } from 'lucide-react';
import "./SearchComp.css";

const SearchComp = () => {
    return (
        <div className="theme search-container">
            <div className="search-box">
                <Search className="search-icon" />
                <form className="search-form">
                    <input 
                        className="search-input" 
                        placeholder="Search location..." 
                        type="text" 
                        name="city" 
                    />
                </form>
            </div>
        </div>
    );
}

export default SearchComp
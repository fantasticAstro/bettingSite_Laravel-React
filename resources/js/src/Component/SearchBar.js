import '../../../css/component/search_bar.css' ;
import $ from 'jquery' ;
import { useState } from 'react';

function SearchBar(props) {
    
    const [is_show_mobile, setShowMobile] = useState(false); 

    const showMobileSearchForm = () => {
        setShowMobile(!is_show_mobile) ;
        if(is_show_mobile) {
            $(".page-header .header-mark").css("display", "none") ;
            $(".page-header .sign-field").css("display", "none") ;
            $(".header-mobile-search-field .sign-icon").css("display", "none") ;
            $(".mobile-search-field").css("display", "block") ;
        } else {
            $(".page-header .header-mark").css("display", "block") ;
            $(".page-header .sign-field").css("display", "block") ;
            $(".header-mobile-search-field .sign-icon").css("display", "block") ;
            $(".mobile-search-field").css("display", "none") ;
            $(".mobile-search-field input").focus() ;
        }
    }
    return (
        <>
            <div class="header-desktop-search-field">
                <input placeholder="Search Events"/>
                <span class="icon"><i className="fa fa-search"></i></span>
            </div>
            <div class='header-mobile-search-field'>
                <div onClick={()=>showMobileSearchForm()} class='sign-icon'>
                    <i class='fa fa-search'></i>
                </div>
                <div class='mobile-search-field'>
                    <input placeholder="Search Events"/>
                    <span class="icon" onClick={()=>showMobileSearchForm()}><i className="fa fa-close" ></i></span>
                </div>
            </div>
        </>
    )
}
export default SearchBar ;
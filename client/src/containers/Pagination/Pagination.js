import React,{useState,useEffect} from 'react'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {setPageOfItems} from '../../store/actions/actions'
import './Pagination.css'

const Pagination = (props) => {
    const [pageNumber,setPageNumber] = useState(1)
    useEffect(()=>{
        setPage(pageNumber) 
    },[props.filter])

    const setPage = (page) => {
        const items = props.filter;
        let pager = props.pager;

        if (page < 1) {
            return;
        }

        pager = getPager(items.length, page);

        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        if(props.search){
            props.setPager(pager);
            props.setPageOfItems(pageOfItems);
        }  
    }

    const getPager = (totalItems, currentPage, pageSize) => {
        currentPage = currentPage || 1;
        pageSize = pageSize || 4;
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage, endPage;

        if (totalPages <= 4) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 4;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    return (
        <div>
           <ul className="pagination">
                <li>
                    <button 
                        disabled={props.pager.currentPage === 1 ? true : false} 
                        onClick={() => setPage(1)}
                    >First</button>
                </li>
                <li>
                    <button 
                        disabled={props.pager.currentPage === 1 ? true : false} 
                        onClick={() => setPage(props.pager.currentPage - 1)}
                    >Previous</button>
                </li>
                {props.pager.pages === undefined ?<></>: props.pager.pages.map((page, index) =>
                    <li key={index} className={props.pager.currentPage === page ? 'active' : ''}>
                        <button 
                            disabled={props.pager.currentPage === page ? true : false} 
                            onClick={() => setPage(page)}
                            >{page}</button>
                    </li>
                )}
                <li>
                    <button 
                        disabled={props.pager.currentPage === props.pager.totalPages ? true : false} 
                        onClick={() => setPage(props.pager.currentPage + 1)}
                    >Next</button>
                </li>
                <li>
                    <button 
                        disabled={props.pager.currentPage === props.pager.totalPages ? true : false} 
                        onClick={() => setPage(props.pager.totalPages)}
                    >Last</button>
                </li>
            </ul>
        </div>
    )
}


const mapDispachToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            setPageOfItems
        },dispatch)
    }
}

export default connect(null,mapDispachToProps)(Pagination)
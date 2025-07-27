import {AccordionCollapsed, AccordionUnCollapsed, PaginationContainer, ReviewContainer} from "./styles.ts";
import {useState} from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Review} from "../../Review/ui/Review.tsx";
import Pagination from '@mui/material/Pagination';


export const Accordion = () => {
    const [isVisible, setIsVisible] = useState(false)

    const visibleHandler = () => {
        setIsVisible(prev => !prev)
    }

    return (
        <ReviewContainer>
            <AccordionCollapsed onClick={visibleHandler}>
                <div>Отзывы</div>
                
                <>{isVisible ? <ExpandLessIcon/> :
                    <ExpandMoreIcon/>}</>
            </AccordionCollapsed>
            <>{isVisible && <AccordionUnCollapsed>
                <Review/>
                <PaginationContainer><Pagination count={5} size="small"/></PaginationContainer>
            </AccordionUnCollapsed>}</>
        </ReviewContainer>
    );

};

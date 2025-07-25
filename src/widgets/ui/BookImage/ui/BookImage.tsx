import {
    BoxBook,
    BoxLeft,
    BoxLeftOne,
    BoxRight,
    ContainerLine,
    LineHorizontal,
    RombBox,
    RombBoxSmall
} from "./styles.ts";

interface BookImageProps {
    author: string | undefined;
    bookName: string | undefined;
}

export const BookImage = (props: BookImageProps) => {
    const {author = 'author', bookName = 'bookName'} = props
    return (
        <BoxBook>
            <BoxLeftOne/>
            <BoxLeft/>
            <BoxRight>
                <h4>{author?.toUpperCase()}</h4>
                <h3>{bookName?.toUpperCase()}</h3>
                <ContainerLine>
                    <RombBoxSmall/>
                    <RombBox/>
                    <LineHorizontal/>
                    <RombBox/>
                    <RombBoxSmall/>
                </ContainerLine>
            </BoxRight>
        </BoxBook>
    );
};

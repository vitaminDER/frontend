import {
    BoxBook,
    BoxLeft,
    BoxLeftOne,
    BoxRight,
    ContainerLine,
    LineHorizontal,
    RombBox,
    RombBoxSmall,
    TextName
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
                <TextName>{author?.toUpperCase()}</TextName>
                <TextName>{bookName?.toUpperCase()}</TextName>
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

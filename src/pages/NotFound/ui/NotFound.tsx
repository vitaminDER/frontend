import {ContentContainer} from "./styles.ts";
import {ErrorComponent} from "@/widgets/ui/ErrorComponent";

export const NotFound = () => {
    return (
        <ContentContainer>
            <ErrorComponent image={'errorNotFound'} width='400px' height={'400px'}/>
        </ContentContainer>
    );
};

import {ReactNode} from "react";
import {Dialog} from '@headlessui/react';
import CardContainer from "./card-container";
// import { CardContainer } from "orb-components";

export default function DialogBase(props: {
    isOpen: boolean,
    onClose: () => void,
    dialogTitle: string | React.ReactNode,
    children: ReactNode,
    dialogActionArea?: string | React.ReactNode,
    headerActionButtonText?: string,
    dialogHeaderSubText?: string,
    headerActionButtonClick?: () => void,
}) {
    return (<>
        <Dialog
            open={props.isOpen}
            onClose={props.onClose} >

            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center p-2">

                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto w-10/12 ">
                    <CardContainer
                        cardHeader={props.dialogTitle}
                        cardHeaderSubText={props.dialogHeaderSubText}
                        cardActionArea={props.dialogActionArea}                        
                        
                    >
                        {props.children}
                    </CardContainer>
                </Dialog.Panel>
            </div>
        </Dialog>
    </>)
}
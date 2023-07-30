import { Transition } from '@headlessui/react';
import { XMarkIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function CardContainer(props: {
    cardHeader: string | React.ReactNode,
    cardHeaderSubText?: string,
    children: React.ReactNode,
    cardActionArea?: string | React.ReactNode,
    isCollapseable?: boolean,
    isCloseable?: boolean,
    onCollapseToggle?: (isCollapsed: boolean) => void,
    onCloseToggle?: (isCollapsed: boolean) => void,

}) {
    const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
    const [isClosed, setIsClosed] = React.useState<boolean>(false);

    if (isClosed) return (<></>);

    return (
        <div
            className={
                `container mx-auto 
            text-gray-900 dark:text-gray-100  
            dark:from-gray-600 dark:to-gray-700 from-gray-100 to-gray-200 bg-gradient-to-b
            border-2 border-indigo-400 rounded-lg 
             sm:px-3 lg:px-2
            `
            }>
            <div
                className="divide-y-2 divide-gray-200 rounded-lg ">

                {/* Header */}
                <div className="px-4 py-4 sm:px-6 relative transform overflow-hidden rounded-lg text-left">
                    {
                        props.isCloseable &&
                        <div className="absolute right-0 top-0 pr-4 pt-4 ">
                            <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => setIsClosed(true)}
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    }
                    {
                        props.isCollapseable &&
                        <div className="absolute right-8 top-0 pr-4 pt-4 ">
                            <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => setIsCollapsed((prev) => !prev)}
                            >
                                <span className="sr-only">Close</span>
                                {
                                    !isCollapsed &&
                                    <ChevronDoubleUpIcon className="h-6 w-6" aria-hidden="true" />
                                }
                                {
                                    !!isCollapsed &&
                                    <ChevronDoubleDownIcon className="h-6 w-6" aria-hidden="true" />
                                }


                            </button>
                        </div>
                    }
                    <div className="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
                        <div className="mt-4 ml-4">
                            <>
                                {   /*  If a string, render it along with sub text*/
                                    typeof (props.cardHeader) === 'string' &&
                                    <>
                                        <h2 className="leading-6 text-lg font-bold">{props.cardHeader}</h2>

                                    </>
                                }

                                {   /*  If a component, just render it */
                                    React.isValidElement(props.cardHeader) &&
                                    <div className=''>
                                        {props.cardHeader}
                                    </div>
                                }
                                {
                                    !!props.cardHeaderSubText &&
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                        {props.cardHeaderSubText}
                                    </p>
                                }
                            </>
                        </div>

                    </div>
                </div>

                {/* Body */}
                <div className="p-1.5 bg-inherit overflow-x-auto">
                    <Transition.Root
                        show={!isCollapsed} as={React.Fragment}
                    >
                        <Transition.Child
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-y-full"
                            enterTo="translate-y-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-y-0"
                            leaveTo="-translate-y-full"
                        >
                            {props.children}
                        </Transition.Child>
                    </Transition.Root>

                </div>

                {/* Action */}
                {!!props.cardActionArea &&
                    <div className="px-4 py-4 sm:px-6">
                        <span className="inline-flex gap-2 rounded-md isolate">
                            {props.cardActionArea}
                        </span>
                    </div>
                }
            </div>
        </div>);
}
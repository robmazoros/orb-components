import { Listbox, Transition } from "@headlessui/react";
import React from "react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { ClassNames } from "../utils/class-utils";


export interface InputPickerItem {
    id: string, label: string, secondaryText?: string
}

export default function InputPicker<T extends InputPickerItem>(props: {
    items: T[],
    itemSelected: T | null,
    onItemSelected: (item: T | null) => void,
    formLabel: string

}) {
    const [selected, setSelected] = React.useState<T | null>(props.itemSelected);
    return (
        <Listbox
            value={selected}
            onChange={(newVal) => {
                setSelected(newVal);
                props.onItemSelected(newVal);

            }}

        >
            {({ open }) => (
                <>
                    <Listbox.Label className="block leading-6">{props.formLabel}</Listbox.Label>

                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-gray-100 dark:bg-gray-600 py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="inline-flex w-full truncate">
                            <span className="truncate">{selected?.label}</span>
                            <span className="ml-2 truncate text-gray-500">{selected?.secondaryText}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        show={open}
                        as={React.Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 overflow-auto rounded-md bg-gray-100 dark:bg-gray-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {props.items.map((item) => (
                                <Listbox.Option
                                    key={item.id}
                                    className={({ active }) =>
                                        ClassNames(
                                            
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                    }
                                    value={item}
                                >
                                    {({ selected, active, disabled }) => (
                                        <>
                                            <div className="flex flex-row gap-2">
                                                {selected && <div
                                                    className={ClassNames(
                                                        active ? 'text-gray-100 dark:text-gray-600' : 'text-indigo-600',
                                                        selected ? 'text-amber-500' : ''
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" />
                                                </div>}
                                                <span className={ClassNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                    {item.label}
                                                </span>
                                                <span className={'ml-2 truncate'}>
                                                    {item.secondaryText}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </>
            )}
        </Listbox>)
}
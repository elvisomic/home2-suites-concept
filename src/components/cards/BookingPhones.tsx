import { useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import useMeasure from 'react-use-measure'
import { motion, useAnimate, useDragControls, useMotionValue } from 'framer-motion';
import React from "react";
import { Button, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell, DateInput, DateRangePicker, DateSegment, Dialog, Heading, I18nProvider, Label, RangeCalendar } from 'react-aria-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { createPortal } from "react-dom";

export const BookingPhones = () => {

    const [countAdults, setCountAdults] = React.useState(1);
    const [countChildren, setCountChildren] = React.useState(0);

    const GuestIncAdults = () => {
        setCountAdults(countAdults + 1);
    }

    const GuestDecAdults = () => {
        setCountAdults(prev => Math.max(1, prev - 1));
    }

    const GuestIncChildren = () => {
        setCountChildren(countChildren + 1);
    }

    const GuestDecChildren = () => {
        setCountChildren(prev => Math.max(0, prev - 1));
    }

    const DoneButton = () => {
        setOpen(false)
        alert("Thank you for booking!");
    }

    const startDay: CalendarDate = today("UTC");
    const endDay: CalendarDate = startDay.add({ days: 6 });


    const [open, setOpen] = useState(false);

    return (
        <div className="z-60">
            <button onClick={() => setOpen(true)} className=" w-full h-15 rounded-full bg-[#AAAD00] px-4 py-2 text-white transition-colors hover:bg-[#AAAD00]/70">
                BOOK NOW
            </button>

            <BookingPhonesDrawer open={open} setOpen={setOpen}>
                <I18nProvider locale="en-US">
                    <DateRangePicker defaultValue={{ start: startDay, end: endDay }} firstDayOfWeek='mon' minValue={today(getLocalTimeZone())}>
                        <div className="w-full grid sm:grid-cols-[62%_38%] justify-center sm:justify-start">
                            <RangeCalendar visibleDuration={{ months: 1 }} className="w-92 rounded-xl p-2 border-2 bg-white shadow-2xl h-auto">
                                <header>
                                    <div className='flex justify-between items-center mb-4 mx-2'>
                                        <Button slot="previous">
                                            <div className='p-2 border-2 w-12 rounded-xl flex justify-center items-center hover:transition ease-in-out duration-500 hover:bg-[#AAAD00]/70 hover:text-white'>
                                                <ChevronLeft size={20} className='mr-' />
                                            </div>
                                        </Button>
                                        <Heading className='relative text-[16px]' />
                                        <Button slot="next">
                                            <div className='p-2 border-2 w-12 rounded-xl flex justify-center items-center hover:transition ease-in-out duration-500 hover:bg-[#AAAD00]/70 hover:text-white'>
                                                <ChevronRight size={20} />
                                            </div>
                                        </Button>
                                    </div>
                                </header>
                                <div className="flex overflow-auto">
                                    <CalendarGrid className=''>
                                        <CalendarGridHeader>
                                            {(day) => (
                                                <CalendarHeaderCell style={{ color: 'black' }}>
                                                    {day}
                                                </CalendarHeaderCell>
                                            )}
                                        </CalendarGridHeader>
                                        <CalendarGridBody className=''>
                                            {date => <CalendarCell className={`
                                          data-[disabled]:text-red-500 
                                          data-[outside-month]:hidden 
                                          data-[selected]:text-white data-[hovered]:bg-[#AAAD00]/70 data-[hovered]:text-white
                                          data-[selected]:bg-[#AAAD00]/70 data-[selected]:p-3 data-[selected]:border-t-2 data-[selected]:border-[#AAAD00] data-[selected]:border-b-2
                                          data-[selection-start]:rounded-l-full data-[selection-start]:border-l-2 data-[selection-start]:border-[#AAAD00] 
                                          data-[selection-end]:rounded-r-full data-[selection-end]:border-r-2 data-[selection-end]:border-[#AAAD00] 
                                          p-4 text-black text-center select-none my-[2px] h-[48px] flex justify-center items-center cursor-pointer`} date={date} />}
                                        </CalendarGridBody>
                                    </CalendarGrid>
                                </div>
                            </RangeCalendar>
                            <div className="w-full hidden sm:block">
                                <div className='border-r-2 sm:px-2 bg-white rounded-xl'>
                                    <Label className='text-[16px] ml-1'>Check-In</Label>
                                    <DateInput slot="start" className={``}>
                                        {(segment) => { return <DateSegment segment={segment} className="shadow-xl px-1 sm:text-[24px]" /> }}
                                    </DateInput>
                                </div>
                                <div className='my-2 border-r-2 sm:px-2 bg-white rounded-xl'>
                                    <Label className='text-[16px] ml-1'>Check-Out</Label>
                                    <DateInput slot="end" className={``}>
                                        {(segment) => { return <DateSegment segment={segment} className="shadow-xl px-1 sm:text-[24px]" /> }}
                                    </DateInput>
                                </div>
                                <Dialog className="rounded-xl p-3 border-2 bg-white shadow-2xl h-60 w-full mr-28">

                                    <div className="my-4 w-full h-10 flex justify-between items-center">
                                        <Label className="text-[16px] mr-2">Adults</Label>
                                        <div className="h-10 mx-2 w-30 border-black border-1 rounded-lg flex items-center justify-between px-2">
                                            <Button isDisabled={countAdults <= 1} onPress={GuestDecAdults} className="data-[disabled]:cursor-not-allowed group flex items-center justify-center cursor-pointer">
                                                <img src='src/assets/svg/minus.svg' className='h-5 w-5 group-data-[disabled]:opacity-50 transition-opacity' />
                                            </Button>

                                            <Label className="text-[20px] h-full w-10 flex justify-center items-center px-2">{countAdults}</Label>

                                            <Button onPress={GuestIncAdults} className="flex items-center justify-center cursor-pointer">
                                                <img src='src/assets/svg/plus.svg' className='h-5 w-5' />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="my-4 w-full h-10 flex justify-between items-center overflow-hidden">
                                        <Label className="text-[16px] mr-2">Children</Label>
                                        <div className="h-10 mx-2 w-30 border-black border-1 rounded-lg flex items-center justify-between px-2">
                                            <Button isDisabled={countChildren <= 0} onPress={GuestDecChildren} className="data-[disabled]:cursor-not-allowed group flex items-center justify-center cursor-pointer">
                                                <img src='src/assets/svg/minus.svg' className='h-5 w-5 group-data-[disabled]:opacity-50 transition-opacity' />
                                            </Button>
                                            <Label className="text-[20px] h-full w-10 flex justify-center items-center px-2">{countChildren}</Label>

                                            <Button onPress={GuestIncChildren} className="flex items-center justify-center cursor-pointer ">
                                                <img src='src/assets/svg/plus.svg' className='h-5 w-5' />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className='group mt-12 h-auto rounded-md w-full flex items-center justify-center border-2 border-[#AAAD00] hover:bg-[#AAAD00]/70 hover:transition ease-in-out duration-700'>
                                        <Button onPress={() => DoneButton()} className={`text-[#AAAD00] group-hover:text-white group-hover:transition ease-in-out duration-700 w-full h-full`}>BOOK NOW <br /> ({countAdults} Adults, {countChildren} Children) </Button>
                                    </div>

                                </Dialog>
                            </div>
                            <div className="my-4 sm:hidden">
                                <Dialog className="rounded-xl p-3 border-2 bg-white shadow-2xl h-60 w-full mr-28">

                                    <div className="my-4 w-full h-10 flex justify-between items-center">
                                        <Label className="text-[16px] mr-2">Adults</Label>
                                        <div className="h-10 mx-2 w-30 border-black border-1 rounded-lg flex items-center justify-between px-2">
                                            <Button isDisabled={countAdults <= 1} onPress={GuestDecAdults} className="data-[disabled]:cursor-not-allowed group flex items-center justify-center cursor-pointer">
                                                <img src='src/assets/svg/minus.svg' className='h-5 w-5 group-data-[disabled]:opacity-50 transition-opacity' />
                                            </Button>

                                            <Label className="text-[20px] h-full w-10 flex justify-center items-center px-2">{countAdults}</Label>

                                            <Button onPress={GuestIncAdults} className="flex items-center justify-center cursor-pointer">
                                                <img src='src/assets/svg/plus.svg' className='h-5 w-5' />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="my-4 w-full h-10 flex justify-between items-center overflow-hidden">
                                        <Label className="text-[16px] mr-2">Children</Label>
                                        <div className="h-10 mx-2 w-30 border-black border-1 rounded-lg flex items-center justify-between px-2">
                                            <Button isDisabled={countChildren <= 0} onPress={GuestDecChildren} className="data-[disabled]:cursor-not-allowed group flex items-center justify-center cursor-pointer">
                                                <img src='src/assets/svg/minus.svg' className='h-5 w-5 group-data-[disabled]:opacity-50 transition-opacity' />
                                            </Button>
                                            <Label className="text-[20px] h-full w-10 flex justify-center items-center px-2">{countChildren}</Label>

                                            <Button onPress={GuestIncChildren} className="flex items-center justify-center cursor-pointer ">
                                                <img src='src/assets/svg/plus.svg' className='h-5 w-5' />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className='group mt-12 h-auto rounded-md w-full flex items-center justify-center border-2 border-[#AAAD00] hover:bg-[#AAAD00]/70 hover:transition ease-in-out duration-700'>
                                        <Button onPress={() => DoneButton()} className={`text-[#AAAD00] group-hover:text-white group-hover:transition ease-in-out duration-700 w-full h-full`}>BOOK NOW <br /> ({countAdults} Adults, {countChildren} Children) </Button>
                                    </div>

                                </Dialog>
                            </div>
                        </div>
                    </DateRangePicker>
                </I18nProvider>
            </BookingPhonesDrawer >
        </div >
    )
}


const BookingPhonesDrawer = ({ open, setOpen, children }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; children: ReactNode }) => {
    const [scope, animate] = useAnimate();
    const [drawerRef, { height }] = useMeasure();
    const y = useMotionValue(0);
    const controls = useDragControls();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [open]);

    const handleClose = async () => {
        document.body.style.overflow = "";

        animate(scope.current, { opacity: [1, 0], });

        const yStart = typeof y.get() === "number" ? y.get() : 0;

        await animate("#drawer", { y: [yStart, height], });
        setOpen(false);
    }

    if (!open) return null;

    return createPortal(
        <motion.div
            ref={scope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleClose}
            className="fixed inset-0 z-[2000] bg-neutral-950/60 flex justify-end items-end"
        >
            <motion.div
                id="drawer"
                ref={drawerRef}
                onClick={(e) => e.stopPropagation()}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ ease: "easeInOut" }}
                style={{ y }}
                drag="y"
                dragControls={controls}
                dragListener={false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0, bottom: 0.5 }}
                onDragEnd={() => {
                    if (y.get() >= 100) {
                        handleClose();
                    }
                }}
                className="absolute bottom-0 h-[53vh] w-full overflow-hidden rounded-t-3xl bg-gray-200 z-[2010]"
            >
                <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-gray-200 p-4">
                    <button
                        onPointerDown={(e) => controls.start(e)}
                        className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-600 active:cursor-grabbing"
                    />
                </div>

                <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">{children}</div>
            </motion.div>
        </motion.div>,
        document.body
    );
};
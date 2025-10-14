import { Button, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell, DateInput, DateRangePicker, DateSegment, Dialog, Group, Heading, I18nProvider, Label, Popover, RangeCalendar } from 'react-aria-components';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import React from 'react';

export default function HotelDatePicker() {
  const CalendarTriggerRef = React.useRef(null);
  const GuestsTriggerRef = React.useRef(null);

  const [openCalendar, setOpenCalendar] = React.useState(false);
  const [openGuests, setOpenGuests] = React.useState(false);

  const [countAdString, setCountAdString] = React.useState("1");
  const [countChString, setCountChString] = React.useState("0");

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
    setCountAdString(countAdults.toString());
    setCountChString(countChildren.toString());

    setOpenGuests(false);
  }

  const startDay: CalendarDate = today("UTC");
  const endDay: CalendarDate = startDay.add({ days: 6 });

  return (
    <div className="h-33 sm:h-22 md:h-24 lg:h-24 xl:h-30 w-full border-2 rounded-2xl bg-white">
      <I18nProvider locale="en-US">
        <DateRangePicker defaultValue={{ start: startDay, end: endDay }} firstDayOfWeek='mon' minValue={today(getLocalTimeZone())} defaultOpen={false}
          isOpen={openCalendar}
          onChange={() => setOpenCalendar(false)}
          className="h-full select-none">
          <div>
            <Group className="flex py-1 sm:py-2 md:py-3 lg:py-5 xl:py-6 md:px-2 h-full">
              <div className='border-r-2 px-0 md:px-2 lg:px-4 border-black lg:w-[260px] xl:w-[310px] 2xl:w-[350px] 3xl:w-[375px]'>
                <Label className='text-[13px] lg:text-[16px] ml-1'>Check-In</Label>
                <DateInput slot="start" className={``}>
                  {(segment) => {
                    if (segment.type === "month") {
                      return (
                        <span className="px-1 text-[13px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[28px]">
                          {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                            new Date(2025, Number(segment.text) - 1, 1)
                          )}
                        </span>
                      );
                    }

                    if (segment.type === "literal") {

                      if (segment.text === "/") {
                        return <span>, </span>;
                      }
                      return <span>{segment.text}</span>;
                    }

                    return <DateSegment segment={segment} className="px-1 text-[13px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[28px]" />;
                  }}
                </DateInput>
              </div>

              <div className='border-r-2 md:px-2 lg:px-4 border-black lg:w-[260px] xl:w-[310px] 2xl:w-[350px] 3xl:w-[375px]'>
                <Label className='text-[13px] lg:text-[16px] ml-1'>Check-Out</Label>
                <DateInput slot="end" className={``}>
                  {(segment) => {
                    if (segment.type === "month") {
                      return (
                        <span className="px-1 text-[13px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[28px]">
                          {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                            new Date(2025, Number(segment.text) - 1, 1)
                          )}
                        </span>
                      );
                    }

                    if (segment.type === "literal") {

                      if (segment.text === "/") {
                        return <span>, </span>;
                      }
                      return <span className=''>{segment.text}</span>;
                    }

                    return <DateSegment segment={segment} className="px-1 text-[13px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[28px]" />;
                  }}
                </DateInput>
              </div>

              <Button onPress={() => setOpenCalendar(true)} ref={CalendarTriggerRef} className={`cursor-pointer hover:text-white px-2 hover:bg-[#AAAD00]/70 hover:transition ease-in-out duration-300 md:px-2 flex flex-col sm:flex-row justify-center items-center border-r-2 border-l-0 border-black`}>
                <Label className='text-[12px] md:text-[14px] 2xl:text-[18px] 3xl:text-[20px]'>CHOOSE DATES</Label>
                <CalendarIcon className='md:mx-2'></CalendarIcon>
              </Button>

              <Button onPress={() => setOpenGuests(true)} ref={GuestsTriggerRef} className={`cursor-pointer px-0 hover:text-white hover:bg-[#AAAD00]/70 hover:transition ease-in-out duration-300 md:px-1 flex justify-center items-center md:border-r-2 border-l-0 border-black`}>
                <Label className='text-[12px] md:text-[14px] 2xl:text-[18px] 3xl:text-[20px] '>{countAdString} Adults, {countChString} Childrens</Label>
              </Button>

              <Button className={`cursor-pointer bg-[#AAAD00] text-white hover:bg-[#AAAD00]/70 hover:transition ease-in-out duration-500  2xl:mx-2 3xl:mx-2 p-3 sm:flex overflow-hidden md:w-25 md:mx-2 w-28 hidden lg:w-35 lg:mx-2 2xl:w-45 justify-center items-center rounded-2xl`}>
                <Label>BOOK NOW</Label>
              </Button>

            </Group>
          </div>
          <Popover triggerRef={CalendarTriggerRef} isOpen={openCalendar} onOpenChange={setOpenCalendar} className="">
            <Dialog className=''>
              <RangeCalendar visibleDuration={{ months: 1 }} className="rounded-xl p-2 border-2 bg-white shadow-2xl h-auto">
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
            </Dialog>
          </Popover>

          <Popover triggerRef={GuestsTriggerRef} isOpen={openGuests} onOpenChange={setOpenGuests} className="">
            <Dialog className="rounded-xl p-3 border-2 bg-white shadow-2xl h-60 w-[355px] mr-28">

              <div className="my-4 w-full h-10 flex justify-between items-center">
                <Label className="text-[16px] mr-2">Adults</Label>
                <div className="h-10 mx-2 w-30 border-black border-1 rounded-lg flex items-center justify-between px-2">
                  <Button isDisabled={countAdults <= 1} onPress={GuestDecAdults} className="data-[disabled]:cursor-not-allowed group flex items-center justify-center cursor-pointer">
                    <img src='home2-suites-concept/assets/svg/minus.svg' className='h-5 w-5 group-data-[disabled]:opacity-50 transition-opacity' />
                  </Button>

                  <Label className="text-[20px] h-full w-10 flex justify-center items-center px-2">{countAdults}</Label>

                  <Button onPress={GuestIncAdults} className="flex items-center justify-center cursor-pointer">
                    <img src='home2-suites-concept/assets/svg/plus.svg' className='h-5 w-5' />
                  </Button>
                </div>
              </div>

              <div className="my-4 w-full h-10 flex justify-between items-center overflow-hidden">
                <Label className="text-[16px] mr-2">Children</Label>
                <div className="h-10 mx-2 w-30 border-black border-1 rounded-lg flex items-center justify-between px-2">
                  <Button isDisabled={countChildren <= 0} onPress={GuestDecChildren} className="data-[disabled]:cursor-not-allowed group flex items-center justify-center cursor-pointer">
                    <img src='home2-suites-concept/assets/svg/minus.svg' className='h-5 w-5 group-data-[disabled]:opacity-50 transition-opacity' />
                  </Button>
                  <Label className="text-[20px] h-full w-10 flex justify-center items-center px-2">{countChildren}</Label>

                  <Button onPress={GuestIncChildren} className="flex items-center justify-center cursor-pointer ">
                    <img src='home2-suites-concept/assets/svg/plus.svg' className='h-5 w-5' />
                  </Button>
                </div>
              </div>

              <div className='group mt-15 h-10 rounded-md w-full flex items-center justify-center border-2 border-[#AAAD00] hover:bg-[#AAAD00]/70 hover:transition ease-in-out duration-700'>
                <Button onPress={() => DoneButton()} className={`text-[#AAAD00] group-hover:text-white group-hover:transition ease-in-out duration-700 w-full h-full`}>DONE</Button>
              </div>

            </Dialog>
          </Popover>
        </DateRangePicker>

      </I18nProvider>
    </div >
  );
}


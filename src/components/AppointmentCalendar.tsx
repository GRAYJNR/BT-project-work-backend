import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import timeGridPlugin from "@fullcalendar/timegrid";




interface IAppointmentData {
    date: string,
    time?: string,
    name?: string
}


export default function AppointmentCalendar() {

    const [appointmentDate, setAppointmentDate] = useState<IAppointmentData | null>();
    const [isOpen, setIsOpen] = useState<boolean>(false);



    return (
        <>

            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                initialView="timeGridWeek"
                selectable={true}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                dateClick={(e) => {
                    console.log(e)
                    setIsOpen(!isOpen)
                    setAppointmentDate({
                        date: e.dateStr.toString(),
                    })

                }}

            />



            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Appointment Form
                                    </Dialog.Title>
                                    <div className="mt-2">


                                        <form>

                                            <div className="flex flex-col gap-4">

                                                <div className='col-span-full'>

                                                    {
                                                        (new Date(appointmentDate?.date ?? "").toUTCString())
                                                    }

                                                </div>



                                                <div className='col-span-full'>
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        id="fullName"
                                                        className="block w-full rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder="John Doe"
                                                    />
                                                </div>



                                                <div className='col-span-full'>
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        id="phoneNumber"
                                                        className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder="+233 111 222 11"
                                                    />
                                                </div>


                                                <div className="col-span-full text-right">
                                                    <button
                                                        type="button"
                                                        className="w-6/12 rounded-md border border-transparent bg-blue-100  text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        Comfirm Booking
                                                    </button>
                                                </div>



                                            </div>







                                        </form>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}



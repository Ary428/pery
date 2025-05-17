import { Fragment } from "react";
import { Dialog, DialogBackdrop, Transition } from "@headlessui/react";

interface LoaderProps {
  show: boolean;
}

export default function Loader({ show }: LoaderProps) {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" onClose={() => {}}>
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-90"
        >
          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <svg className="h-10 w-10 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

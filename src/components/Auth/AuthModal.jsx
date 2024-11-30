import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AuthModal = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [selectedTab, setSelectedTab] = useState(initialTab === 'login' ? 0 : 1);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="h-full flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex space-x-4 border-b mb-6">
            <Tab className={({ selected }) =>
              `w-full py-3 text-base font-medium focus:outline-none border-b-2 transition-all ${
                selected
                  ? 'text-primary border-primary'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`
            }>
              Login
            </Tab>
            <Tab className={({ selected }) =>
              `w-full py-3 text-base font-medium focus:outline-none border-b-2 transition-all ${
                selected
                  ? 'text-primary border-primary'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`
            }>
              Sign Up
            </Tab>
          </Tab.List>

          <Tab.Panels className="flex-1">
            <AnimatePresence mode="wait">
              <Tab.Panel className="h-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="h-full"
                >
                  <LoginForm onClose={onClose} />
                </motion.div>
              </Tab.Panel>
              <Tab.Panel className="h-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="h-full"
                >
                  <SignupForm onClose={onClose} />
                </motion.div>
              </Tab.Panel>
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Modal>
  );
};

export default AuthModal;
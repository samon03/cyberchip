import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [


  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      <div className="px-4 py-4 md:px-6 lg:px-10 lg:py-5">
        <div className="relative flex h-20 items-center justify-between">
          
          <div className="flex flex-1 items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              /> 
              <p className="p-4 text-white font-bold text-xl">CyberChip</p>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-md font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))}

            <button className="bg-gray-900 hover:bg-blue-700 text-white font-semibold rounded-full px-4 py-2">
                  Contact Us
            </button>
            </div>
          </div>

          {/* Hamburger button on Right (Mobile) */}
          <div className="flex sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <div className="py-4">
            <button className="bg-blue-600 hover:bg-gray-900 text-white font-semibold rounded-full px-4 py-2">
                    Contact Us
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
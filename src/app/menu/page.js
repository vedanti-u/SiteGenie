// import { CheckIcon } from '@heroicons/react/outline'

const create = {
    tiers: [
      {
        title: 'Box 1',
        price: 'Click Below',
        cta: 'Click to add URL',
        link: 'create', 
      },
      {
        title: 'Box 2',
        price: 'Box 2',
        cta: 'Click 2',
        link: '/box2', // Add a link property for Box 2
      },
      {
        title: 'Box 3',
        price: 'Box 3',
        cta: 'Click 3',
        link: '/box3', // Add a link property for Box 3
      },
    ],
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Home() {
    return (
      <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Make your own chatbot
        </h2>
      
        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {create.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                </p>
              </div>
  
              <a
                href={tier.link} // Use the link property for the href attribute
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                  'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
import PropTypes from 'prop-types'

export default function Navigation({ menuItems, generalSettings }) {
  const { title } = generalSettings

  return (
    <nav className="mb-28 flex items-center justify-between flex-wrap bg-indigo-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/">
          <span className="font-semibold text-xl tracking-tight">{title}</span>
        </a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {menuItems &&
            menuItems.map((item, n) => (
              <a
                key={n}
                target={item.target || ''}
                href={item.path}
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-opacity-90 mr-4"
              >
                {item.label}
              </a>
            ))}
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      target: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  generalSettings: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
  }),
}

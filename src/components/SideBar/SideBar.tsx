import type React from 'react'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { sidebarNavigation } from './sidebarNavigation'

const SideBar: React.FC = () => {
  const location = useLocation()

  return (
    <aside className="flex h-full w-85 flex-col border-r border-neutral-200 bg-sidebar shadow-sidebar">
      <nav className="flex-1 overflow-y-auto p-6 pr-4">
        <div className="space-y-6">
          {sidebarNavigation.map((category) => (
            <div key={category.title} className="space-y-2">
              <h3 className="px-3 text-small font-semibold tracking-wider text-text-light uppercase">
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item) => {
                  const isActive = location.pathname.includes(item.to)
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                          isActive
                            ? 'border-r-2 border-primary bg-primary-50 font-semibold text-primary'
                            : 'text-text-secondary hover:bg-neutral-100 hover:text-text-primary'
                        }`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <div className="border-t border-neutral-200 p-6 pt-4 pr-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-danger hover:bg-danger-light">
          <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
          <span className="font-medium">Sair do sistema</span>
        </button>
      </div>
    </aside>
  )
}

export default SideBar

import React from 'react'

export const Nav = () => {
  return (
    <div>
        <nav className="flex sm:justify-center space-x-4">
  {[
    ['Home', '/Home'],
    ['About', '/About'],
    ['BootCamp', '/BootCamp'],
    ['Reports', '/Reports'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>
    </div>
  )
}

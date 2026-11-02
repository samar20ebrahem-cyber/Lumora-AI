import { NavLink } from 'react-router-dom'
import {
    HiHome,
    HiFolder,
    HiShare,
    HiBookOpen,
    HiClipboardDocumentList,
    HiAcademicCap,
    HiArrowRightOnRectangle
} from 'react-icons/hi2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export function Sidebar() {

    const navItems = [
        { title: 'Dashboard', path: '/dashboard', icon: HiHome },
        { title: 'My Files', path: '/files', icon: HiFolder },
        { title: 'Mind Maps', path: '/mindmaps', icon: HiShare },
        { title: 'AI Explanation', path: '/explanation', icon: HiBookOpen },
        { title: 'Questions & Quizzes', path: '/quizzes', icon: HiClipboardDocumentList },
        { title: 'Certificates', path: '/certificates', icon: HiAcademicCap },
    ]

    return (
        <aside className="fixed left-0 top-[72px] z-40 h-[calc(100vh-72px)] w-16 border-r border-[#E8EBDD] bg-white px-2 py-6 transition-all duration-300 md:w-64 md:px-4">

            <ul className="flex flex-col gap-2">

                {navItems.map((item) => {
                    const Icon = item.icon

                    return (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                title={item.title}
                                className={({ isActive }) =>
                                    `flex items-center justify-center gap-3 rounded-lg px-2 py-3 font-semibold transition-colors md:justify-start md:px-4 ${isActive
                                        ? 'bg-[#E8EBDD] text-[#34483A]'
                                        : 'text-[#667368] hover:bg-[#E8EBDD]'
                                    }`
                                }
                            >
                                <Icon className="h-5 w-5 shrink-0" />

                                <span className="hidden whitespace-nowrap md:inline">
                                    {item.title}
                                </span>
                            </NavLink>
                        </li>
                    )
                })}

                <li className="mt-4">
                    <button
                        title="Log Out"
                        className="flex w-full items-center justify-center gap-3 rounded-lg px-2 py-3 text-[#667368] transition-colors hover:bg-[#E8EBDD] md:justify-start md:px-4"
                    >
                        <HiArrowRightOnRectangle className="h-5 w-5 shrink-0" />

                        <span className="hidden md:inline">Log Out</span>
                    </button>
                </li>

            </ul>
        </aside>
    )
}

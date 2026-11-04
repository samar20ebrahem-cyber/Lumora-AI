import { NavbarDash } from './NavbarDash/NavbarDash.tsx'
import { Sidebar } from './Sidebar/Sidebar.tsx'
import { HomeDash } from './PagesDash/HomeDash/HomeDash.tsx'
import { MindMaps } from './PagesDash/MindMaps/MindMaps.tsx'
import { Explanation } from './PagesDash/Explanation/Explanation.tsx'
import { Quizzes } from './PagesDash/Quizzes/Quizzes.tsx'
import {Routes ,Route} from 'react-router-dom'
export function ShowDashboard() {
    return (
        <>
            <NavbarDash />
            <Sidebar />
            <main className="ml-16 md:ml-64 mt-[72px] min-h-[calc(100vh-72px)] bg-[#F7F5EC] p-8">
                <Routes>
                    <Route path="/dashboard" element={<HomeDash />} />
                    <Route path="/mindmaps" element={<MindMaps />} />
                    <Route path='/explanation' element={<Explanation/>} />
                    <Route path='/quizzes' element={<Quizzes/>} />
                </Routes>
            </main>
        </>
    )
}





























{/* https://gamma.app/docs/-rdpod45ynvl8ht1 */}
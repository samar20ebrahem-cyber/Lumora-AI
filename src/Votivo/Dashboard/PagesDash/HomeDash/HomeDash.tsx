
import {
    HiFolderPlus,
    HiShare,
    HiBookOpen,
    HiClipboardDocumentList
} from 'react-icons/hi2'

export function HomeDash() {
    const cardDash = [
        {
            id: 1,
            icon: HiFolderPlus,
            title: 'Upload New File',
            desc: 'Upload your study materials and let AI analyze them.'
        },
        {
            id: 2,
            icon: HiShare,
            title: 'Create Mind Map',
            desc: 'Turn complex topics into simple visual mind maps.'
        },
        {
            id: 3,
            icon: HiBookOpen,
            title: 'AI Explanation',
            desc: 'Understand difficult concepts with simple explanations.'
        },
        {
            id: 4,
            icon: HiClipboardDocumentList,
            title: 'Practice Questions',
            desc: 'Test your knowledge with AI-generated questions.'
        }
    ]
    return (
        <>
            <section className="flex flex-col gap-8 ">
                <div className="relative overflow-hidden rounded-2xl bg-[#34483A] p-6 sm:p-8 text-[#FCF4DC] shadow-sm">
                    <div className="relative z-10 max-w-xl">
                        <p className="mb-3 text-sm font-medium text-[#D5DEC9]">Good evening</p>
                        <h1 className="mb-3 text-3xl font-bold">Ready to learn smarter?</h1>
                        <p className="text-sm leading-7 text-[#E5E9DD]">Your learning journey continues here. Let's make today productive!</p>
                    </div>
                    <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/5" />
                    <div className="absolute -bottom-24 right-28 h-48 w-48 rounded-full bg-white/5" />
                </div>
                <div>
                    <div className="mb-5">
                        <h2 className="text-xl font-bold text-[#34483A]">Quick Actions</h2>
                        <p className="mt-1 text-sm text-[#667368]">What would you like to do today?</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {
                            cardDash.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div
                                        key={item.id}
                                        className="group cursor-pointer rounded-2xl border border-[#E8EBDD] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8C5B3] hover:shadow-md"
                                    >
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EBDD] text-[#34483A] transition-colors duration-300 group-hover:bg-[#34483A] group-hover:text-white">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h2 className="mb-2 font-bold text-[#34483A]">{item.title}</h2>
                                        <p className="text-sm leading-6 text-[#667368]">{item.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section >
        </>
    )
}
import { HiCloudArrowUp } from 'react-icons/hi2'
import { useState } from 'react'
export function MindMaps() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    return (
        <>
            <section>
                <h1 className="text-2xl font-bold text-[#34483A]">Mind Maps</h1>
                <p className="mt-2 text-sm text-[#667368]">Turn your lectures into visual knowledge.</p>
                <p>Upload your study material and let Lumora organize everything for you.</p>
                <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#B8C5B3] bg-white px-6 py-12 text-center transition-colors hover:border-[#34483A]">
                    <HiCloudArrowUp className="mb-4 h-12 w-12 text-[#34483A]" />
                    <h2 className="text-lg font-bold text-[#34483A]">Drop your file here </h2>
                    <p className="mt-2 text-sm text-[#667368]"> Upload your lecture and let Lumora create your mind maps. </p>
                    <p className="mt-1 text-xs text-[#8A968B]"> PDF, Word, PowerPoint, Excel, and more</p>

                    <input
                        type="file"
                        id="fileUpload"
                        className="hidden"
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,.txt,.rtf,.webp"
                        onChange={(e) => {
                            const file = e.target.files?.[0]

                            if (file) {
                                const allowedExtensions = [
                                    '.pdf', '.doc', '.docx',
                                    '.ppt', '.pptx',
                                    '.xls', '.xlsx', '.csv',
                                    '.txt', '.rtf',
                                    
                                ]

                                const isValid = allowedExtensions.some((extension) =>
                                    file.name.toLowerCase().endsWith(extension)
                                )

                                if (isValid) {
                                    setSelectedFile(file)
                                } else {
                                    alert('This file type is not supported.')
                                }
                            }
                        }}
                    />

                    <label
                        htmlFor="fileUpload"
                        className="mt-5 cursor-pointer rounded-xl bg-[#34483A] px-6 py-3 text-sm font-semibold text-[#FCF4DC] transition-colors hover:bg-[#405846]"
                    >
                        Choose File
                    </label>
                </div>
                {selectedFile && (
                    <div className="mt-4 text-sm text-[#34483A]">
                        <p>Selected file: {selectedFile.name}</p>
                        <p>File size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
                        <p>File type: {selectedFile.type || 'Unknown'}</p>
                    </div>
                )}
            </section>
        </>
    )
}


export default function Layout({children}: {children: React.ReactNode}) {
    return (
    <main className="flex h-screen flex-col items-center justify-between">
        <div className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center pb-8 px-0 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-0">
                {children}
            </div>
        </div>
    </main>
    )}
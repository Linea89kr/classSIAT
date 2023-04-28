function Comp1() {
    /*    숫자가 먼저, 색상은 그 뒤. 색상표의 색상 순서대로 우선순위.*/
    return (
        <div>
            <div className="w-10 h-10 bg-blue-500 bg-red-500"></div>
            <div className="w-10 h-10 bg-red-500 bg-blue-500"></div>
            <div className="w-10 h-10 bg-blue-500 bg-red-500"></div>
            <div className="w-10 h-10 bg-red-500 bg-blue-400"></div>
            <div className="grid-cols-10 gap-2">
                <div className="bg-sky-50 aspect-square"></div>
                <div className="bg-sky-100 aspect-square"></div>
                <div className="bg-sky-200 aspect-square"></div>
                <div className="bg-sky-300 aspect-square"></div>
                <div className="bg-sky-400 aspect-square"></div>
                <div className="bg-sky-500 aspect-square"></div>
                <div className="bg-sky-600 aspect-square"></div>
                <div className="bg-sky-700 aspect-square"></div>
                <div className="bg-sky-800 aspect-square"></div>
                <div className="bg-sky-900 aspect-square"></div>
            </div>
        </div>
    )
}

export default Comp1
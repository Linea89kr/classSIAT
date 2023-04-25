import './App.css';
import {useState, useEffect} from "react";

function App() {

    const [postDatas, setPostDatas] = useState([])
    const [list1, setList1] = useState([]);

    useEffect(() => {
            if (list1.length === 0 && postDatas.length === 0) {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => {
                            setPostDatas(json)
                            setList1(json);
                        }
                    )
            }
        }
    )

    // 초기화 하는 버튼 설정
    const resetList1 = () => setList1(postDatas)

    // 추가 수정 삭제 색인을 만들어볼 것.
    return (
        <div>
            <ul>
                {list1.map(item => <li key={item.id}> {item.title}</li>)}
            </ul>
            <button>추가</button>
            <button>삭제</button>
            <button>수정</button>
            <button>색인</button>
        </div>
    );
}

export default App;

// 모든 setState와 State는 app.tsx에 존재하고, child에서 실행만 하는 것이다.

interface propTypes {
    count: number,
    setCount: (num: number) => void // 하나만 들어오고 그 하나가 number이다 
}

export default function Child(props: propTypes) {
    return (
        <>
            <h1>Child </h1>
            {props.count}
            <button onClick={() => props.setCount(0)}>button</button>
        </>
    );
}
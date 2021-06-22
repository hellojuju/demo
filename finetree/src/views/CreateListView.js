import ListView from './ListView.js';

// HOC 컴포넌트를 구현하기 위해서 재사용 할수있는 컴포넌트 별도로 만듬 
export default function createListView(name){
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션 들이 들어갈 자리
        name,
        render(createElement){
            return createElement(ListView);
        }
    }

}
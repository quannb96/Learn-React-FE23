**_day01_**

- node -v
- npm -v
- yarn (ưu tiên dùng vì nhanh hơn npm)
- packages (draggable, ant, ...)
- props

- example:
  - antd:
    - css: import 'antd/dist/antd.css';
    - example: import { Button } from "antd";

**_day02_**

- Component name, File name: FascalCase (vd: MyApp() )

- style in React: 3 ways:
  +1. `Inline`: `<div style={{color: 'green'}}></div>`.Không khuyên dùng
  +2. `Internal`: const letterStyle = {color: 'green'} bên trong Component. return `<div style={letterStyle}>{props.children}</div>`;
  +3. `External`: @import fileCSS(index.css). return `<div className="letter">{props.children}</div>`; Nên dùng.
  ++3.1.Tạo riêng từng file CSS cho từng Component.
  ++3.2. `@import` "file ./.../..." vào 1 file CSS chung cùng cấp với các Component.

- export Component: 2 ways:
  +1. `export Component`: import {Component} from 'file'.
  +2. `export default Component`: import Component from 'file', không cần {}, có thể đổi Component thành tên khác để sử dụng sau đó.

**_day04_**

# State & lifecycle:

## State:

- Tồn tại nội tại trong component
- Được thay đổi bên trong component
- Khi state thay đổi thì component thực hiện rerender

## Component lifecycle

- Mounting (Hiển thị)

  - Constructor
  - render
  - _componentDidMount_ (Chạy ngay sau khi Component render lần đầu tiên và chỉ cahyj duy nhất 1 lần trong vòng đời của component)

- Updating (cập nhật)

  - shouldComponentUpdate (dùng khi nâng cao, component nhiều state)
  - render
  - _componentDidUpdate_

- Unmounting (biến mất)
  - _componentWillUnmount_ (chạy trước khi component biến mất)

State&props: 1local: 1inComponent, 2Rerender
2Global state (Redux)
3Prop-reAad-only
Component life cycle:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/?fbclid=IwAR0zoJRXlIjoDQhpihYZB50Pb_IeZA7b7slKRa8_z-ukjb2WbffSWGEYVoQ

**ThêmFile:**
_jsconfig.json_ trong src project
{
"compilerOptions": {
"baseUrl": "./src",
"checkJs": true,
"jsx": "react"
}
}

# Context

- Shared state global / data in app
  **file App.js:** export TodoListContext (export 1 lần ở file chung, import để dùng state/data cho tất cả các file con)

`````js
import React, { useState } from "react";
import "./App.css";
import { TodoApp } from "./TodoApp/TodoApp";

export const TodoListContext = React.createContext([]);

function App() {
const [todoList, setTodoList] = useState([
{ id: 1, description: "test context", done: false },
]);

return (
<TodoListContext.Provider value={todoList}>

<div className="App">
<TodoApp />
</div>
</TodoListContext.Provider>
);
}
export default App;``

D
**file TodoApp:**

````js
import { TodoListContext } from "../App";

export function TodoApp() {
const todoListContext = useContext(TodoListContext);
console.log(todoListContext);

return (
<TodoItem />
);
}```

===============================
# HOOK

- Hook được tại ra để lập trình viên có thể sử dụng tất cả tính năng của ReactJS mà không cần sử dụng đến Claas Component.
- Hook được khai báo ở đầu một function component (không sử dụng Hook trong Class Component)
- Hoook ngắn gọn hơn Class Component, code Hook thân thiện với ngôn ngữ con người

* useState: không truyền trực tiếp data từ props vào useState.
  `const [user, setUser] = useState([])`
* useEffect: dùng để cập nhật các giá trị từ props vào state
+Khi userData thay đổi thì useEffect sẽ chạy lại
```js
useEffect(() => {
  setUser(props.userData)
}, [props.userData])
`````

- Custom Hook:

* Được khởi tạo với tên bắt đầu bằng 'use'. Ex: useSaladSelect(), useState(), useEffect()
* Giúp người dùng tạo ra các Block chỉ chứa logic và tái sử dụng (gọi chung là custom Hook)

```js
useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDataLength(data?.length ?? 0); // dấu ? ở length của data: trường hợp data server trả về rỗng, thì dấu ? để đưa length data về null, null => trả về 0
        setData(data);
      });
  });
` {data?.length ?? 0} : js operator
```

# Refs

- Giúp truy cập vào thành phần DOM trong React (thường là các node)

# 2022-06-13

# Moxb ===== (observable , action, computed, reaction) (state ~ useState: [observable , action], computed, reaction(~useEffect))

TodoStore:

```js
import { makeObservable, observable, action } from "mobx";

class TodoStore {
  todoList = [];

  constructor() {
    makeObservable(this, {
      todoList: observable,
      updateTodoList: action,
    });
  }
  updateTodoList(newTodoList) {
    this.todoList = newTodoList;
  }
}

export const todoStore = new TodoStore();
```

```js
import { observer } from "mobx-react";
export const TodoApp = observer(({ todoStore }) => {...})
```

### Redux

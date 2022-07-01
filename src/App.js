import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
  ];

  function imgUpdate(num) {
    setCount(num);
  }

  return (
    <div className="phone">
      {data.map((url, index) => (
        <img
          src={index === count ? url : 0}
          alt="error"
          className="content show"
          key={index}
        />
      ))}

      <nav>
        <ul>
          <li className={count===0?"active":""} onClick={() => imgUpdate(0)}>
            <i className="fas fa-home"></i>
            <p>Home</p>
          </li>
          <li className={count===1?"active":""} onClick={() => imgUpdate(1)}>
            <i className="fas fa-box"></i>
            <p>Work</p>
          </li>
          <li className={count===2?"active":""} onClick={() => imgUpdate(2)}>
            <i className="fas fa-book-open"></i>
            <p>Blog</p>
          </li>
          <li className={count===3?"active":""} onClick={() => imgUpdate(3)}>
            <i className="fas fa-users"></i>
            <p>About Us</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./App.css";
import timelineElements from "./data";

function App() {
  let workIcon = { background: "limegreen" };
  let schoolIcon = { background: "lightcoral" };

  return (
    <div>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((items) => {
          return (
            <VerticalTimelineElement
              key={items.id}
              date={items.date}
              dateClassName="date"
              iconStyle={items.icon === 'work' ? workIcon : schoolIcon}
            ></VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;

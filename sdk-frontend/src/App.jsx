import "./App.css";
import ChatBubble, { useConvaiClient } from "./chat/index";

function App() {
  const { client } = useConvaiClient(
    "36720106-3283-11ee-8365-42010a40000b",
    "2c37cc3c56366df491563a87624a0221"
  );

  return (
    <div className="App">
      <ChatBubble
        client={client}
        chatHistory={"Show"}
        chatUiVariant={"Toggle History Chat"}
      />
    </div>
  );
}

export default App;

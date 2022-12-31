import './App.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/keybinding-vim";

function onChange(newValue) {
  console.log("change", newValue);
}

function App() {
  return (
    <div width="100%">
      <AceEditor
        mode="python"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        keyboardHandler="vim"
        defaultValue={`def console_log():
  print("")`}
      ></AceEditor>
    </div>
  );
}

export default App;

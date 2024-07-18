import Textfield from '@atlaskit/textfield';
import { Label } from '@atlaskit/form';

function App(){
  return (
    <>
      <h3> Danh sách cần làm </h3>
      <Textfield name='add-todo' placeholder='Thêm việc cần làm ...'></Textfield>
    </>
  );
}

export default App;

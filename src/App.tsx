
import _ from 'lodash';
import MemoryQuiz  from './MemoryQuiz';

function App() {

  console.log('re-render app');

  const clist = [];
  for (let i = 0; i < 10; i++) clist.push(i, i); 

  return (
    <div className="App flex flex-col items-center justify-top p-4 font-bold">
      <h1 className="font-bold my-4 text-6xl">MEMORIA - ESPACIO SALUDABLE 🍐</h1>
      <MemoryQuiz clist={_.shuffle(clist)}></MemoryQuiz>
    </div>
  )
}

export default App

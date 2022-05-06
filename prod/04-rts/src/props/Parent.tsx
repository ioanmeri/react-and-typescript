import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
   test
  </ChildAsFC>;
};

export default Parent;
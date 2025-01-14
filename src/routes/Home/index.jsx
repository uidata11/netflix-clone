import { useTextInput } from "../../components/ul/TextInput";

const Home = () => {
  const Text = useTextInput();
  return (
    <div>
      <h1>Home</h1>
      <Text.Input />
    </div>
  );
};

export default Home;
